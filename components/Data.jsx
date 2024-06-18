import Link from "next/link";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/trackers", {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error(error);
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
export default async function Data() {
  const { trackers } = await getData();

  return (
    <>
      {trackers.length == 0 ? (
        <div className='relative w-full sahdow-md border border-red-500 rounded-md p-5'>
          <h3 className='text-center text-red-500'>You don't have data</h3>
        </div>
      ) : (
        <table className='table-auto w-full rounded-lg shadow-md overflow-hidden'>
          <thead>
            <tr className='bg-gray-800 text-white font-bold text-left'>
              <th className='px-4 py-2'>Event</th>
              <th className='px-4 py-2'>Amount</th>
              <th className='px-4 py-2'>Devise</th>
              <th className='px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trackers.map((item, index) => (
              <tr
                key={index}
                className='border-b border-gray-200 hover:bg-gray-100 hover:text-black'
              >
                <td className='px-4 py-2'>
                  {item.eventCome === "" ? (
                    <span className='font-bold'>None</span>
                  ) : (
                    <span
                      className={`${
                        item.eventCome === "Expense"
                          ? "text-red-500"
                          : "text-green-500"
                      } text-sm font-bold`}
                    >
                      {item.eventCome}
                    </span>
                  )}
                </td>
                <td className='px-4 py-2'>
                  <span
                    className={`${
                      item.eventCome === "Income"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.amount}
                  </span>
                </td>
                <td className='px-4 py-2'>
                  <span
                    className={
                      item.devise === "Frw" ? "text-green-500" : "text-red-500"
                    }
                  >
                    {item.devise}
                  </span>
                </td>
                <td className='px-4 py-2'>
                  <div className='actions group flex items-center justify-center'>
                    <Link
                      href={`#`}
                      className='mr-2 rounded-md px-5 py-2 bg-green-500 text-white'
                    >
                      Edit
                    </Link>
                    <button className='mr-2 rounded-md px-5 py-2 bg-red-600 border-none outline-none text-white'>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
