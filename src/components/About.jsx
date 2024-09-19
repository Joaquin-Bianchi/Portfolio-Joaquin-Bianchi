import React from "react";
import ButtonCv from "./buttons/ButtonCv";
import SocialLinks from "./buttons/SocialLinks";
import Image from "next/image";
import { GiHand } from "react-icons/gi";
import { MdWavingHand } from "react-icons/md";

// import MeetCard from "./cards/MeetCard";

function About() {
  return (
    <section className="container flex m-auto mt-32 dark:bg-zinc-950">
      <div className="flex flex-col items-center gap-1 ">
        <p className="flex items-center -mb-5 text-2xl animate-fade-in lg:text-3xl dark:text-white font-Montserrat">
          <span className="text-orange-500 drop-shadow-md ">Hola</span>
          <GiHand className="text-black dark:text-[#f3ddca] animate-tada animate-duration-[5000ms] text-[3.9rem] ml-1 mr-2" />{" "}
          <span className="drop-shadow-md"> Soy</span>
        </p>
        <div>
          <h1
            className="animate-fade-in-up animate-delay-200 text-[2.4rem] mt-2 sm:mt-0 sm:text-[3.7rem] md:text-[3.9rem]  lg:text-[4.0rem]  xl:text-[4.5rem]   2xl:text-[5.rem]   font-Montserrat font-extrabold  flex items-center
             gap-2   dark:text-transparent drop-shadow dark:text-white "
          >
            Joaquín
            <span className="text-orange-500">Bianchi</span>
          </h1>
        </div>
        <h2 className="animate-fade-in animate-delay-400 text[1rem] lg:text-3xl uppercase font-Montserrat -mt-3  dark:font-medium  text-black dark:text-[#fffffe] typing-demo">
          Frontend Developer
        </h2>
        {/* text-wrap */}
        <div className="flex flex-col items-center mx-2 ml-5 bg-bg dark:bg-zinc-950 sm:w-auto md:w-2/3 xl:w-6/12 sm:mx-0">
          <p className="items-center bg-bg dark:bg-zinc-950  text-wrap animate-fade-in animate-delay-500 text-base md:text-lg mt-1 lg:ml-5 text-left   lg:text-xl  dark:font-medium  text-black lg:text-left  font-Hind-Madurai  dark:text-[#cdcdcd] ">
            Tengo experiencia en el desarrollo y diseño de aplicaciones web,
            Actualmente, me encuentro trabajando como Freelance en{" "}
            <a
              href="https://www.expresia.com/"
              target="_blank"
              className="font-bold underline ml hover:text-orange-500 "
            >
              Expresia
            </a>{" "}
            y participando en proyectos Open Source para mejorar mis
            conocimientos y habilidades. También estoy aprendiendo sobre Backend
            para en un futuro convertirme en un Desarrollador Fullstack
          </p>
          <p className="text-wrap animate-fade-in animate-delay-500 text-base md:text-lg mt-2 lg:ml-5 break-words mt text-left  lg:text-xl dark:font-medium  text-black lg:text-left   font-Hind-Madurai bg-bg dark:bg-zinc-950 dark:text-[#cdcdcd] ">
            En 2021 comencé a estudiar una Tecnicatura en Desarrollo Web, en
            ella aprendí las bases de la programación y del desarrollo web. En
            2023, luego de adquirir esos conceptos y bases, decidí continuar mi
            aprendizaje de manera autodidacta
          </p>
        </div>
        <div className="items-center mt-2 bg-bg dark:bg-zinc-950 lg:flex animate-fade-in-up animate-delay-500 ">
          <div className="hidden lg:flex">
            <ButtonCv></ButtonCv>
          </div>
          <div className="mt-1 ">
            <SocialLinks></SocialLinks>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
