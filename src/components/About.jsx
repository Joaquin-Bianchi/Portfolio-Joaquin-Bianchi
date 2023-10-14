import React from "react";
import ButtonCv from "./buttons/ButtonCv";
import SocialLinks from "./buttons/SocialLinks";
import Image from "next/image";

// import MeetCard from "./cards/MeetCard";

function About() {
  return (
    <section className="container  mt-32  flex justify-center items-center">
      <div className="flex flex-col gap-1 items-center">
        <h1
          className="text-[5.0rem]  text-slate font-Montserrat font-extrabold  flex items-center,
        animate-text bg-gradient-to-r from-[#000000] via-[#f97316] to-[#f97316] bg-clip-text text-transparent
        drop-shadow dark:bg-gradient-to-r dark:from-[#ff964b] dark:via-[#ff6a00] dark:to-[#f97316]"
        >
          Joaquin Bianchi
        </h1>
        <h2 className="text-2xl -mt-3 font-mono dark:font-medium font-medium text-black dark:text-[#fffffe] typing-demo">
          Frontend Developer
        </h2>
        {/* text-wrap */}
        <p className="text-xl sm:w-6/12 ml dark:font-medium text-black text-left break-words font-Hind-Madurai drop-shadow dark:text-[#c5c7d9] text-wrap">
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
