import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import ButtonDarkMode from "./buttons/ButtonDarkMode";

function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: "#", label: "Inicio" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/joaquin-bianchi",
      icon: FaGithub,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/joaquin-bianchi-dev",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:your.joaqobianchi13@gmail.com",
      icon: FaEnvelope,
      label: "Email",
    },
  ];

  return (
    <header className="bg-white sticky dark:bg-zinc-800 md:hidden top-0 z-50">
      <div className="mx-auto flex h-16 border dark:border-zinc-700 border-zinc-200 items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        <a className="text-black dark:text-white" href="/">
          <span className="sr-only">Home</span>
          <h2 className="font-bold text-sm"> Joaquin Bianchi</h2>
        </a>

        <div className="flex items-center gap-4">
          <ButtonDarkMode />
          <button
            className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <nav
        className={`absolute top-16 left-0 w-full bg-white dark:bg-zinc-800 shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 gap-4 mb-6">
            {menuItems.map((item, index) => (
              <li
                key={item.href}
                className={`transform transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <a
                  href={item.href}
                  className="block text-sm font-medium text-zinc-800 transition-colors hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-400 p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="border-t border-zinc-200 dark:border-zinc-700 pt-4">
            {/* <h3 className="text-sm font-semibold text-center text-zinc-800 dark:text-zinc-200 mb-2">
              Contacto
            </h3> */}
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-zinc-500 uppercase hover:text-orange-500 dark:text-zinc-400 dark:hover:text-orange-400 transition-all duration-300 ease-in-out ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${(menuItems.length + index) * 50}ms`,
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavbarMobile;
