"use client";
import React, { useRef, useState } from "react";
import SocialLinks from "./buttons/SocialLinks";
import Loader from "./cards/Loader";
import emailjs from "@emailjs/browser";
import ButtonCv from "./buttons/ButtonCv";

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j44293l",
        "template_wbkm1ld",
        form.current,
        "JPqfxxSo293XwBHla"
      )
      .then(
        (result) => {
          console.log(result.text);

          setFormData({
            user_name: "",
            user_email: "",
            user_message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-[199px] justify-center m-auto mb-12">
          <h2 className="sm:w-2/5 flex items-center text-gray-900 font-Montserrat font-extrabold title-font text-5xl sm:mb-0">
            Contact
          </h2>
          <Loader />
          <p className=" mx-auto  flex flex-col font-Hind Madurai items-center justify-center mt-6 text-black font-medium text-base">
            Want to work with me?
            <span>Send message to </span>
            <a
              className="font-bold text-black hover:text-orange-600"
              href="mailto:joaqobianchi13@gmail.com"
            >
              joaqobianchi13@gmail.com
            </a>
            or use the contact form.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form ref={form} onSubmit={sendEmail} className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="user_name"
                  type="text"
                  id="name"
                  required
                  name="user_name"
                  className="leading-7 text-base text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="user_email"
                  type="email"
                  required
                  id="email"
                  name="user_email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  id="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                  required
                  name="user_message"
                  value={formData.user_message}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg"
              >
                Send
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t text-black border-gray-200 text-center">
              <p className="mb-1 font-bold text-base"> Joaquin Bianchi</p>
              <div className="mb-3">
                <a className="">View Resume</a>
              </div>

              <span className="inline-flex">
                <SocialLinks size={27} />
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
