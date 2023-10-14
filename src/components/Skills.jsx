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
    <div className="mt-2">
      <section className="dark:text-white">
        <div className="container  mx-auto ">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col mb-2">
              <div className="flex flex-col gap-1 m-auto   md:w-auto w-[129px] md:m-0">
                <h2 className="sm:w-2/5 flex items-center dark:text-white text-gray-900 font-Montserrat font-extrabold title-font text-5xl mb-1 sm:mb-0">
                  Skills
                </h2>
                <Loader />
              </div>
            </div>
          </div>
          <p className="flex items-center font-Montserrat font-semibold text-lg justify-center mb-9">
            FRONTEND
          </p>
          <article className="flex justify-center">
            <div className="flex flex-wrap items-center justify-center   gap-12 text-8xl">
              <tooltip content="HTML">
                <div className="hover:text-orange-600  dark:text-orange-600 transition duration-300 ease-out ">
                  <FaHtml5 />
                </div>
              </tooltip>
              <tooltip content="CSS">
                <div className="hover:text-blue-600  dark:text-blue-600  cursor-pointer transition duration-300 ease-out">
                  <FaCss3Alt />
                </div>
              </tooltip>

              <tooltip content="BOOTSTRAP">
                <div className="hover:text-violet-600  dark:text-violet-600 cursor-pointer transition duration-300 ease-out">
                  <SiBootstrap />
                </div>
              </tooltip>
              <tooltip content="TAILWIND">
                <div className="hover:text-cyan-400 dark:text-cyan-400  cursor-pointer transition duration-300 ease-out">
                  <SiTailwindcss />
                </div>
              </tooltip>
              <tooltip content="JAVASCRIPT">
                <div className=" w-24 h-24     hover:text-[#ffee00] dark:text-[#ffee00]   cursor-pointer ">
                  <SiJavascript className="hover:bg-black transition duration-300 ease-out" />
                </div>
              </tooltip>
              <tooltip content="REACT">
                <div className="hover:text-cyan-400  dark:text-cyan-400  cursor-pointer transition duration-300 ease-out">
                  <SiReact />
                </div>
              </tooltip>
              <tooltip content="TYPESCRIPT">
                <div className="  hover:text-[#00a2ff] dark:text-[#00a2ff]   cursor-pointer ">
                  <SiTypescript className="transition duration-300 ease-out" />
                </div>
              </tooltip>
              <tooltip content="NEXT-JS">
                <div className="w-24 h-24 hover:bg-black rounded-full  cursor-pointer transition duration-300 ease-out flex items-center justify-center">
                  <SiNextdotjs className=" hover:text-white  transition duration-300 ease-out" />
                </div>
              </tooltip>
            </div>
          </article>
          <p className="flex items-center  font-Montserrat font-semibold text-lg justify-center mt-10 mb-9">
            TOOLS
          </p>
          <article className="flex justify-center">
            <div className="flex flex-wrap items-center justify-center  gap-12 text-8xl">
              <toltip content="GIT">
                <div className="hover:text-orange-600  dark:text-orange-600  cursor-pointer  transition duration-300 ease-out ">
                  <BsGit />
                </div>
              </toltip>
              <toltip content="GITHUB">
                <div className="hover:text-zinc-700  dark:text-white   cursor-pointer transition duration-300 ease-out">
                  <FaGithub />
                </div>
              </toltip>
              <toltip content="JIRA">
                <div className="hover:text-blue-600 dark:text-blue-600 cursor-pointer transition duration-300 ease-out">
                  <SiJirasoftware />
                </div>
              </toltip>
              <toltip content="NOTION">
                <div className="hover:opacity-60  dark:text-white cursor-pointer transition duration-300 ease-out">
                  <RiNotionFill />
                </div>
              </toltip>
              <toltip content="NPM">
                <div className="hover:text-red-500  dark:text-red-500 cursor-pointer transition duration-300 ease-out">
                  <FaNpm />
                </div>
              </toltip>
              <toltip content="FIGMA">
                <div className="hover:text-rose-500 dark:text-rose-500    cursor-pointer transition duration-300 ease-out">
                  <FaFigma />
                </div>
              </toltip>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Skills;
