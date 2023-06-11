import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/Logo1.png"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navbarList = (
    <React.Fragment>
      <li>
        <Link
          to="/"
          className="text-lg font-semibold hover:text-[#1DA1F2] text-gray-500 dark:text-white"
          onClick={closeMobileMenu}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="hover:text-[#1DA1F2] text-lg font-semibold text-gray-500 dark:text-white"
          onClick={closeMobileMenu}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="hover:text-[#1DA1F2] text-lg font-semibold text-gray-500 dark:text-white"
          onClick={closeMobileMenu}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/servicesDetails"
          className="hover:text-[#1DA1F2] text-lg font-semibold text-gray-500 dark:text-white"
          onClick={closeMobileMenu}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="hover:text-[#1DA1F2] text-lg font-semibold text-gray-500 dark:text-white"
          onClick={closeMobileMenu}
        >
          Portfolio
        </Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="z-40 shadow-md navbar sticky top-0 backdrop-filter backdrop-blur-lg bg-transparent">
      <div className="navbar-start hidden lg:flex md:hidden lg:ml-[30px] items-center">
        <img
          style={{ width: "80px", height: "80px" }}
          src={Logo1}
          alt=""
        ></img>
        <Link to='/' ><h  className="text-xl ml-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#51ebad] to-[#b9e2fc] ">Hill Tracts Tech</h></Link>
      </div>
      <div className="navbar-center hidden lg:flex md:hidden">
        <ul className="flex justify-center items-center gap-5 px-1">
          {navbarList}
        </ul>
      </div>

      <div className="dropdown">
        {/* Mobile navbar */}
        <label
          tabIndex={0}
          className="btn btn-ghost lg:hidden text-[#90cff6]"
          onClick={toggleMobileMenu}
        >
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
        {isMobileMenuOpen && (
          <ul
            tabIndex={0}
            className=" menu menu-compact dropdown-content mt-3 p-2 shadow-lg  bg-gray-100 dark:bg-gray-500 rounded-box w-52"
            onClick={closeMobileMenu}
          >
            {navbarList}
          </ul>
        )}
        {/* Mobile navbar ends */}
      </div>
      <div className="block lg:hidden md:block ml-[200px] md:ml-[600px]">
        <Link to='/'>
        <img
          style={{ width: "80px", height: "80px" }}
          src={Logo1}
          alt=""
        ></img>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
