import React from "react";
import ButtonCv from "./buttons/ButtonCv";
import SocialLinks from "./buttons/SocialLinks";
import Image from "next/image";

// import MeetCard from "./cards/MeetCard";

function About() {
  return (
    <section className="container  mt-32  flex  m-auto">
      <div className="flex flex-col gap-1 items-center">
        <p className="text-2xl lg:text-3xl -mb-5 items-start drop-shadow-md dark:text-white font-Montserrat">
          <span className="text-orange-500">Hola,</span> Soy
        </p>
        <div>
          <h1
            className="text-[2.5rem] mt-2 sm:mt-0 sm:text-[3.0rem] md:text-[3.5rem]  lg:text-[4.0rem]  xl:text-[4.5rem]   2xl:text-[5.rem]   font-Montserrat font-extrabold  flex items-center
        animate-text gap-2  dark:text-transparent drop-shadow dark:text-white "
          >
            Joaquín
            <span className="text-orange-500 ">Bianchi</span>
          </h1>
        </div>
        <h2 className="text-xl lg:text-3xl uppercase font-Montserrat -mt-3  dark:font-medium  text-black dark:text-[#fffffe] typing-demo">
          Frontend Developer
        </h2>
        {/* text-wrap */}
        <p className="text-base md:text-lg mt-2 ml-10 lg:ml-5 text-left  lg:text-xl sm:w-6/12 dark:font-medium  text-black lg:text-left   font-Hind-Madurai drop-shadow dark:text-[#cdcdcd] ">
          En 2021 comencé a estudiar una
          <b className="font-bold"> Tecnicatura en Desarrollo Web</b>, en ella
          aprendí las bases de la programación. Luego realicé el Programa
          <b className="font-bold"> One de Oracle</b> en el que obtuve los
          conceptos clave del Desarrollo Web como
          <b className="font-bold"> HTML, CSS, JavaScript.</b>
        </p>
        <p className="text-base md:text-lg mt-1 ml-10 lg:ml-5 break-words mt text-left  lg:text-xl sm:w-6/12 dark:font-medium  text-black lg:text-left   font-Hind-Madurai drop-shadow dark:text-[#cdcdcd] ">
          En el año 2023 continué de manera autodidacta aprendiendo tecnologías
          Frontend como
          <span className="font-bold"> React, Next.js, Tailwind, </span>
          practicando y aplicando mis conocimientos en las{" "}
          <b>Emulaciones laborales</b> que ofrece el equipo de
          <a
            href="https://www.nocountry.tech/"
            target="_blank"
            className="font-bold underline ml-1 mr-1 hover:text-orange-500 "
          >
            No Country
          </a>
          , en estas emulaciones aprendí a trabajar efectivamente en equipo, de
          forma colaborativa y a comunicarme asertivamente para llegar a un fin
          común.
        </p>
        <div className="mt-2 lg:flex items-center ">
          <div className="hidden lg:flex">
            <ButtonCv></ButtonCv>
          </div>
          <div className="ml-5 mt-1">
            <SocialLinks></SocialLinks>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
