import React from "react";
import ButtonDarkMode from "./buttons/ButtonDarkMode";

function SubTitle() {
  return (
    <>
      <div className="container hidden lg:mx-auto  2xl:flex md:justify-between items-center ld:mt-5 z-20">
        <p className="font-bold z-20 dark:text-[#a7a9be]"> Joaquin Bianchi</p>
        <ButtonDarkMode />
      </div>
    </>
  );
}

export default SubTitle;
