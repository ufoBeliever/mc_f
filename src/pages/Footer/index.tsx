import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
      className="bg-gray-900
                    justify-between
                    items-center
                    flex-col
                    lg:px-8
                    xl:px-14
                    p-4
                    space-y-8
  "
    >
      <div className="font-normal text-gray-400 text-center">
        © Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi
        sit quaerat aperiam, exercitationem id eius error explicabo. Quibusdam,
        quod cupiditate? Voluptatem, nisi sint. Ipsa incidunt quia voluptatum
        eius nesciunt!
      </div>
      <div className="h-px bg-white w-full" />
      <div className="flex items-center justify-between">
        <div className="font-normal text-white">Best MC ever (2023)</div>
        <div className="flex space-x-2 sm:space-x-4">
          <a href="#">
            <BsInstagram size="24px" color="white" />
          </a>
          <a href="#">
            <FaTelegramPlane size="24px" color="white" />
          </a>
          <a href="#">
            <BsFacebook size="24px" color="white" />
          </a>
          <a href="#">
            <BsTwitter size="24px" color="white" />
          </a>
        </div>
      </div>
    </footer>
  );
};
