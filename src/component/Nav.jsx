import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/image 8.png";

const Nav = () => {
  return (
    <div className="bg-[#DEDEDE] gap-5 w-full p-4 md:p-5 flex flex-wrap items-center justify-sticky sticky top-0 z-50">
      {/* Logo Section */}
      <div className="px-5">
        <img src={image} alt="Logo" className="w-10 h-10 md:w-12 md:h-12" />
      </div>

      {/* Navigation Links */}
      <div className="mt-3 md:mt-0">
        <ul className="flex flex-wrap gap-5 md:gap-10 text-sm md:text-md lg:text-lg">
          <li>
            <Link to="/" className="hover:text-white cursor-pointer">HOME</Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-white cursor-pointer">EVENTS</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white cursor-pointer">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white cursor-pointer">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
