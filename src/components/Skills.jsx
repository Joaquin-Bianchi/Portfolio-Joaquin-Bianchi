import React from "react";
import Loader from "./cards/Loader";

function Skills() {
  return (
    // <div>
    //   <section className="flex flex-col body-font justify-center mx-auto mt-10">
    //     <div className="w-[130px] mx-auto">
    //       <h2 className="text-gray-900  font-Montserrat items-start font-extrabold  text-5xl">
    //         Skills
    //       </h2>
    //       <Loader />
    //     </div>
    //     <article className="flex justify-center mt-12">
    //       <div className="flex gap-3">
    //         <p>React</p>
    //         <p>React</p>
    //         <p>React</p>
    //         <p>React</p>
    //         <p>React</p>
    //       </div>
    //     </article>
    //   </section>
    // </div>
    <div className="mt-2">
      <section className="">
        <div className="container  mx-auto ">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col mb-10">
              <div className="flex flex-col gap-1">
                <h2 className="sm:w-2/5 flex items-center text-gray-900 font-Montserrat font-extrabold title-font text-5xl mb-2 sm:mb-0">
                  Skills
                </h2>
                <Loader />
              </div>
            </div>
          </div>
          <article className="flex justify-center">
            <div className="flex gap-3">
              <p>React</p>
              <p>React</p>
              <p>React</p>
              <p>React</p>
              <p>React</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Skills;
