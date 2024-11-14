"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(formData) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in !");

  const nationalID = formData.get("nationalID");

  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID ");

  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");

  //revalidates the cache by adding the path to it
  revalidatePath("/account/profile");
}

export async function createReservation(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in !");

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: formData.get("numGuests"),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) throw new Error("Booking could not be created");

  revalidatePath(`/cabins/${bookingData.cabinId}`);

  redirect("/cabins/thankyou");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in !");

  //Extra protections
  const guestBooking = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBooking.map((booking) => booking.id);
  if (!guestBookingsIds.includes(bookingId)) {
    throw new Error("You are not allowed to delete this booking");
  }

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Booking could not be deleted");

  //revalidates the cache by adding the path to it
  revalidatePath("/account/reservations");
}
export async function updateReservation(formData) {
  const bookingId = Number(formData.get("bookingId"));

  //Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in !");

  //Extra protections || Autherisation
  const guestBooking = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBooking.map((booking) => booking.id);
  if (!guestBookingsIds.includes(bookingId)) {
    throw new Error("You are not allowed to update this booking");
  }

  //This formData.get gets the value from <form> or formData
  //Building update Data
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  //Mutation
  const { data, error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();
  //Error handling
  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  //Revalidate
  revalidatePath(`/account/reservation/edit/${bookingId}`);
  //Navigation
  redirect("/account/reservations");
}
export async function signInAction() {
  //provider 'google'
  ///redirectTo , redirets to when sucessfully
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
