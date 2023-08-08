import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="sticky flex mx-auto item center m-9 ">
      <div className="flex gap-6 bg-white rounded-3xl p-2 px-9">
        <Link href={"/"} className="text-xl hover:text-red-500">
          Home
        </Link>
        <a href="#about" className="text-xl hover:text-red-500">
          About
        </a>
        <Link href={"/projects"} className="text-xl hover:text-red-500">
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
