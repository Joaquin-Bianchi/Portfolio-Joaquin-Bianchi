import React, { useState } from "react";
import ButtonDarkMode from "./buttons/ButtonDarkMode";

function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white sticky dark:bg-zinc-800 md:hidden top-0 z-50 ">
      <div className="mx-auto flex h-16 border dark:border-zinc-900 border-zinc-200 items-center gap-8 px-4 sm:px-6 lg:px-8 relative">
        <a className="text-black" href="/">
          <span className="sr-only">Home</span>
          <h2 className="font-bold text-sm dark:text-white">
            {" "}
            Joaquin Bianchi
          </h2>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav
            className={`absolute top-16 left-0 animate-fade-in-down duration-0  font-Montserrat bg-white uppercase dark:bg-zinc-800 md:hidden ${
              isMenuOpen ? "block" : "hidden"
            } z-10 w-full`}
          >
            <ul className="flex   dark:bg-zinc-800 dark:text-white  dark:backdrop-filter dark:backdrop-blur-3xl  dark:bg-opacity-[0.87] bg-white rounded-full flex-col mb-5 mt-3 items-center gap-6 text-sm">
              <li>
                <a
                  href="#"
                  className="text-sm  transition duration-300 ease-out hover:text-orange-500"
                  onClick={closeMenu}
                >
                  Inicio
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-sm   transition duration-300 ease-out hover:text-orange-500"
                  onClick={closeMenu}
                >
                  Proyectos
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="text-sm   transition duration-300 ease-out hover:text-orange-500"
                  onClick={closeMenu}
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm   transition duration-300 ease-out hover:text-orange-500"
                  onClick={closeMenu}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <ButtonDarkMode />
            </div>

            <button
              className="block rounded bg-gray-0 p-5.5 dark:text-white dark:hover:text-orange-500 text-black transition hover:text-gray-700/75 md:hidden"
              onClick={toggleMenu}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavbarMobile;
