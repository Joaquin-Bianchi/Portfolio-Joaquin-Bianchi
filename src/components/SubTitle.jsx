import React from "react";
import ButtonDarkMode from "./buttons/ButtonDarkMode";

function SubTitle() {
  return (
    <>
      <div className="container hidden lg:mx-auto  lg:flex md:justify-between items-center ld:mt-5">
        <p className="font-bold"> Joaquin Bianchi</p>
        <ButtonDarkMode></ButtonDarkMode>
      </div>
    </>
  );
}

export default SubTitle;
