"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function DashboardPage() {
  const { data: session } = useSession();
  // console.log(session);

  return (
    <div className=''>
      <h3 className='mb-5 text-5xl font-bold'>
        Welcome back,{" "}
        <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
          {session?.user?.name}
        </span>
      </h3>

      <p className='text-xl text-fourground'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum nam
        fuga assumenda inventore, quam quos deserunt ad mollitia, ratione
        sapiente repellendus vel possimus ducimus asperiores? Repudiandae
        debitis quibusdam quae.
      </p>
      <div className='p-5 rounded-md bg-black mt-5'>
        <div className='basis-12 w-full flex justify-between items-center'>
          <div className='w-3/4 text-white'>
            <h3 className='text-3xl font-bold'>Dashboard</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
              odit quod. Repellendus, praesentium quidem!
            </p>
            <button className='mt-3 px-6 py-2 rounded-md bg-green-500 text-white cursor-pointer'>
              Read more
            </button>
          </div>
          <div className='w-1/4 p-3 bg-white flex justify-center items-center'>
            <Image width={420} height={320} src={"/assets/sneakers.jpg"} />
          </div>
        </div>
      </div>

      <div className='mt-5 bg-black text-white p-5 rounded-md'>
        <table className='table-auto w-full rounded-lg shadow-md overflow-hidden'>
          <thead>
            <tr className='bg-gray-800 text-black font-bold text-left'>
              <th className='px-4 py-2'>Name</th>
              <th className='px-4 py-2'>Position</th>
              <th className='px-4 py-2'>Email</th>
              <th className='px-4 py-2'>Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200 hover:bg-gray-100 hover:text-black'>
              <td className='px-4 py-2'>John Doe</td>
              <td className='px-4 py-2'>Software Engineer</td>
              <td className='px-4 py-2'>john.doe@example.com</td>
              <td className='px-4 py-2'>$100,000</td>
            </tr>
            <tr className='border-b border-gray-200 hover:bg-gray-100 hover:text-black'>
              <td className='px-4 py-2'>Jane Smith</td>
              <td className='px-4 py-2'>Marketing Manager</td>
              <td className='px-4 py-2'>jane.smith@example.com</td>
              <td className='px-4 py-2'>$80,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
