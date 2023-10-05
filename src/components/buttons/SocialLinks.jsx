import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

function SocialLinks({ size }) {
  return (
    <div className="flex z-20">
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/Joaquin-Bianchi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="transition ease-in-out hover:text-orange-500 duration-300"
            size={size}
          ></FaGithub>
        </a>
        <a
          href="https://www.linkedin.com/in/joaquin-bianchi-89725721a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className="transition ease-in-out hover:text-orange-500 duration-300"
            size={size}
          ></FaLinkedin>
        </a>
        <a
          href="https://t.me/JoaquinBianchi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram
            className="transition ease-in-out hover:fill-orange-500 duration-300"
            size={size}
          ></FaTelegram>
        </a>
      </div>
    </div>
  );
}

export function ButtonGitRepo({ linkRepo }) {
  return (
    <a
      className="button"
      target="_blank"
      href={linkRepo}
      rel="noopener noreferrer"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
          fill="white"
        ></path>
      </svg>
      <p className="text">Code</p>
    </a>
  );
}

export function ButtonDemo({ linkDemo }) {
  return (
    <a
      href={linkDemo}
      target="_blank"
      className="relative inline-flex items-center justify-center p-3 px-4 py-2.5 overflow-hidden font-medium  transition duration-300 ease-out border-2 border-orange-500  md:rounded-md rounded-full shadow-md group
    bg-orange-500 text-orange-500 cursor-pointer"
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease font-Montserrat font-bold">
        Demo
      </span>
      <span className="relative invisible">Button Text</span>
    </a>
  );
}

export default SocialLinks;
