/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../../Pages/Share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;