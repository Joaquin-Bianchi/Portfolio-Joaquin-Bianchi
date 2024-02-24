import Link from "next/link";
import React from "react";

function NavDesktop() {
  return (
    <nav className="animate-zoom-in sticky top-1 md:top-8   hidden md:flex items-center justify-center drop-shadow-lg z-20 ">
      <div
        className="font-Montserrat uppercase flex items-center justify-center  gap-x-20 py-3 px-10 
       border border-black rounded-full dark:border-transparent  dark:bg-zinc-800 dark:text-white  dark:backdrop-filter dark:backdrop-blur-3xl  dark:bg-opacity-[0.87] bg-white backdrop-filter backdrop-blur-3xl bg-opacity-[0.87]"
      >
        <a
          href="#"
          className="text-sm  transition duration-300 ease-out hover:text-orange-500"
        >
          Inicio
        </a>
        <a
          href="#projects"
          className="text-sm   transition duration-300 ease-out hover:text-orange-500"
        >
          Proyectos
        </a>
        <a
          href="#skills"
          className="text-sm  transition duration-300 ease-out hover:text-orange-500"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="text-sm  transition duration-300 ease-out hover:text-orange-500"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}

export default NavDesktop;
