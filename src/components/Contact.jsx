"use client";
import React, { useRef, useState } from "react";
import SocialLinks from "./buttons/SocialLinks";
import Loader from "./cards/Loader";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
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
          toast.success("Email Sent");

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
    <section
      id="contact"
      className="text-gray-600 body-font relative animate-fade-in animate-delay-500"
    >
      <div className="mt-24 mx-auto">
        <div className="flex flex-col text-center w-[151px] lg:w-[229px] justify-center m-auto mb-12">
          <h2 className="sm:w-2/5 flex items-center dark:text-white text-gray-900 font-Montserrat font-extrabold title-font text-4xl lg:text-5xl sm:mb-0">
            Contacto
          </h2>
          <Loader />
          <p className=" dark:text-[#cdcdcd]  items-center font-Hind-Madurai drop-shadow flex flex-col font-Hind Madurai  mt-6 text-black">
            <span className="font-bold text-lg  dark:text-[#cdcdcd]">
              ¿Quieres trabajar conmigo?
            </span>
            <span className="dark:text-[#a7a9be]">Envía un mensaje a </span>
            <a
              className="font-bold text-black dark:text-white dark:hover:text-orange-500 hover:text-orange-600"
              href="mailto:joaqobianchi13@gmail.com"
            >
              joaqobianchi13@gmail.com
            </a>
            o usa el formulario de contacto.
          </p>
        </div>
        <div className="lg:w-1/2 2xl:w-2/5 xl:w-1/2 md:w-1/2 mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-wrap -m-2 font-extrabold "
          >
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="user_name"
                  type="text"
                  id="name"
                  required
                  name="user_name"
                  className="leading-7 text-base dark:text-white dark:font-bold text-gray-600"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  className="w-full dark:text-black bg-gray-50 bg-opacity-50 rounded border border-black  focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                  className="leading-7 text-sm dark:text-white dark:font-bold text-gray-600"
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
                  className="w-full dark:text-black border border-black  bg-gray-100 bg-opacity-50 rounded  focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-black py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm dark:text-white dark:font-bold text-gray-600"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  name="user_message"
                  value={formData.user_message}
                  onChange={handleInputChange}
                  className="w-full dark:text-black bg-gray-100 bg-opacity-50 rounded  border border-black  focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-52 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex rounded-lg mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600  text-lg"
              >
                Enviar
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t text-black border-gray-200 text-center">
              <p className="mb-1 font-extrabold text-base dark:text-white">
                {" "}
                Joaquin Bianchi
              </p>
              <div className="mb-3">
                <a
                  href="https://flowcv.com/resume/pqls7i3bt6"
                  className="dark:text-[#a7a9be] hover:text-orange-500  dark:hover:text-orange-500 cursor-pointer underline font-normal"
                >
                  Descargar CV
                </a>
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
