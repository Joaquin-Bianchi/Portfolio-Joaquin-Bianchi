import React from "react";
import { ButtonDemo, ButtonGitRepo } from "../buttons/SocialLinks";
import { TbPointFilled } from "react-icons/tb";
function ProjectCard({
  Description,
  ProjectName,
  Imagen,
  LinkRepo,
  LinkDemo,
  alt,
}) {
  return (
    <div
      className="p-3 w-[85%]  md:w-[41%]  xl:w-[30%] sm:mb-0 mb-6 bg-white border-1 dark:text-white dark:bg-[#201e31 dark:bg-zinc-800 border-[1px] border-zinc-500 
     dark:border-[#bdbcbcba] flex flex-col justify-between drop-shadow-xl"
    >
      <div className=" rounded-lg h-64 overflow-hidden">
        <img
          alt={alt}
          className="object-cover object-center h-full w-full
        transition duration-300 ease-in-out hover:scale-110"
          src={Imagen}
        />
      </div>
      <h2 className="text-xl flex items-center font-Montserrat text-wrap font-medium title-font text-gray-900 dark:text-[#fffffe] mt-5">
        <TbPointFilled className="text-orange-400" />
        {ProjectName}
      </h2>
      <p className="text-base leading-relaxed dark:text-[#cdcdcd] mt-2 mb-4">
        {Description}
      </p>
      <div className="flex items-center justify-between">
        {LinkRepo && <ButtonGitRepo linkRepo={LinkRepo}></ButtonGitRepo>}
        <ButtonDemo linkDemo={LinkDemo}></ButtonDemo>
        {/* <span class="rounded-full px-4 py-1 border bg-[#ffee00]  text-black font-semibold">
          JavaScript
        </span> */}
      </div>
    </div>
  );
}

export default ProjectCard;
