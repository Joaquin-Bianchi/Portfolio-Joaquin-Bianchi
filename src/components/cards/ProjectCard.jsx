"use client";
import React, { useState } from "react";
import { TbPointFilled } from "react-icons/tb";
import { ButtonDemo, ButtonGitRepo } from "../buttons/SocialLinks";
import {
  SiExpress,
  SiFirebase,
  SiFramer,
  SiHandlebarsdotjs,
  SiPayloadcms,
  SiVite,
} from "react-icons/si";
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
  vite: SiVite,
  javascript: JavaScript,
  typescript: TypeScript,
  "payload cms": SiPayloadcms,
  "next js": Nextjs,
  nodejs: Nodejs,
  express: SiExpress,
  postgress: PostgreSQL,
  tailwind: TailwindCSS,
  shadcn: Vercel,
  railway: Railway,
  ui: v0,
  html: HTML5,
  css: CSS,
  framer: SiFramer,
  firebase: SiFirebase,
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
    <div className="w-full bg-white dark:bg-zinc-900 max-w-xl overflow-hidden  rounded-lg shadow-lg">
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
        <div className="flex items-center justify-between mt-9">
          {LinkRepo && <ButtonGitRepo linkRepo={LinkRepo} />}
          {LinkDemo && <ButtonDemo linkDemo={LinkDemo} />}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
