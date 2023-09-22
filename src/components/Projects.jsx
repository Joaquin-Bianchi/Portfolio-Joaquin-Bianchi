import React from "react";

import { ButtonDemo, ButtonGitRepo } from "./buttons/SocialLinks";
import ProjectCard from "./cards/ProjectCard";
import Loader from "./cards/Loader";
import proyects from "@/services/proyects";
// refactorizar en componentes
function Projects({}) {
  return (
    <div className="mt-20 dr">
      <section className=" body-font">
        <div className="container  py-24 mx-auto ">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <div className="flex flex-col gap-1 m-auto   md:w-auto w-[199px] md:m-0">
                <h2 className="sm:w-2/5 flex items-center text-gray-900 font-Montserrat font-extrabold title-font text-5xl mb-2 sm:mb-0">
                  Projects
                </h2>
                <Loader />
              </div>
            </div>
          </div>
          {/* crear componente */}
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {proyects.map((project, index) => (
              <ProjectCard
                key={index}
                ProjectName={project.ProjectName}
                Description={project.Description}
                Imagen={project.Imagen}
                LinkRepo={project.LinkRepo}
                LinkDemo={project.LinkDemo}
                alt={project.name}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
