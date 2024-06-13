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
      )}
    </>
  );
}
