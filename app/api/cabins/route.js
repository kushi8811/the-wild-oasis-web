import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET({ params }) {
  // Validate that params and cabinId exist
  if (!params || !params.cabinId) {
    return new Response(
      JSON.stringify({ error: "Missing or invalid cabinId" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return new Response(JSON.stringify({ cabin, bookedDates }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching cabin data:", error);
    return new Response(JSON.stringify({ message: "Cabin not found" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
