import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/index";
import logo from "../../assests/logo.png";
import menu from "../../assests/menu.svg";
import close from "../../assests/close.svg";

// Define the Navbar component
const Navbar = () => {
  // Define state variables 'active' and 'toggle'
  const [active, setActive] = useState(""); // Adding the 'active' state variable
  const [toggle, setToggle] = useState(false);

  // Return the JSX for the navigation bar
  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and site title link */}
        <Link
          to="/"
          className="flex item-center gap-2"
          onClick={() => {
            setActive(" "); // Set 'active' state to an empty string and scroll to top on link click
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Nitesh Meena
          </p>
        </Link>

        {/* Navigation links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="#experience">Project</a>
          </li>
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a
              href="https://drive.google.com/file/d/1n3b5_ueZdvNbw9uwh7ZGRBNLRC0t_Tj0/view?usp=sharing"
              target="#"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile responsive menu */}
        <div className="sm:hidden flex flex-1 justify-end item-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle); // Toggle the 'toggle' state on menu icon click
            }}
          />
          {/* Dropdown menu for small screens */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle); // Close the dropdown menu and set 'active' state on link click
                    setActive(link.title);
                  }}
                >
                  <a
                    href={link.title === "Resume" ? link.id : `#${link.id}`}
                    target={link.title === "Resume" ? "_blank" : ""}
                    rel={link.title === "Resume" ? "noopener noreferrer" : ""}
                    spy={1}
                    smooth={1}
                    duration={500}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* With these changes, the links in the small screen navbar should scroll smoothly to the corresponding sections when clicked. The links in the big screen navbar remain unchanged. */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
