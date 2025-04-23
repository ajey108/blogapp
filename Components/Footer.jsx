import React from "react";
import { FaBlog, FaGithub } from "react-icons/fa";
import { PiUserGearFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <FaBlog className="text-3xl text-white" />
      <p className="text-white text-xs sm:text-base">
        © 2024 . All rights reserved.
      </p>
      <a href="https://ajay108portfolio.netlify.app/">
        <PiUserGearFill className="text-3xl text-white hover:text-gray-500 " />
      </a>
      <span>
        <a href="https://github.com/ajey108">
          <FaGithub className="text-3xl text-white hover:text-gray-500" />
        </a>
      </span>
      <p></p>
    </div>
  );
};

export default Footer;
