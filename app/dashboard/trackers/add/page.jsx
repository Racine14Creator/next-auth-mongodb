"use client";

import BackEvent from "@/components/BackEvent";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTracker() {
  const [error, setError] = useState("");
  const { data: session } = useSession();
  const userId = session?.user.email;
  const [amount, setAmount] = useState("");
  const [eventCome, setEventCome] = useState("");
  const [devise, setDevise] = useState("");
  const [desc, setDesc] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    if (!amount || !desc) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await fetch("/api/trackers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, amount, eventCome, devise, desc }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/dashboard/trackers");
      } else {
        console.log(res.statusText);
        setError("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BackEvent
        name={"Back"}
        href={"/dashboard/trackers"}
        titleOfPage={"Add Tracker"}
      />
      <div className='flex justify-between gap-5'>
        <div className='flex-3 p-5 shadow-lg rounded-md'>
          <form action={handleSubmit} className='flex flex-col gap-5'>
            <input
              type='hidden'
              onChange={() => setUser(userId)}
              placeholder='Amount'
              className='input outline-none border rounded-md'
            />
            <input
              onChange={(e) => setAmount(e.target.value)}
              type='text'
              placeholder='Amount'
              className='input outline-none border rounded-md'
            />
            <select
              onChange={(e) => setEventCome(e.target.value)}
              id='eventCome'
              className='input border-gray-500 rounded-md outline-none select'
            >
              <option defaultValue={""}>Select Event</option>
              <option value='Income'>Income</option>
              <option value='Expense'>Expense</option>
            </select>

            <select
              id='devise'
              onChange={(e) => setDevise(e.target.value)}
              className='rounded-md'
            >
              <option value='' defaultValue={""}>
                Select Devise
              </option>
              <option value={`Fc`}>FRW</option>
              <option value={`Frw`}>FRW</option>
              <option value={`$`}>Dollars</option>
            </select>
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              placeholder='Description'
              className='input rounded-md outline-none text-black border'
            ></textarea>
            <button
              type='submit'
              className='py-2 px-5 bg-green-500 rounded-md w-fit text-white cursor-pointer'
            >
              Register
            </button>
            {error && (
              <div className='w-fit py-2 px-5 cursor-pointer rounded-md text-white bg-red-500'>
                {error}
              </div>
            )}
          </form>
        </div>
        <div className='flex-1 bg-black h-fit text-white rounded-md p-5'>
          <h3>Data</h3>
        </div>
      </div>
    </>
  );
}
