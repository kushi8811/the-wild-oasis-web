import Link from "next/link";
import Image from "next/image";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col md:flex-row bg-white border border-gray-300 rounded-lg shadow-md mb-6 overflow-hidden">
      <div className="relative h-48 md:h-32 w-full md:w-64">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-grow px-6 py-4 flex flex-col justify-between">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold text-gray-800 truncate">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-500 text-white py-1 px-3 text-xs font-bold uppercase rounded-full">
              past
            </span>
          ) : (
            <span className="bg-green-500 text-white py-1 px-3 text-xs font-bold uppercase rounded-full">
              upcoming
            </span>
          )}
        </div>

        <p className="text-sm text-gray-600">
          {format(new Date(startDate), "EEE, MMM dd yyyy")}{" "}
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          — {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex items-center gap-4 mt-4">
          <p className="text-lg font-semibold text-accent-500">${totalPrice}</p>
          <p className="text-xs text-gray-500">
            for {numGuests} guest{numGuests > 1 && "s"}
          </p>
        </div>

        <p className="text-xs text-gray-500 mt-2">
          Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
        </p>

        <div className="flex gap-4 mt-4">
          {!isPast(startDate) && (
            <>
              <Link
                href={`/account/reservations/edit/${id}`}
                className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                <PencilSquareIcon className="h-5 w-5" />
                <span>Edit</span>
              </Link>
              <DeleteReservation onDelete={onDelete} bookingId={id} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReservationCard;
