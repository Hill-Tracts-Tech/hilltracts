/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../../Services/Services';
import Portfolio from '../../Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services />
            <Portfolio/>
        </div>
    );
};

export default Home;