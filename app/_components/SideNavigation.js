"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-r border-primary-900 h-full sm:w-64 w-full sm:p-4 p-2 transition-all flex-shrink-0 sm:flex sm:flex-row sm:items-center items-start justify-between">
      <div className="sm:hidden flex justify-between items-center w-full">
        <button onClick={toggleNav} className="text-primary-600">
          {/* Toggle Icon (e.g., hamburger) */}
          <span className="text-2xl">☰</span>
        </button>
      </div>
      <ul
        className={`flex flex-col sm:flex-row gap-4 text-sm sm:text-lg w-full justify-center ${
          isOpen ? "block" : "hidden sm:block"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.name} className="w-full sm:w-auto">
            <Link
              href={link.href}
              className={`flex items-center gap-2 sm:gap-4 px-3 py-2 sm:px-5 sm:py-3 font-semibold text-primary-200 ${
                pathname === link.href ? "bg-primary-900 text-primary-100" : ""
              } hover:bg-primary-900 hover:text-primary-100 transition-all`}
            >
              {link.icon}
              <span className={`${isOpen ? "inline" : "hidden"} sm:inline`}>
                {link.name}
              </span>
            </Link>
          </li>
        ))}
        <li className="mt-auto w-full sm:w-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
