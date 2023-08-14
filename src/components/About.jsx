import React from "react";
import ButtonCv from "./buttons/ButtonCv";
import SocialLinks from "./buttons/SocialLinks";

function About() {
  return (
    <section className="container  mt-40">
      <div className="flex flex-col gap-1">
        <h1
          className="text-7xl text-slate font-Montserrat font-extrabold  flex items-center,
        animate-text bg-gradient-to-r from-amber-500 via-rose-500 to-orange-500 bg-clip-text text-transparent
        drop-shadow "
        >
          Joaquin Bianchi
        </h1>

        <h2 className="text-4xl mt-2 font-mono font-medium text-black ">
          Full Stack Developer
        </h2>
        <p className="text-2xl sm:w-6/12 ml text-left break-words font-Hind Madurai drop-shadow">
          Soy Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          unde cupiditate expedita nisi odit hic, eligendi earum in labore
          voluptates? Accusamus officiis dolorum ut inventore tempore, nihil
          magni ipsa? Libero! pedita nisi odit hic, eligendi earum in labore
          voluptates? Accusamus officiis
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
