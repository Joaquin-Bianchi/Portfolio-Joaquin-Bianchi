// import React from "react";
// import { AiFillFire } from "react-icons/ai";
// import { TbPointFilled } from "react-icons/tb";

// function NewExperienceCard({
//   Title,
//   Description,
//   company,
//   Time,
//   Image,

//   Technologies,
//   Index,
// }) {
//   return (
//     <div class="relative mx-12 pb-6 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
//       <div class="relative pb-6 md:col-span-7">
//         <div class="sticky top-0">
//           <span
//             class={` ${
//               Index === 0 ? "text-orange-500" : "text-black dark:text-white "
//             } -left-[42px]   absolute rounded-full text-5xl`}
//           >
//             &bull;
//           </span>

//           <div className="flex items-center gap-3 mb-1">
//             <div className="flex-shrink-0 md:ml-0 w-10 h-10 rounded-full inline-flex items-center justify-center">
//               <img src={Image} className="drop-shadow w-full h-full" alt="" />
//             </div>
//             <h2 className="font-Montserrat font-bold title-font text-base text-gray-900 dark:text-[#cdcdcd]  lg:text-xl">
//               {Title}
//             </h2>
//           </div>
//           <time class=" m-0 text-base text-gray-600/80 dark:text-white/80">
//             {Time}
//           </time>
//         </div>
//       </div>

//       <div class="relative flex flex-col gap-2 pb-4 text-base lg:text-lg text-gray-600 dark:text-gray-300 md:col-span-3">
//         <p className=" text-black font-Hind-Madurai  lg:text-lg dark:text-[#cdcdcd]  ">
//           {Description}
//         </p>
//         <p className="flex gap-3 mt-2 lg:gap2 items-center lg:mt-0.5 text-black dark:text-[#cdcdcd] font-medium">
//           <span className="font-bold flex items-center">
//             <TbPointFilled className="text-orange-500" />
//             Tecnologias:
//           </span>
//           <span className="text-xs sm:text-base"> {Technologies}</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default NewExperienceCard;
