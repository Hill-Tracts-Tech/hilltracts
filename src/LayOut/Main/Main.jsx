/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../../Pages/Share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Share/Footer/Footer';
import Services from '../../Pages/Services/Services';

const Main = () => {
    return (
      <div className="bg-[#D8D3D3]">
        <Navbar></Navbar>
        <Services />
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default Main;