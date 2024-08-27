import React from "react";
import ExperienceCard from "./cards/ExperienceCard";
import experiencia from "@/services/experiencia";
import NewExperienceCard from "./cards/NewExperienceCard";

function Experience() {
  return (
    <section className="mt-10 text-gray-600 animate-fade-in animate-delay-500 body-font">
      <div className="container mx-auto ">
        <h2 className="pb-10 text-4xl font-extrabold text-gray-900 dark:text-white font-Montserrat title-font lg:text-5xl sm:mb-0">
          Experiencia
        </h2>
        <div className="flex max-w-full ">
          <div>
            {experiencia.map((e, index) => (
              <ExperienceCard
                key={index}
                Title={e.Title}
                Description={e.Description}
                Technologies={e.Technologies}
                Time={e.Time}
                Image={e.Image}
                alt={e.Title}
                Index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
