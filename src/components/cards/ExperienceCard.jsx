import React from "react";
import { AiFillFire } from "react-icons/ai";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
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
import { SiHandlebarsdotjs, SiJquery } from "react-icons/si";

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
  jquery: SiJquery,
};

function ExperienceCard({
  Title,
  Description,
  Time,
  Image,
  Technologies,
  Index,
}) {
  return (
    <div class="bg-bg dark:bg-zinc-950 relative mx-12  pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20  dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
      <div class="pb-12 md:col-span-5 ">
        <div class="sticky top-0">
          <span
            class={` ${
              Index === 0 ? "text-orange-500" : "text-black dark:text-white "
            } -left-[42px] absolute rounded-full text-5xl`}
          >
            &bull;
          </span>
        </div>
        <div className="flex flex-col items-start flex-grow md:pl-8 sm:items-center sm:flex-row">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 ml-3 bg-black rounded-full md:ml-0">
            <img src={Image} className="w-full h-full drop-shadow" alt="" />
          </div>

          <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
            <div className="flex items-baseline gap-1">
              <AiFillFire
                className={`${
                  Index === 0
                    ? "text-orange-500"
                    : "text-black dark:text-white "
                } `}
              />
              <h2 className="font-Montserrat mb-2 font-bold title-font text-base text-gray-900 dark:text-[#ffffff] lg:text-[1.3rem]">
                {Title}
              </h2>
            </div>
            <div className="flex flex-col">
              <time class=" mb-2 text-base flex items-center gap-2 text-gray-700 dark:text-white/80">
                <CiCalendarDate className="text-lg" />
                {Time}
              </time>
              <p className=" text-black font-semibold mb-1   lg:text-lg dark:text-[#cdcdcd]  ">
                {Description}
              </p>
              <div className="flex flex-col md:flex-row gap-3 mt-2 lg:gap-2 md:items-center lg:mt-0.5 text-black dark:text-[#cdcdcd] font-medium">
                <span className="flex items-center font-bold lg:text-lg">
                  <TbArrowBadgeRightFilled className="text-orange-500" />
                  Tecnologias:
                </span>
                <div className="gap-2 flex flex-wrap mt-1">
                  {Technologies && Technologies.length > 0 ? (
                    Technologies.map((tech, index) => {
                      const techName = tech.name.toLowerCase();
                      const TechIcon = techIcons[techName];
                      return (
                        <span
                          key={index}
                          className=" inline-flex items-center px-3 py-2 font-Montserrat rounded-full text-xs font-medium bg-gray-900 text-white dark:bg-gray-700 dark:text-gray-200 shadow-md"
                        >
                          {TechIcon && <TechIcon className="mr-1.5 h-4 w-4" />}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
