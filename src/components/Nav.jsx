import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="sticky mx-auto top-2 md:top-10 flex md:mx-auto  drop-shadow-lg z-10">
      <div className="flex flex-wrap mx-auto md:items-center justify-center gap-5 py-2 px-2.5 md:gap-x-20 bg-white rounded-full md:py-3 md:px-10 border">
        <Link href={"/"} className="text-xl text-gray-400 hover:text-red-500">
          Home
        </Link>
        <a href="#skills" className="text-xl hover:text-red-500">
          Skills
        </a>
        <Link href={"/projects"} className="text-xl  hover:text-black">
          Projects
        </Link>
        <a href="#contact" className="text-xl hover:text-red-500">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Nav;
