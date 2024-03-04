import React from "react";
import ButtonCv from "./buttons/ButtonCv";
import SocialLinks from "./buttons/SocialLinks";
import Image from "next/image";
import { GiHand } from "react-icons/gi";
import { MdWavingHand } from "react-icons/md";

// import MeetCard from "./cards/MeetCard";

function About() {
  return (
    <section className="container   mt-32  flex  m-auto">
      <div className="flex flex-col gap-1 items-center ">
        <p className="flex items-center animate-fade-in text-2xl lg:text-3xl -mb-5 dark:text-white font-Montserrat">
          <span className="text-orange-500 drop-shadow-md ">Hola</span>
          <GiHand className="text-black dark:text-[#f3ddca] animate-tada animate-duration-[4000ms] text-[3.5rem] ml-1 mr-2" />{" "}
          <span className="drop-shadow-md"> Soy</span>
        </p>
        <div>
          <h1
            className="animate-fade-in-up animate-delay-200 text-[3.5rem] mt-2 sm:mt-0 sm:text-[3.7rem] md:text-[3.9rem]  lg:text-[4.0rem]  xl:text-[4.5rem]   2xl:text-[5.rem]   font-Montserrat font-extrabold  flex items-center
             gap-2  dark:text-transparent drop-shadow dark:text-white "
          >
            Joaquín
            <span className="text-orange-500">Bianchi</span>
          </h1>
        </div>
        <h2 className="animate-fade-in animate-delay-400 text-2xl lg:text-3xl uppercase font-Montserrat -mt-3  dark:font-medium  text-black dark:text-[#fffffe] typing-demo">
          Frontend Developer
        </h2>
        {/* text-wrap */}
        <div className="flex flex-col  sm:w-auto md:w-2/3 xl:w-6/12  items-center mx-2 ml-5 sm:mx-0">
          <p
            className="items-center  text-wrap animate-fade-in animate-delay-500 text-base md:text-lg
           mt-2 lg:ml-5 text-left  
          lg:text-xl  dark:font-medium  text-black lg:text-left 
          font-Hind-Madurai drop-shadow dark:text-[#cdcdcd] "
          >
            En 2021 comencé a estudiar una
            <b className="font-bold"> Tecnicatura en Desarrollo Web</b>, en ella
            aprendí las bases de la programación. Luego realicé el Programa
            <b className="font-bold"> One de Oracle</b> en el que obtuve los
            conceptos clave del Desarrollo Web como
            <b className="font-bold"> HTML, CSS, JavaScript.</b>
          </p>
          <p className="text-wrap animate-fade-in animate-delay-500 text-base md:text-lg mt-2 lg:ml-5 break-words mt text-left  lg:text-xl dark:font-medium  text-black lg:text-left   font-Hind-Madurai drop-shadow dark:text-[#cdcdcd] ">
            En el año 2023 continué de manera autodidacta aprendiendo
            tecnologías Frontend como
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
            , en estas emulaciones aprendí a trabajar efectivamente en equipo,
            de forma colaborativa y a comunicarme asertivamente para llegar a un
            fin común.
          </p>
        </div>
        <div className="mt-2 lg:flex items-center animate-fade-in-up animate-delay-500 ">
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
