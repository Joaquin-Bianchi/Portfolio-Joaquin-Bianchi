import React from "react";
import ButtonDarkMode from "./buttons/ButtonDarkMode";
import SocialLinks from "./buttons/SocialLinks";

function SubTitle() {
  return (
    <>
      <div className="container hidden lg:mx-auto  lg:flex md:justify-between items-center ld:mt-5 z-20">
        <p className="font-bold z-20"> Joaquin Bianchi</p>
        <SocialLinks size="25px" />
      </div>
    </>
  );
}

export default SubTitle;
