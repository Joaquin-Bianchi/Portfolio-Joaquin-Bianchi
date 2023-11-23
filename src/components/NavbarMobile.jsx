import React from "react";
import ButtonDarkMode from "./buttons/ButtonDarkMode";

function NavbarMobile() {
  return (
    <header className="bg-white dark:bg-zinc-800 md:hidden sticky  ">
      <div className="mx-auto flex h-16  border  dark:border-zinc-900 border-black items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="text-black" href="/">
          <span className="sr-only">Home</span>
          <h2 className="font-bold text-sm dark:text-white">
            {" "}
            Joaquin Bianchi
          </h2>
        </a>

        <div className="flex flex-1 items-center  justify-end md:justify-between">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  History
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <ButtonDarkMode />
            </div>

            <button className="block rounded bg-gray-0 p-5.5 dark:text-white dark:hover:text-orange-500  text-black transition hover:text-gray-700/75 md:hidden">
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
