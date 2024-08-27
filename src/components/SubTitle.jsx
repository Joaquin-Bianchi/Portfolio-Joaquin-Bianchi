import React from "react";
import ButtonDarkMode from "./buttons/ButtonDarkMode";

function SubTitle() {
  return (
    <>
      <div className="container z-50 items-center hidden lg:mx-auto xl:flex md:justify-between ld:mt-5">
        <p className="z-40 font-bold animate-fade-in animate-delay-100 dark:text-white">
          {" "}
          Joaquin Bianchi
        </p>
        <ButtonDarkMode />
      </div>
    </>
  );
}

export default SubTitle;
