import Link from "next/link";
import React from "react";
import { CgGames } from "react-icons/cg";
import { IoIosAddCircle } from "react-icons/io";
import { MdList } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className=" border border-black pl-10  ">
        <CgGames className="text-5xl hover:text-blue-500" />
      </div>

      {/* addblogs */}
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <Link
          href={"/admin/addProduct"}
          className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0_0_#000]"
        >
          <IoIosAddCircle className="text-2xl" />
          <p>AddGames</p>
        </Link>

        <Link
          href={"/admin/blogList"}
          className="flex items-center border mt-5 border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0_0_#000]"
        >
          <MdList className="text-2xl" />
          <p>GamesLists</p>
        </Link>

        <Link
          href={"/admin/subscriptions"}
          className="flex items-center mt-5 border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0_0_#000]"
        >
          <MdAttachEmail className="text-2xl" />
          <p>Subscription</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
