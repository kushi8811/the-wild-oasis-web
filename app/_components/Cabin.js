import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="grid md:grid-cols-[3fr_4fr] grid-cols-1 gap-6 md:gap-20 border border-primary-800 py-3 px-5 md:px-10 mb-24">
      <div className="relative -translate-x-3 md:translate-x-0 h-60 md:h-auto w-full md:w-auto scale-90 md:scale-[1.2] rounded-lg overflow-hidden">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h3 className="text-accent-100 font-black text-4xl md:text-7xl mb-5 md:translate-x-[-254px] bg-primary-950 p-4 md:p-6 pb-1 w-full md:w-[150%]">
          Cabin {name}
        </h3>

        <p className="text-md md:text-lg text-primary-300 mb-5 md:mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-2 md:gap-4 mb-5 md:mb-7">
          <li className="flex gap-2 md:gap-3 items-center">
            <UsersIcon className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />
            <span className="text-md md:text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-2 md:gap-3 items-center">
            <MapPinIcon className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />
            <span className="text-md md:text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-2 md:gap-3 items-center">
            <EyeSlashIcon className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />
            <span className="text-md md:text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
