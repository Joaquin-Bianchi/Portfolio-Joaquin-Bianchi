import React from "react";
import { AiFillFire } from "react-icons/ai";
import { TbPointFilled } from "react-icons/tb";

function ExperienceCard({
  Title,
  Description,
  Time,
  Image,
  Technologies,
  Index,
}) {
  return (
    <div className="flex relative pt-10 pb-20 sm:items-center  flex-col md:flex-row mx-auto">
      <div className="h-full w-6 absolute inset-0 flex sm:items-center justify-center">
        <div className="h-full sm:h-full  w-1.5 bg-orange-500 pointer-events-none"></div>
      </div>
      <div>
        <div
          className={` ${
            Index === 0 ? "font-bold" : "font-medium"
          } h-12 dr sm:h-full w-full sm:flex-shrink-0 md:w-64 mb-10  items-center rounded-lg py-3 px-3 justify-center bg-white text-black border border-black 
           drop-shadow-md  
        relative z-10 "`}
        >
          {Time}
        </div>
      </div>

      <div className="flex-grow  md:pl-8 pl-8 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-black rounded-full inline-flex items-center justify-center">
          <img src={Image} className="drop-shadow w-full h-full" alt="" />
        </div>

        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <div className="flex items-baseline gap-1">
            <AiFillFire
              className={`${
                Index === 0 ? "text-orange-500" : "text-black dark:text-white "
              } `}
            />
            <h2 className="font-Montserrat font-bold title-font text-base text-gray-900 dark:text-[#cdcdcd] mb-1 lg:text-xl">
              {Title}
            </h2>
          </div>
          <p className=" text-black font-Hind-Madurai  lg:text-lg dark:text-[#cdcdcd]  ">
            {Description}
          </p>
          <p className="flex gap-2 items-center mt-0.5 text-black dark:text-[#cdcdcd] font-medium">
            <span className="font-bold  flex items-center">
              <TbPointFilled />
              Tecnologias:
            </span>
            {Technologies}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
