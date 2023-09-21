import React from "react";
import SocialLinks from "./buttons/SocialLinks";
import Loader from "./cards/Loader";

function Contact() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-[199px] justify-center m-auto mb-12">
          <h2 className="sm:w-2/5 flex items-center text-gray-900 font-Montserrat font-extrabold title-font text-5xl mb-1 sm:mb-0">
            Contact
          </h2>
          <Loader />
          <p className="lg:w-2/3 mx-auto leading-relaxed flex justify-center mt-9 text-base">
            <a className="text-black font-medium">example@email.com</a>
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">
                Send
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t text-black border-gray-200 text-center">
              <p className="my-5 font-bold"> Joaquin Bianchi</p>
              <span className="inline-flex">
                <SocialLinks size={27} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
