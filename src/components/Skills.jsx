import React from "react";
import Loader from "./cards/Loader";

function Skills() {
  return (
    <section className=" container flex  body-font mt-10">
      <div>
        <h2 className=" text-gray-900 -mb-1 font-Montserrat items-start font-extrabold title-font text-6xl">
          Skills
        </h2>
        <Loader />
      </div>
    </section>
  );
}

export default Skills;
