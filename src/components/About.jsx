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
    <section className="container flex m-auto mt-32 ">
      <div>
        <div className="flex flex-col items-center gap-1 ">
          <p className="flex items-center -mb-5 text-2xl animate-fade-in lg:text-3xl dark:text-white font-Montserrat">
            <span className="text-orange-500 drop-shadow-md ">Hola</span>
            <GiHand className="text-[#ecd0b9]  dark:text-[#f3ddca] animate-wave animate-duration-[5000ms] text-[2.6rem]  lg:text-[3.9rem] ml-1 mr-2" />{" "}
            <span className="drop-shadow-md"> Soy</span>
          </p>
          <div>
            <h1
              className="animate-fade-in-up animate-delay-200 text-[2.6rem] mt-2 sm:mt-0 sm:text-[3.7rem] md:text-[3.9rem]  lg:text-[4.0rem]  xl:text-[4.5rem]   2xl:text-[4.5rem]   font-Montserrat font-extrabold  flex items-center
             gap-2   dark:text-transparent drop-shadow dark:text-white "
            >
              Joaquín
              <span className="text-orange-500">Bianchi</span>
            </h1>
          </div>

          <h2 className="animate-fade-in animate-delay-400 text-[1.2rem] md:text-3xl uppercase font-Montserrat -mt-3  dark:font-medium  text-black dark:text-[#fffffe] typing-demo">
            Software Developer
          </h2>
          {/* text-wrap */}
          <div className="flex flex-col items-center mx-2 ml-5  sm:w-auto md:w-2/3 xl:w-6/12 sm:mx-0 relative">
            <p className="   text-wrap animate-fade-in animate-delay-500 text-base md:text-lg mt-1 lg:ml-5 text-left   lg:text-  dark:font-medium  text-black lg:text-left  font-Hind-Madurai  dark:text-[#cdcdcd] ">
              Cuento con mas de 1 año experiencia en el diseño y desarrollo de
              aplicaciones. Me apasiona crear productos que realmente aporten
              valor, con interfaces claras, funcionales y pensadas para el
              usuario. <br /> Disfruto colaborar en equipos donde se combina la
              tecnología y el diseño, aportando desde lo visual y lo técnico
              para lograr soluciones completas. Creo que el desarrollo de
              productos es mucho más que código: es entender el problema,
              trabajar en equipo y construir experiencias que realmente
              funcionen.
            </p>
          </div>
          <div className="items-center mt-2  lg:flex animate-fade-in-up animate-delay-500 ">
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
