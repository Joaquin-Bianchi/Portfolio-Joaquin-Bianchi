import React from "react";

import { ButtonDemo, ButtonGitRepo } from "./buttons/SocialLinks";
import ProjectCard from "./cards/ProjectCard";
import Loader from "./cards/Loader";
import proyects from "@/services/proyects";

function Projects({}) {
  return (
    <div className="mt-10 dr" id="projects">
      <section className="animate-fade-in animate-delay-500 body-font">
        <div className="container py-24 mx-auto ">
          <div className="flex flex-col">
            <div className="flex flex-col flex-wrap py-6 mb-6 sm:flex-row">
              <div className="flex flex-col gap-1 m-auto md:m-0">
                <h2
                  id="projects"
                  className="flex items-center mb-2 text-4xl font-extrabold text-gray-900 sm:w-2/5 dark:text-white font-Montserrat title-font lg:text-5xl sm:mb-0"
                >
                  Proyectos
                </h2>
                <Loader />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {proyects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
