/* eslint-disable no-unused-vars */
import React from "react";
import navicon from "../../assets/navicon.png";
import facebook from "../../assets/facebook.png";
import instra from "../../assets/instra.png";
import twittor from "../../assets/twittor.png";
import linkedIn from "../../assets/in.png";
import { FaEnvelope, FaPhoneAlt, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full bg-[#d8f0ff] dark:bg-gray-700 lg:h-[400px] border-t-2  lg:rounded-tr-[250px]code  ">
      <footer className="footer px-6  text-base-content pt-24">
        <div className="lg:ml-20">
          <img
            style={{ width: "80px", height: "80px" }}
            src={navicon}
            alt=""
          ></img>
          <p className="text-left">
          Hill Tracts Tech
            <br />
            Providing reliable tech since 2023
          </p>
          <div className="grid grid-flow-col gap-4 ">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.facebook.com/hilltractstech"
            >
              <img src={facebook} alt="" />
            </a>
            <a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/hilltractstech/">
              <img src={instra} alt="" />
            </a>
            <a target={"_blank"} rel="noreferrer" href="https://twitter.com/HillTractsTech">
              <img src={twittor} alt="" />
            </a>
            <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/hill-tracts-tech-450aa4274/">
              <img src={linkedIn} alt="" />
            </a>
          </div>
        </div>

        <div>
          <span className="footer-title">Services</span>
          <a className="link  no-underline hover:text-[#1DA1F2]"><FaPlusCircle className=" inline-block text-[#1DA1F2] "/> <span >Branding</span></a>
          <a className="link no-underline hover:text-[#1DA1F2]"><FaPlusCircle className=" inline-block text-[#1DA1F2] "/> <span >Design</span></a>
          <a className="link no-underline hover:text-[#1DA1F2]"><FaPlusCircle className=" inline-block text-[#1DA1F2] "/> <span >Marketing</span></a>
          <a className="link no-underline hover:text-[#1DA1F2]"><FaPlusCircle className=" inline-block text-[#1DA1F2] "/> <span >Advertisement</span></a>
       
        </div>
        <div>
          <span className="footer-title">Page Link</span>
          <Link to="/about" className="link no-underline hover:text-[#1DA1F2]">
          <FaPlusCircle className=" inline-block text-[#1DA1F2] "/> <span >About us</span> 
          </Link>
          <Link to="/contact" className="link no-underline hover:text-[#1DA1F2]">
          <FaPlusCircle className=" inline-block text-[#1DA1F2] "/> <span >Contact</span> 
          </Link>
          <Link to="/servicesDetails" className="link no-underline hover:text-[#1DA1F2]">
          <FaPlusCircle className=" inline-block text-[#1DA1F2] "/> <span >Services</span> 
          </Link>
          <Link to="/" className="link no-underline hover:text-[#1DA1F2]">
          <FaPlusCircle className=" inline-block text-[#1DA1F2] "/> <span >Portfolio</span> 
          </Link>
   
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link no-underline hover:text-[#1DA1F2]"><FaPlusCircle className=" inline-block text-[#1DA1F2] "/> <span >Terms of use</span> </a>
          <a className="link no-underline hover:text-[#1DA1F2]"><FaPlusCircle className=" inline-block text-[#1DA1F2] "/> <span >Privacy policy</span> </a>
          <a className="link no-underline hover:text-[#1DA1F2]"><FaPlusCircle className=" inline-block text-[#1DA1F2] "/> <span >Cookie policy</span> </a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text"><FaPhoneAlt className=" inline-block text-[#1DA1F2] " />+8801728-010810</span>
            </label>
            <label className="label">
              <span className="label-text"><FaEnvelope className=" inline-block text-[#1DA1F2] " /> Enter your email</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-[#1DA1F2] absolute top-0 right-0 rounded-l-none border-0 hover:bg-[#1DA1f2]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-center py-4 px-3  text-sm">
        Copyright © 2023 HTT | Powered by Hill Tracts Tech
      </p>
    </div>
  );
};

export default Footer;
