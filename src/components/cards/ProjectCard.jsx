import React from "react";
import { ButtonDemo, ButtonGitRepo } from "../buttons/SocialLinks";

function ProjectCard({ Description, ProjectName, Imagen, LinkRepo, LinkDemo }) {
  return (
    <article className="p-4 md:w-1/3 sm:mb-0 mb-6 bg-gris drop-shadow-md">
      <div className=" rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full
        transition duration-300 ease-in-out hover:scale-110"
          src="assets/next.jpg" //crear prop de img
        />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        todo-app {ProjectName}
      </h2>
      <p className="text-base leading-relaxed mt-2 mb-4">
        Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed.
        Gastropub street art beard dreamcatcher neutra, ethical XOXO
        lumbersexual.
        {Description}
      </p>
      <div className="flex items-center justify-between">
        <ButtonGitRepo linkRepo={LinkRepo}></ButtonGitRepo>
        <ButtonDemo linkDemo={LinkDemo}></ButtonDemo>
      </div>
    </article>
  );
}

export default ProjectCard;
