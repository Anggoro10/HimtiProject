import React from "react";
import image from "../assets/image 8.png";

const Nav = () => {
  return (
    <div className="bg-[#DEDEDE] w-screen">
       <div className="h-20 px-5 flex justify-sticky gap-10 items-center">
        <div className="">
            <img src={image} alt="" className=" w-12 h-12"/>
        </div>
        <div className="">
            <ul className="flex gap-10 text-md">
                <li className="px-5 hover:text-white">HOME</li>
                <li className="px-5 hover:text-white">EVENTS</li>
                <li className="px-5 hover:text-white">ABOUT US</li>
                <li className="px-5 hover:text-white">CONTACT US</li>
            </ul>
        </div>
       </div>
    </div>
  );
};

export default Nav;
