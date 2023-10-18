import React from "react";
import ButtonCv from "./buttons/ButtonCv";
import SocialLinks from "./buttons/SocialLinks";
import Image from "next/image";

// import MeetCard from "./cards/MeetCard";

function About() {
  return (
    <section className="container  mt-32  flex  m-auto">
      <div className="flex flex-col gap-1 items-center">
        <p className="text-3xl -mb-5 items-start drop-shadow-md dark:text-white font-Montserrat">
          <span className="text-orange-500"> Hi,</span> I'm
        </p>
        <h1
          className="text-[5.0rem]  font-Montserrat font-extrabold  flex items-center
        animate-text gap-2  dark:text-transparent drop-shadow dark:text-white  "
        >
          Joaquin
          <span className="text-orange-500 "> Bianchi</span>
        </h1>
        <h2 className="text-3xl uppercase font-Montserrat -mt-3  dark:font-medium  text-black dark:text-[#fffffe] typing-demo">
          Frontend Developer
        </h2>
        {/* text-wrap */}
        <p className="text-xl sm:w-6/12 ml dark:font-medium text-black text-left break-words font-Hind-Madurai drop-shadow dark:text-[#cdcdcd] text-wrap">
          Soy Joaquin adad dawdadw Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Incidunt esse eaque aperiam voluptate accusantium
          dolorum temporibus soluta error blanditiis facilis repellendus, qui
          doloribus natus ut quidem perspiciatis nam suscipit adipisci.dit hic,
          eligendi earum in labore voluptates? Accusamus officiis
        </p>
        <div className="mt-2 flex items-center ">
          <ButtonCv></ButtonCv>
          <div className="ml-5 mt-1">
            <SocialLinks size={"40px"}></SocialLinks>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
