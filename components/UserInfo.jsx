"use client";
import { signOut, useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className='flex relative'>
      <div className='shadow-lg p-8 rounded-md flex flex-col gap-2 my-6'>
        <div>
          Name: <span className='font-bold'>{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className='font-bold'>{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className='bg-red-500 rounded-md text-white font-bold px-6 py-2 mt-3'
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
