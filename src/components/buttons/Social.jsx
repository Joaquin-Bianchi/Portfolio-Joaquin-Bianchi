import React from "react";
import { TbFileCv } from "react-icons/tb";

const Social = () => {
  return (
    <div className="flex flex-col">
      {/* <p className="text-xs font-Montserrat items-center mx-auto mb-1">
        Contactame!
      </p> */}
      <div className="social-links">
        <a
          className=""
          href="https://flowcv.com/resume/pqls7i3bt6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div id="twitter" className="social-btn  flex-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m8 18v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1zm-4-8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
              />
            </svg>
            <span>Curriculum</span>
          </div>
        </a>
        <a
          className=""
          href="https://www.linkedin.com/in/joaquin-bianchi-89725721a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div id="linkedin" className="social-btn flex-center">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
            <span>in/Joaquin Bianchi</span>
          </div>
        </a>
        <a
          className=""
          href="https://github.com/Joaquin-Bianchi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div id="github" className="social-btn flex-center">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>Joaquin Bianchi</span>
          </div>
        </a>
        <a
          className="hidden sm:flex"
          href="mailto:joaqobianchi13@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div id="email" className="social-btn social-btn-email flex-center">
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
            <span>joaqobianchi13@gmail.com</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Social;
