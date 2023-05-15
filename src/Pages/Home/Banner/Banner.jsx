/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slide.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Banner = () => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" h-96"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  h-96"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  h-96"></div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
