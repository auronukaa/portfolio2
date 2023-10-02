import Link from "next/link";
import Sidebar from "./sidebar";
import Container from "./container";

const links = [
  {
    id: 1,
    title: "About",
  },
  {
    id: 2,
    title: "Offer",
  },
  {
    id: 3,
    title: "Process",
  },
];

const Navbar = () => {
  return (
    // <div className="border-b fixed inset-0 z-[9999] bg-white h-[68px]">
    //   <div className="mx-auto max-w-7xl px-4 sm:px-6">
    //     <div className="relative h-16 flex items-center justify-between">
    //       <div>
    //         <Link href="/">
    //           <span className="text-lg sm:text-xl font-semibold tracking-tight">
    //             .sitesculpting
    //           </span>
    //         </Link>
    //       </div>

    //       <div>
    //         <ul className="hidden sm:flex items-center">
    //           {links.map((item) => (
    //             <li key={item.id} className="text mx-5 font-medium">
    //               <Link href="/">{item.title}</Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //       <div>
    //         <button className="bg-[#2253F5] hover:bg-blue-500 transition-all ease-in-out duration-200 px-4 py-2 font-medium text-sm text-white rounded-md hidden sm:block">
    //           Book a Call
    //         </button>
    //       </div>
    //       <Sidebar />
    //     </div>
    //   </div>
    // </div>
    <div className="flex justify-center h-[40px] m-5 items-center">
      <Container>
        <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          .sitesculpting
        </span>
      </Container>
    </div>
  );
};

export default Navbar;
