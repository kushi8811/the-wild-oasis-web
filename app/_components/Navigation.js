import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();
  console.log(session);

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-4 sm:gap-16 justify-between sm:justify-start items-center flex-wrap">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors text-sm sm:text-xl"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors text-sm sm:text-xl"
          >
            About
          </Link>
        </li>
        <li className="flex items-center gap-2 sm:gap-4">
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <img
                className="h-6 sm:h-8 rounded-full"
                src={session.user.image}
                referrerPolicy="no-referrer"
              />
              <span className="text-sm sm:text-lg">Guest Area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors text-sm sm:text-xl"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
