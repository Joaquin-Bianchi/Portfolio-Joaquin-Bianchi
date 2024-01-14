"use client";
import React from "react";
import Loader from "./cards/Loader";

import {
  SiBootstrap,
  SiJavascript,
  SiJirasoftware,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { BsGit } from "react-icons/bs";
import { RiNotionFill } from "react-icons/ri";
import { FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaNpm } from "react-icons/fa";
function Skills() {
  return (
    <div id="skills" className="mt-2">
      <section className="dark:text-white">
        <div className="container  mx-auto ">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col mb-2">
              <div className="flex flex-col gap-1 m-auto   md:m-0">
                <h2 className="sm:w-2/5 flex items-center dark:text-white text-gray-900 font-Montserrat font-extrabold title-font text-4xl lg:text-5xl mb-1 sm:mb-0">
                  Skills
                </h2>
                <Loader />
              </div>
            </div>
          </div>
          <p className="flex items-center font-Montserrat font-semibold text-base mt-8 md:text-lg justify-center mb-9">
            FRONTEND
          </p>
          <article className="flex justify-center">
            <div className="flex flex-wrap items-center justify-center  dark:cursor-default  gap-12 text-7xl md:text-8xl">
              {/* <div className="flex flex-col items-center hover:text-orange-600   dark:text-orange-600  ">
                <FaHtml5 className="transition duration-300 ease-out " />
                <span className="text-base font-bold">HTML </span>
              </div>

              <div className="flex flex-col items-center hover:text-blue-600  dark:text-blue-600">
                <FaCss3Alt className="  cursor-pointer transition duration-300 ease-out" />
                <span className="text-base font-bold">CSS </span>
              </div> */}

              <div className=" flex flex-col items-center  ">
                <SiJavascript className="hover:bg-black transition duration-300 ease-out  hover:text-[#ffee00] dark:text-[#ffee00]   cursor-pointer " />
                <span className="hover:text-black dark:text-[#ffee00]  text-base font-bold">
                  JAVASCRIPT
                </span>
              </div>
              <div className="flex flex-col items-center hover:text-cyan-400">
                <SiTailwindcss className=" hover:text-cyan-400 dark:text-cyan-400  cursor-pointer transition duration-300 ease-out" />
                <span className="text-base font-bold dark:text-cyan-400">
                  TAILWIND
                </span>
              </div>

              <div className=" flex flex-col  hover:text-cyan-400  dark:text-cyan-400  cursor-pointer transition duration-300 ease-out items-center">
                <SiReact className="" />
                <span className="text-base font-bold">REACT </span>
              </div>
              <div className=" flex flex-col  hover:text-gray-800  dark:text-white  cursor-pointer transition duration-300 ease-out items-center">
                <SiNextdotjs />
                <span className="text-base font-bold">NEXT JS</span>
              </div>
              <div className="flex flex-col items-center  transition duration-300 ease-out  hover:text-[#00a2ff] dark:text-[#00a2ff] ">
                <SiTypescript className=" cursor-pointer" />
                <span className="text-base font-bold">TYPESCRIPT </span>
              </div>
            </div>
          </article>
          <p className="flex items-center  font-Montserrat font-semibold text-base  md:text-lg justify-center mt-10 mb-9">
            TOOLS
          </p>
          <article className="flex justify-center">
            <div className="flex flex-wrap items-center justify-center  gap-12 text-7xl md:text-8xl">
              <div className="flex flex-col items-center hover:text-orange-600  dark:text-orange-600  cursor-pointer  transition duration-300 ease-out ">
                <BsGit />
                <span className="text-base font-bold">GIT </span>
              </div>

              <div className="flex flex-col items-center hover:text-zinc-700  dark:text-white   cursor-pointer transition duration-300 ease-out">
                <FaGithub />
                <span className="text-base font-bold">GITHUB </span>
              </div>

              <div className=" flex flex-col items-center hover:text-blue-600 dark:text-blue-600 cursor-pointer transition duration-300 ease-out">
                <SiJirasoftware />
                <span className="text-base font-bold"> JIRA </span>
              </div>

              <div className="hover:opacity-60 dark:hover:opacity-100  flex flex-col items-center dark:text-white cursor-pointer transition duration-300 ease-out">
                <RiNotionFill />
                <span className="text-base font-bold">NOTION </span>
              </div>

              {/* <div className="hover:text-red-500  flex flex-col items-center dark:text-red-500 cursor-pointer transition duration-300 ease-out">
                <FaNpm />
                <span className="text-base font-bold">NPM </span>
              </div>

              <div className="hover:text-rose-500 flex flex-col items-center dark:text-rose-500    cursor-pointer transition duration-300 ease-out">
                <FaFigma />
                <span className="text-base font-bold"> FIGMA </span>
              </div> */}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Skills;
