import SocialLinks from "./buttons/SocialLinks";
import Loader from "./icons/Loader";

export default function ContactSection() {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="flex flex-col flex-wrap py-6 mb-6 sm:flex-row">
          <div className="flex flex-col gap-1 m-auto md:m-0">
            <h2
              id="contact"
              className="flex items-center mb-2 text-4xl font-extrabold text-gray-900 sm:w-2/5 dark:text-white font-Montserrat title-font lg:text-5xl sm:mb-0"
            >
              Contacto
            </h2>
            <Loader />
          </div>
        </div>
        <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900  rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="uppercase tracking-wide text-sm text-orange-500 font-bold">
              ¡Conectemos!
            </div>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight  dark:text-[#fffffe]  text-gray-900 sm:text-4xl">
              Estoy disponible para colaborar
            </h3>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              Si tenes una propuesta de trabajo, proyecto o solamente tenes
              alguna duda, No dudes en contactarme a través de cualquiera de
              estos medios:
            </p>
            <div className="mt-10 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <a
                href="https://www.linkedin.com/in/joaquin-bianchi-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#007bb6] hover:bg-[#276886] md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
                Conecta en LinkedIn
              </a>
              <a
                href="mailto:joaqobianchi13@gmail.com"
                className="flex items-center justify-center gap-3 px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.33em"
                  height="1em"
                  viewBox="0 0 256 193"
                >
                  <path
                    fill="#4285f4"
                    d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"
                  />
                  <path
                    fill="#34a853"
                    d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"
                  />
                  <path
                    fill="#ea4335"
                    d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"
                  />
                  <path
                    fill="#fbbc04"
                    d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"
                  />
                  <path
                    fill="#c5221f"
                    d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"
                  />
                </svg>
                Envíame un correo
              </a>
            </div>
          </div>
        </div>
        <div className="w-full p-2 pt-8 mt-8 text-center text-black border-t-2 border-gray-200 dark:border-gray-900">
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
      </div>
    </section>
  );
}
