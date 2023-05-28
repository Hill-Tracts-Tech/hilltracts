/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import navicon from "../../assets/Logo1.svg";

const Navbar = () => {
  const navbarList = (
    <React.Fragment>
      <li>
        <Link to="/" className="text-lg hover:text-[#1DA1F2]">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-[#1DA1F2] text-lg">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-[#1DA1F2] text-lg">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/servicesDetails" className="hover:text-[#1DA1F2] text-lg">
          Services
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:text-[#1DA1F2] text-lg">
          Portfolio
        </Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className=" z-40 shadow-md navbar sticky top-0 backdrop-filter backdrop-blur-lg bg-transparent lg:px-24 ">
      <div className="navbar-start hidden lg:block md:block">
        <img
          style={{ width: "80px", height: "80px" }}
          src={navicon}
          alt=""
        ></img>
      </div>
      <div className="navbar-center hidden lg:flex md:flex">
        <ul className="flex justify-center items-center gap-5 px-1">
          {navbarList}
        </ul>
      </div>
   
        <div className="dropdown">
          {/* Mobile navbar */}
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navbarList}
          </ul>
          {/* Mobile navbar ends */}
        </div>
        <div className=" block lg:hidden md:hidden ml-[200px] ">
          <img
            style={{ width: "80px", height: "80px" }}
            src={navicon}
            alt=""
          ></img>
        </div>
      
    </div>
  );
};

export default Navbar;
