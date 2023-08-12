import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

function SocialLinks({ size }) {
  return (
    <div className="flex ">
      <div className="flex items-center gap-1">
        <a
          href="https://github.com/Joaquin-Bianchi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={size}></FaGithub>
        </a>
        <a
          href="https://www.linkedin.com/in/joaquin-bianchi-89725721a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={size}></FaLinkedin>
        </a>
        <a
          href="https://t.me/JoaquinBianchi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram size={size}></FaTelegram>
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
