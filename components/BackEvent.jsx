"use client";

import Link from "next/link";

export default function BackEvent({ name, titleOfPage, href }) {
  return (
    <div className='flex justify-between items-center mb-5'>
      <h3 className='text-xl font-bold'>{titleOfPage}</h3>
      <Link
        href={href}
        className='bg-red-500 rounded-md text-white px-6 py-2 cursor-pointer'
      >
        {name}
      </Link>
    </div>
  );
}
