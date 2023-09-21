import React from "react";
import Loader from "./cards/Loader";
import {
  SiBootstrap,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
function Skills() {
  return (
    // <div>
    //   <section className="flex flex-col body-font justify-center mx-auto mt-10">
    //     <div className="w-[130px] mx-auto">
    //       <h2 className="text-gray-900  font-Montserrat items-start font-extrabold  text-5xl">
    //         Skills
    //       </h2>
    //       <Loader />
    //     </div>
    //     <article className="flex justify-center mt-12">
    //       <div className="flex gap-3">
    //         <p>React</p>
    //         <p>React</p>
    //         <p>React</p>
    //         <p>React</p>
    //         <p>React</p>
    //       </div>
    //     </article>
    //   </section>
    // </div>
    <div className="mt-2">
      <section className="">
        <div className="container  mx-auto ">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col mb-2">
              <div className="flex flex-col gap-1 m-auto   md:w-auto w-[129px] md:m-0">
                <h2 className="sm:w-2/5 flex items-center text-gray-900 font-Montserrat font-extrabold title-font text-5xl mb-1 sm:mb-0">
                  Skills
                </h2>
                <Loader />
              </div>
            </div>
          </div>
          <p className="flex items-center font-mono font-semibold text-lg justify-center mb-4">
            {" "}
            FRONTEND
          </p>
          <article className="flex justify-center">
            <div className="flex flex-wrap items-center justify-center   gap-12 text-8xl">
              <div className="hover:text-orange-600  transition duration-300 ease-out ">
                <FaHtml5 />
              </div>
              <div className="hover:text-blue-600 cursor-pointer transition duration-300 ease-out">
                <FaCss3Alt />
              </div>
              <div className="hover:text-violet-600 cursor-pointer transition duration-300 ease-out">
                <SiBootstrap />
              </div>
              <div className="hover:text-cyan-400  cursor-pointer transition duration-300 ease-out">
                <SiTailwindcss />
              </div>
              <div className="hover:text-[#ffee00]  cursor-pointer transition duration-300 ease-out">
                <SiJavascript />
              </div>
              <div className="hover:text-cyan-400   cursor-pointer transition duration-300 ease-out">
                <SiReact />
              </div>
              <div className="w-24 h-20 hover:bg-black rounded-full  cursor-pointer transition duration-300 ease-out flex items-center justify-center">
                <SiNextdotjs className=" hover:text-zinc-50  transition duration-300 ease-out" />
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Skills;
