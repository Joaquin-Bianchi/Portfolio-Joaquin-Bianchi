"use client";
import React, { useState } from "react";
import { TbPointFilled } from "react-icons/tb";
import { ButtonDemo, ButtonGitRepo } from "../buttons/SocialLinks";
import { SiHandlebarsdotjs } from "react-icons/si";
import {
  Bootstrap,
  CSS,
  HTML5,
  JavaScript,
  Nextjs,
  Nodejs,
  PostgreSQL,
  Prisma,
  Railway,
  ReactIcon,
  TailwindCSS,
  TypeScript,
  v0,
  Vercel,
  Zustand,
} from "../icons/Icons";

const techIcons = {
  prisma: Prisma,
  react: ReactIcon,
  javascript: JavaScript,
  typescript: TypeScript,
  "next js": Nextjs,
  nodejs: Nodejs,
  postgress: PostgreSQL,
  tailwind: TailwindCSS,
  shadcn: Vercel,
  railway: Railway,
  ui: v0,
  html: HTML5,
  css: CSS,
  bootstrap: Bootstrap,
  handlebars: SiHandlebarsdotjs,
};

function ProjectCard({
  Name = "Awesome Project",
  Description = "This is a description of my awesome project.",
  Imagen = "/placeholder.svg?height=400&width=600",
  Video,
  Technologies,
  Private = false,
  LinkDemo,
  LinkRepo,
}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="w-full max-w-xl overflow-hidden bg-white dark:bg-zinc-900   rounded-lg shadow-lg">
      <div
        className="relative w-full aspect-video"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          src={Imagen}
          alt={Name}
          className="absolute object-cover object-center w-full h-full transition-opacity duration-300 ease-in-out"
          style={{ opacity: isHovering && Video ? 0 : 1 }}
        />
        {Video && (
          <video
            src={Video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute object-cover object-top -mt-1  w-full h-full transition-opacity duration-300 ease-in-out"
            style={{ opacity: isHovering ? 1 : 0 }}
          />
        )}
      </div>

      <div className="p-4 md:p-6">
        <div className="flex items-center  justify-between mb-4">
          <h2 className="text-xl flex items-center font-medium text-gray-900  dark:text-[#fffffe]">
        
            {Name}
          </h2>
          {Private && (
            <div className="px-2 py-1  flex  items-center  text-xs font-semibold text-white bg-gray-500 rounded-full">
              Privado
            </div>
          )}
        </div>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{Description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {Technologies && Technologies.length > 0 ? (
            Technologies.map((tech, index) => {
              const techName = tech.name.toLowerCase();
              const TechIcon = techIcons[techName];
              return (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-2 font-Montserrat rounded-full text-[0.60rem]  md:text-xs font-medium bg-gray-900 text-white dark:bg-gray-700 dark:text-gray-200 shadow-md"
                >
                  {TechIcon && (
                    <TechIcon className="mr-1.5 h-3 w-3  md:h-5 md:w-5" />
                  )}
                  {tech.name}
                </span>
              );
            })
          ) : (
            <span className="text-gray-500 dark:text-gray-400">
              No technologies specified
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          {LinkRepo && <ButtonGitRepo linkRepo={LinkRepo} />}
          {LinkDemo && <ButtonDemo linkDemo={LinkDemo} />}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
// import React from "react";
// import { ButtonDemo, ButtonGitRepo } from "../buttons/SocialLinks";
// import { TbPointFilled } from "react-icons/tb";
// function ProjectCard({
//   Description,
//   ProjectName,
//   Imagen,
//   LinkRepo,
//   LinkDemo,
//   alt,
// }) {
//   return (
//     <div
//       className="p-3 w-[85%]  md:w-[41%]  xl:w-[30%] sm:mb-0 mb-6 bg-white border-1 dark:text-white dark:bg-[#201e31 dark:bg-zinc-800 border-[1px] border-zinc-500
//      dark:border-[#bdbcbcba] flex flex-col justify-between drop-shadow-xl"
//     >
//       <div className=" rounded-lg h-64 overflow-hidden">
//         <img
//           alt={alt}
//           className="object-cover object-center h-full w-full
//         transition duration-300 ease-in-out hover:scale-110"
//           src={Imagen}
//         />
//       </div>
//       <h2 className="text-xl flex items-center font-Montserrat text-wrap font-medium title-font text-gray-900 dark:text-[#fffffe] mt-5">
//         <TbPointFilled className="text-orange-400" />
//         {ProjectName}
//       </h2>
//       <p className="text-base leading-relaxed dark:text-[#cdcdcd] mt-2 mb-4">
//         {Description}
//       </p>
//       <div className="flex items-center justify-between">
//         {LinkRepo && <ButtonGitRepo linkRepo={LinkRepo}></ButtonGitRepo>}
//         <ButtonDemo linkDemo={LinkDemo}></ButtonDemo>
//         {/* <span class="rounded-full px-4 py-1 border bg-[#ffee00]  text-black font-semibold">
//           JavaScript
//         </span> */}
//       </div>
//     </div>
//   );
// }

// export default ProjectCard;
