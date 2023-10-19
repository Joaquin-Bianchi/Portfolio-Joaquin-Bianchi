import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="sticky top-1 md:top-8   hidden xl:flex items-center justify-center drop-shadow-lg z-20 ">
      <div
        className=" font-Montserrat uppercase flex items-center justify-center  gap-x-20 py-3 px-10 
       border border-black rounded-full dark:border-transparent  dark:bg-zinc-800 dark:text-white  dark:backdrop-filter dark:backdrop-blur-3xl  dark:bg-opacity-[0.87] bg-white backdrop-filter backdrop-blur-3xl bg-opacity-[0.87]"
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
