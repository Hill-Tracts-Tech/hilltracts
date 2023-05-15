/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../../Services/Services';

const Home = () => {
    return (
        <div>
           <div className='lg:grid grid-cols-12 w-full h-[600px]'  style={{ background: `url("https://cdn.discordapp.com/attachments/1101528250964000938/1107265249209503804/ezgif.com-optimize_1.gif")`,backgroundRepeat:"",backgroundSize:"1600px 400px" }}>
           <div className=' text-stone-50 col-span-6 text-center flex justify-center items-center'>
            <div>
            <p>Digital Superheroes</p>
            <h1>Digital Superheroes</h1>
            <p>In the last 12 years, Analyzen evolved from a local digital-first marketing company to offering an integrated mix of strategy, analytics, creativity, technology, media and experience to drive meaningful innovation in communication through multi-country presence. With one of the largest client portfolios, Analyzen is a true integrated marketing company empowered by world class technology team able to offer any solution for any brand across different media.</p>
            </div>
           </div>
           <div className='col-span-6'>
           <Banner></Banner>
           </div>
           </div>
            <Services/>
        </div>
    );
};

export default Home;