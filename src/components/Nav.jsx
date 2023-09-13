import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="sticky mx-auto top-2 md:top-10 flex md:mx-auto  drop-shadow-lg z-10 border  rounded-full border-gray-300 bg-white backdrop-filter backdrop-blur-lg bg-opacity-60">
      <div className="font-Montserrat uppercase flex flex-wrap mx-auto md:items-center justify-center gap-5 py-2 px-2.5 md:gap-x-20 md:py-3 md:px-10 ">
        <Link href={"/"} className="text-base hover:text-orange-500">
          Home
        </Link>
        <a href="#skills" className="text-base hover:text-orange-500">
          Skills
        </a>
        <Link href={"/projects"} className="text-base  hover:text-orange-500">
          Projects
        </Link>
        <a href="#contact" className="text-base hover:text-orange-500">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Nav;
