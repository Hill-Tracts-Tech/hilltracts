/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import"./slide.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';

import slide_image_1 from '../../../assets/images/img_1.png';
import slide_image_2 from '../../../assets/images/img_2.png';
import slide_image_3 from '../../../assets/images/img_3.png';
import slide_image_4 from '../../../assets/images/img_4.png';
import slide_image_5 from '../../../assets/images/img_5.png';



const Banner = () => {
  
  return (
    <div className="container" >
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      
      modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
      autoplay={{
        delay: 2400,
        disableOnInteraction: false,
      }}
      className="swiper_container"
    >
      <SwiperSlide>
        <img src={slide_image_1} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_2} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_3} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_4} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_5} alt="slide_image" />
      </SwiperSlide>
      
    </Swiper>
  </div>
  );
}

export default Banner;
