import React from "react";

import { ButtonDemo, ButtonGitRepo } from "./buttons/SocialLinks";
import ProjectCard from "./cards/ProjectCard";
import Loader from "./cards/Loader";
import proyects from "@/services/proyects";
import experiencia from "@/services/experiencia";
// refactorizar en componentes
function Projects({}) {
  return (
    <div className="mt-20 dr">
      <section className=" body-font">
        <div className="container  py-24 mx-auto ">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
              <div className="flex flex-col gap-1 m-auto    md:m-0">
                <h2
                  id="projects"
                  className="sm:w-2/5 flex items-center dark:text-white text-gray-900 font-Montserrat font-extrabold title-font  text-4xl lg:text-5xl mb-2 sm:mb-0"
                >
                  Proyectos
                </h2>
                <Loader />
              </div>
            </div>
          </div>
          <h4 className="flex justify-center   dark:text-white font-Montserrat font-semibold  text-xl mb-10">
            Proyectos Grupales
          </h4>
          <div className="flex flex-wrap gap-6 justify-center">
            {experiencia.map((exp, index) => (
              <ProjectCard
                key={index}
                ProjectName={exp.ProjectName}
                Description={exp.Description}
                Imagen={exp.Imagen}
                LinkRepo={exp.LinkRepo}
                LinkDemo={exp.LinkDemo}
                alt={exp.ProjectName}
              />
            ))}
            {/*  P.Personales  */}
          </div>
          <h4 className="flex justify-center  mt-32 dark:text-white font-Montserrat font-semibold  text-xl mb-10">
            Proyectos Personales
          </h4>
          <div  className="flex flex-wrap gap-6 justify-center">
            {proyects.map((project, index) => (
              <ProjectCard
                key={index}
                ProjectName={project.ProjectName}
                Description={project.Description}
                Imagen={project.Imagen}
                LinkRepo={project.LinkRepo}
                LinkDemo={project.LinkDemo}
                alt={project.ProjectName}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
