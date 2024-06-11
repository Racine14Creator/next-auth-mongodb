"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Profile", href: "/dashboard/profile" },
  { name: "About Us", href: "/dashboard/about" },
];
export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className='border-b'>
      <div className='max-w-[1000px] mx-auto h-[10vh] flex justify-between items-center'>
        <h3 className='text-4xl font-bold'>
          <Link href={`/dashboard`}>
            Racine14 <span className='text-blue-500'>Creator</span>
          </Link>
        </h3>
        <ul className='flex justify-between items-center gap-2'>
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`${
                  pathname === item.href ? "bg-gray-400" : ""
                } rounded-md px-5 py-2`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <button
            onClick={() => signOut()}
            className='bg-red-500 text-white cursor-pointer rounded-md px-5 py-2'
          >
            Log Out
          </button>
        </ul>
      </div>
    </div>
  );
}
