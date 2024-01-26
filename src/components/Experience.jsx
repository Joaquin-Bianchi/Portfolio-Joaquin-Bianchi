import React from "react";

function Experience() {
  return (
    <section class="text-gray-600 body-font mt-20">
      <div class="container mx-auto ">
        <h2 className=" dark:text-white text-gray-900 font-Montserrat font-extrabold title-font  text-4xl lg:text-5xl mb-2 sm:mb-0">
          Experiencia
        </h2>
        <div class="flex relative pt-10 pb-20 sm:items-center md:ml- mt-10 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1.5 bg-orange-500   pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 items-center rounded-lg py-3 px-3 justify-center bg-white text-black border border-black font-bold drop-shadow-md  relative z-10 ">
            Agosto-2023 | Diciembre 2023
          </div>

          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-shrink-0 w-24 h-24 bg-black rounded-full inline-flex items-center justify-center">
              {/* imagen de empresa */}
            </div>

            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-bold title-font text-gray-900 dark:text-[#cdcdcd] mb-1 text-xl">
                Frontend Developer | lorem
              </h2>
              <p class="leading-relaxed dark:text-[#cdcdcd]">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal. VHS cornhole pop-up,
                try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard
                cliche palo santo offal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
