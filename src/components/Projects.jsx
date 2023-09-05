import React from "react";

import { ButtonDemo, ButtonGitRepo } from "./buttons/SocialLinks";
import ProjectCard from "./cards/ProjectCard";
import Loader from "./cards/Loader";

// refactorizar en componentes
function Projects({}) {
  return (
    <div className="mt-44 dr">
      <section className=" body-font">
        <div className="container  py-24 mx-auto ">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <div className="flex flex-col gap-1">
                <h2 className="sm:w-2/5 flex items-center text-gray-900 font-Montserrat font-extrabold title-font text-6xl mb-2 sm:mb-0">
                  Projects
                </h2>
                <Loader />
              </div>
            </div>
          </div>
          {/* crear componente */}
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <ProjectCard ProjectName={"1"} Description={""}></ProjectCard>
            <ProjectCard ProjectName={"2"} Description={""}></ProjectCard>
            <ProjectCard ProjectName={"3"} Description={""}></ProjectCard>

            {/*    agregar .map aqui  ???*/}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
