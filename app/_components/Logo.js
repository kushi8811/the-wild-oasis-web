import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-4 z-10">
      <Image
        src={logo}
        height={30} // Adjusted for smaller screen size
        width={30}
        quality={90}
        alt="The Wild Oasis logo"
        className="sm:h-16 sm:w-16"
      />
      <span className="text-base font-semibold sm:text-xl text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
