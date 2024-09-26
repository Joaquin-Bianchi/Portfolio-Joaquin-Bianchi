"use client";
import React, { useRef, useState } from "react";
import SocialLinks from "./buttons/SocialLinks";
import Loader from "./icons/Loader";
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
      className="flex justify-center w-auto  text-gray-600 body-font animate-fade-in animate-delay-500"
    >
      <div className="flex justify-center flex-col  mt-24 ">
        <div className="flex bg-bg dark:bg-zinc-950 flex-col text-center justify-center m-auto mb-12">
          <h2 className=" text-4xl font-extrabold text-gray-900  dark:text-white font-Montserrat title-font lg:text-5xl sm:mb-0">
            Contacto
          </h2>

          <p className=" dark:text-[#cdcdcd]  items-center font-Hind-Madurai drop-shadow flex flex-col font-Hind Madurai  mt-6 text-black">
            <span className="font-bold text-lg  dark:text-[#cdcdcd]">
              ¿Quieres comunicarte conmigo?
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
        <div className="mx-auto lg:w-1/2 2xl:w-2/5 xl:w-1/2 md:w-1/2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-wrap -m-2 font-extrabold bg-bg dark:bg-zinc-950 "
          >
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="user_name"
                  type="text"
                  id="name"
                  required
                  name="user_name"
                  className="text-base leading-7 text-gray-600 dark:text-white dark:font-bold"
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
                  className="w-full px-3 py-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-black rounded outline-none dark:text-black bg-gray-50 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200"
                />
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="user_email"
                  type="email"
                  required
                  id="email"
                  name="user_email"
                  className="text-sm leading-7 text-gray-600 dark:text-white dark:font-bold"
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
                  className="w-full px-3 py-2 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-black rounded outline-none dark:text-black focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200"
                />
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="text-sm leading-7 text-gray-600 dark:text-white dark:font-bold"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  name="user_message"
                  value={formData.user_message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-black rounded outline-none resize-none dark:text-black focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-52"
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <button
                type="submit"
                className="flex px-8 py-2 mx-auto text-lg text-white bg-orange-500 border-0 rounded-lg focus:outline-none hover:bg-orange-600"
              >
                Enviar
              </button>
            </div>
            <div className="w-full p-2 pt-8 mt-8 text-center text-black border-t border-gray-200">
              <p className="mb-1 text-base font-extrabold dark:text-white">
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
