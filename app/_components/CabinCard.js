import Image from "next/image";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/solid";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col sm:flex-row border-primary-800 border rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full sm:w-1/3 h-64 sm:h-72 md:h-80">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col sm:flex-1 p-4 sm:p-6 bg-primary-950">
        <h3 className="text-accent-500 font-semibold text-2xl mb-3">
          Cabin {name}
        </h3>

        <div className="flex gap-3 items-center mb-2">
          <UsersIcon className="h-5 w-5 text-primary-600" />
          <p className="text-lg text-primary-200">
            For up to <span className="font-bold">{maxCapacity}</span> guests
          </p>
        </div>

        <p className="flex gap-3 justify-end items-baseline">
          {discount > 0 ? (
            <>
              <span className="text-3xl font-[350]">
                ${regularPrice - discount}
              </span>
              <span className="line-through font-semibold text-primary-600">
                ${regularPrice}
              </span>
            </>
          ) : (
            <span className="text-3xl font-[350]">${regularPrice}</span>
          )}
          <span className="text-primary-200">/ night</span>
        </p>
      </div>

      {/* Button Section */}
      <div className="bg-primary-950 border-t border-t-primary-800 text-right">
        <Link
          href={`/cabins/${id}`}
          className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
        >
          Details & reservation &rarr;
        </Link>
      </div>
    </div>
  );
}

export default CabinCard;
