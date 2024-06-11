"use client";

import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();
  // console.log(session);

  return (
    <div className=''>
      <h3 className='text-4xl font-bold'>
        Welcome back,{" "}
        <span className='text-blue-500'>{session?.user?.name}</span>
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum nam
        fuga assumenda inventore, quam quos deserunt ad mollitia, ratione
        sapiente repellendus vel possimus ducimus asperiores? Repudiandae
        debitis quibusdam quae.
      </p>
    </div>
  );
}
