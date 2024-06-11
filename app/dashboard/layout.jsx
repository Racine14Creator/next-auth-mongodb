import Navbar from "@/components/Navbar";

export default function layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className='max-w-[1000px] mx-auto py-5 px-3'>{children}</div>
    </div>
  );
}
