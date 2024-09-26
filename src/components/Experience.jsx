import React from "react";
import ExperienceCard from "./cards/ExperienceCard";
import experiencia from "@/services/experiencia";
import Loader from "./icons/Loader";

export default function Experience() {
  return (
    <section className="mt-10 text-gray-600 animate-fade-in animate-delay-500 body-font">
      <div className="container mx-auto ">
        <div className="flex flex-col flex-wrap py-6 mb-6 sm:flex-row">
          <div className="flex flex-col gap-1 m-auto md:m-0">
            <h2 className="flex items-center mb-2 text-4xl font-extrabold text-gray-900 sm:w-2/5 dark:text-white font-Montserrat title-font lg:text-5xl sm:mb-0">
              Experiencia
            </h2>
            <Loader />
          </div>
        </div>
        <div className="flex max-w-full ">
          <div>
            {experiencia.map((e) => (
              <ExperienceCard
                key={e.Title}
                Title={e.Title}
                Description={e.Description}
                Technologies={e.Technologies}
                Time={e.Time}
                Image={e.Image}
                alt={e.Title}
                Index={experiencia.indexOf(e)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
