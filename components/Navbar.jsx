"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Profile", href: "/dashboard/profile" },
  { name: "Tracker", href: "/dashboard/trackers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='border-b'>
      <div className='max-w-[1000px] mx-auto h-[10vh] flex items-center justify-between'>
        <h3 className='text-4xl font-bold'>
          <Link href={`/dashboard`}>
            Racine14 <span className='text-blue-500'>Creator</span>
          </Link>
        </h3>

        <button
          onClick={toggleMenu}
          className='md:hidden block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 p-2 rounded-md'
        >
          <svg
            className='h-10 w-10 text-black bg-green-300 p-5 rounded-md'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M3 5h14M3 10h14M3 15h14'
              clipRule='evenodd'
            />
          </svg>
        </button>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:flex-row md:basis-auto md:justify-between absolute md:relative bg-white w-full md:w-auto py-4 md:py-0 mt-4 md:mt-0 shadow-xl md:shadow-none rounded-md md:rounded-none px-4 md:px-0 z-50`}
        >
          {navLinks.map((item, index) => (
            <li key={index} className='text-center md:text-left'>
              <Link
                href={item.href}
                className={`block px-3 py-2 rounded-md hover:bg-gray-200 ${
                  pathname === item.href ? "bg-gray-400 text-white" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className='ml-3 text-center md:text-left'>
            <button
              onClick={() => signOut()}
              className='bg-red-500 text-white cursor-pointer rounded-md px-3 py-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
