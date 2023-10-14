import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="sticky top-1 md:top-8  flex items-center justify-center drop-shadow-lg z-10 ">
      <div
        className=" font-Montserrat uppercase flex items-center justify-center  gap-x-20 py-3 px-10 
       border rounded-full  dark:bg-white dark:backdrop-filter dark:backdrop-blur-3xl  dark:bg-opacity-[0.87] border-gray-300 bg-white backdrop-filter backdrop-blur-3xl bg-opacity-[0.87]"
      >
        <Link
          href={"/"}
          className="text-sm  transition duration-300 ease-out hover:text-orange-500"
        >
          Home
        </Link>
        <a
          href="#skills"
          className="text-sm  transition duration-300 ease-out hover:text-orange-500"
        >
          Skills
        </a>
        <Link
          href={"/projects"}
          className="text-sm   transition duration-300 ease-out hover:text-orange-500"
        >
          Projects
        </Link>
        <a
          href="#contact"
          className="text-sm  transition duration-300 ease-out hover:text-orange-500"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Nav;
