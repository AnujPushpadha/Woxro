import React, { useState } from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header>
        <section className=" hidden lg:block">
          <ul className="bg-black/100 px-6 py-2  cursor-pointer text-white flex flex-row justify-between w-full box-border text-sm ">
            <li>
              <strong>Now Hiring </strong>: Looking for a job in Full Stack
              Development?
            </li>

            <li className="flex flex-row">
              <a href="tel:487 2080 212">
                <FontAwesomeIcon icon={faPhone} />
                <strong>&nbsp;&nbsp;+91 487 2080 212</strong>
              </a>
              &nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faMapMarker} />
              <p>&nbsp;&nbsp;Leshore Business Park, Thrissur</p>
            </li>
          </ul>
        </section>

        <section className="flex flex-row items-center justify-between px-6 p-3 max-h-400 md:max-h-550 bg-white ">
          <img
            // className="w-100 sm:w-50"
            className="w-[160px]"
            src={"https://woxro.com/public/assets/png/woxrologo.png"}
          />

          <FontAwesomeIcon
            icon={faBars}
            className="text-gray-600 cursor-pointer block md:hidden "
            onClick={toggleMenu}
          />

          {showMenu && (
            <div className="fixed top-0 right-0 w-64 h-screen  bg-black/100  text-white-smoke shadow-lg z-50">
              <div className="flex justify-between p-4">
                <h1 className="text-xl font-bold">Menu</h1>
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-gray-600 cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>
              <ul className="py-2 px-4 text-gray-100  ">
                <li className="py-1 hover:text-white cursor-pointer">Home</li>
                <li className="py-1 hover:text-white cursor-pointer">
                  About Us
                </li>
                <li className="py-1 hover:text-white cursor-pointer">
                  About Us Services
                </li>
                <li className="py-1 hover:text-white cursor-pointer">
                  Technology
                </li>
                <li className="py-1 hover:text-white cursor-pointer">
                  Careers
                </li>
                <li className="py-1 hover:text-white cursor-pointer">Blog</li>
                <li className="py-1 hover:text-white cursor-pointer">
                  Our Works
                </li>
                <li className="py-1 hover:text-white cursor-pointer">
                  Contact us
                </li>
              </ul>
            </div>
          )}
        </section>

        <nav className="bg-black text-white  py-2 px-3 hidden md:block text-base">
          <div className="  flex justify-evenly">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">About Us Services</a>
            <a href="#">Technology</a>
            <a href="#">Careers</a>
            <a href="#">Blogs</a>
            <a href="#">Our Works</a>
            <a href="#">Contact us</a>
          </div>
        </nav>
        <div className="w-full h-[450px] border-t border-white text-white relative">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover "
              src={
                "https://www.onmanorama.com/content/dam/mm/en/travel/hourglass/images/2020/7/9/palakkad-paddy.jpg.transform/845x440/image.jpg"
              }
              alt={"img"}
            />

            <div
              className=" z-10  w-full top-0 p-4 md:p-8 absolute  left-0 m-auto text-white flex flex-col items-center justify-center h-full
"
            >
              <center className="text-4xl md:text-7xl font-bold">
                Kerala's Leading Web Design Company
              </center>
              <center>
                <p className=" mt-14 text-lg text-gray-200 font-bold">
                  Global Web Designing Company That Provides Full-cycle Software
                  Development Services, E-commerce & Mobile App Development
                  Services.
                </p>
              </center>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
