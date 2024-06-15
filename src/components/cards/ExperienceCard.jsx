import React from "react";
import { AiFillFire } from "react-icons/ai";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";

function ExperienceCard({
  Title,
  Description,
  Time,
  Image,
  Technologies,
  Index,
}) {
  return (
    <div class=" relative mx-12  pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20  dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
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
        <div className="flex-grow   md:pl-8  flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 ml-3 md:ml-0 w-24 h-24 bg-black rounded-full inline-flex items-center justify-center">
            <img src={Image} className="drop-shadow w-full h-full" alt="" />
          </div>

          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
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
              <p className="flex flex-col md:flex-row gap-3 mt-2 lg:gap-2 md:items-center lg:mt-0.5 text-black dark:text-[#cdcdcd] font-medium">
                <span className="font-bold  lg:text-lg flex items-center">
                  <TbArrowBadgeRightFilled className="text-orange-500" />
                  Tecnologias:
                </span>
                <span className="text-gray-700 dark:text-slate-100">
                  {Technologies}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
