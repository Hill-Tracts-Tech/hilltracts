/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
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
import slide_image_6 from '../../../assets/images/img_6.png';
import slide_image_7 from '../../../assets/images/img_7.png';
import slide_image_8 from '../../../assets/images/img_8.png';
import slide_image_9 from '../../../assets/images/img_9.png';
import slide_image_10 from '../../../assets/images/img_10.png';
import { serviceData } from '../Services/serviceData';



const Banner = ({setCardData}) => {

  const handleSlideChange = (swiper) => {
  
    const activeIndex = swiper.activeIndex;
    console.log("Active slide index:", activeIndex,"length",length);
    // Perform any actions based on the activeIndex
    // const slideIndexes = [];
    // for (let i = 0; i < swiper.slides.length; i++) {
    //   slideIndexes.push(i);
    // }
    // console.log('Slide indexes:', slideIndexes);
    if(activeIndex==1){
    const data=  serviceData.filter(item=>item.id===1)
      setCardData(data)
    }
    else if(activeIndex==2){
    const data=  serviceData.filter(item=>item.id===2)
      setCardData(data)
    }
    else if(activeIndex==3){
    const data=  serviceData.filter(item=>item.id===3)
      setCardData(data)
    }
    else if(activeIndex==4){
    const data=  serviceData.filter(item=>item.id===4)
      setCardData(data)
    }
    else if(activeIndex==5){
    const data=  serviceData.filter(item=>item.id===5)
      setCardData(data)
    }
    else if(activeIndex==6){
    const data=  serviceData.filter(item=>item.id===6)
      setCardData(data)
    }
    else if(activeIndex==7){
    const data=  serviceData.filter(item=>item.id===7)
      setCardData(data)
    }
    else if(activeIndex==8){
    const data=  serviceData.filter(item=>item.id===8)
      setCardData(data)
    }
    else {
    const data=  serviceData.filter(item=>item.id===9)
      setCardData(data)
    }
  };

  
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
      // onSwiper={handleSlideChange}
      onSlideChange={handleSlideChange}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      
      modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
      autoplay={{
        delay: 2400,
        disableOnInteraction: false,
      }}
      className="swiper_container"
    >
      <SwiperSlide >
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
      <SwiperSlide>
        <img src={slide_image_6} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_7} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide >
        <img src={slide_image_8} alt="slide_image" />
      </SwiperSlide>
      
      <SwiperSlide>
        <img src={slide_image_9} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_10} alt="slide_image" />
      </SwiperSlide>
      
    </Swiper>
  </div>
  );
}

export default Banner;
