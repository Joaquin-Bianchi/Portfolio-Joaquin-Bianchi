import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="sticky top-3 flex mx-auto item center  drop-shadow-lg ">
      <div className="flex gap-x-20 bg-white rounded-full py-3 px-10 border">
        <Link href={"/"} className="text-xl hover:text-red-500">
          Home
        </Link>
        <a href="#about" className="text-xl hover:text-red-500">
          About
        </a>
        <Link
          href={"/projects"}
          className="text-xl text-gray-400 hover:text-black"
        >
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
