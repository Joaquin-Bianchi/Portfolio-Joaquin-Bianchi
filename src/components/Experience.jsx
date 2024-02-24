import React from "react";
import ExperienceCard from "./cards/ExperienceCard";
import experiencia from "@/services/experiencia";
function Experience() {
  return (
    <section className="text-gray-600 body-font mt-10">
      <div className="container mx-auto ">
        <h2 className="pb-10 dark:text-white text-gray-900 font-Montserrat font-extrabold title-font  text-4xl lg:text-5xl  sm:mb-0">
          Experiencia
        </h2>
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
    </section>
  );
}

export default Experience;
