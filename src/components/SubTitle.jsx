import React from "react";
import ButtonDarkMode from "./buttons/ButtonDarkMode";

function SubTitle() {
  return (
    <>
      <div className="animate-fade-in container hidden lg:mx-auto  xl:flex md:justify-between items-center ld:mt-5 z-20">
        <p className="font-bold z-40 dark:text-white"> Joaquin Bianchi</p>
        <ButtonDarkMode />
      </div>
    </>
  );
}

export default SubTitle;
