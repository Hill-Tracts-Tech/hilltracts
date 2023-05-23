/* eslint-disable no-unused-vars */
import React from 'react';
import"../../../styles/styles.css"
const OurClients = () => {
    return (
        <div className='max-w-[90%] mx-auto'>
            <div className="s-title-outline w-48 mx-auto mt-20">
        <h2 className="text-lg font-semibold text-[#1DA1F2] s-title text-center uppercase">
          Client
        </h2>
      </div>
      <div className="w-1/2 mx-auto">
        <h1 className="text-3xl font-bold text-center capitalize">
         a sample of our current and past clients
        </h1>
      </div>

        <div className='bg-[#9fd3f445] flex justify-center items-center py-5 mt-[-30px]'>
            <div >
                <img src="http://fbta.gov.bd/resources/img/govt%20logo.png" alt="" className=' w-32'/>
       <div className='text-center ml-[-25px]'>
       <p className='text-red-500 '>জেলা প্রশাসক এর  কার্যালয়</p>
            <p className='text-green-500 '>বান্দরবান  পার্বত্য জেলা</p>
       </div>
            </div>
            <div></div>
            <div></div>
        </div>
        </div>
    );
};

export default OurClients;