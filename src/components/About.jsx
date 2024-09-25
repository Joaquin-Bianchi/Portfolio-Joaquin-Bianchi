import React from "react";
import ButtonCv from "./buttons/ButtonCv";
import SocialLinks from "./buttons/SocialLinks";
import Image from "next/image";
import { GiHand } from "react-icons/gi";
import { MdWavingHand } from "react-icons/md";
import Social from "./buttons/Social";
import Arrow31 from "./icons/Arrow-Left";

// import MeetCard from "./cards/MeetCard";

function About() {
  return (
    <section className="container flex m-auto mt-32 dark:bg-zinc-950">
      <div>
        <div className="flex flex-col items-center gap-1 ">
          <p className="flex items-center -mb-5 text-2xl animate-fade-in lg:text-3xl dark:text-white font-Montserrat">
            <span className="text-orange-500 drop-shadow-md ">Hola</span>
            <GiHand className="text-[#ecd0b9]  dark:text-[#f3ddca] animate-wave animate-duration-[5000ms] text-[2.6rem]  lg:text-[3.9rem] ml-1 mr-2" />{" "}
            <span className="drop-shadow-md"> Soy</span>
          </p>
          <div>
            <h1
              className="animate-fade-in-up animate-delay-200 text-[2.6rem] mt-2 sm:mt-0 sm:text-[3.7rem] md:text-[3.9rem]  lg:text-[4.0rem]  xl:text-[4.5rem]   2xl:text-[5.rem]   font-Montserrat font-extrabold  flex items-center
             gap-2   dark:text-transparent drop-shadow dark:text-white "
            >
              Joaquín
              <span className="text-orange-500">Bianchi</span>
            </h1>
          </div>

          <h2 className="animate-fade-in animate-delay-400 text-[1.2rem] md:text-3xl uppercase font-Montserrat -mt-3  dark:font-medium  text-black dark:text-[#fffffe] typing-demo">
            Frontend Developer
          </h2>
          {/* text-wrap */}
          <div className="flex flex-col items-center mx-2 ml-5 bg-bg dark:bg-zinc-950 sm:w-auto md:w-2/3 xl:w-6/12 sm:mx-0 relative">
            <p className="items-center bg-bg dark:bg-zinc-950  text-wrap animate-fade-in animate-delay-500 text-base md:text-lg mt-1 lg:ml-5 text-left   lg:text-xl  dark:font-medium  text-black lg:text-left  font-Hind-Madurai  dark:text-[#cdcdcd] ">
              Cuento con mas de 1 año de experiencia en el desarrollo y diseño
              de aplicaciones web, Disfruto trabajando en equipo y también creo
              que tengo buen gusto por el diseño, me gusta participar y aportar
              valor en el diseño de los sitios, colaborando con los diseñadores.
              Estoy buscando oportunidades para formar parte de un equipo de IT
              en una empresa donde pueda desarrollarme profesionalmente y
              contribuir con mis habilidades.
            </p>
          </div>
          <div className="items-center mt-2 bg-bg dark:bg-zinc-950 lg:flex animate-fade-in-up animate-delay-500 ">
            <div className="mt-1 ">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
