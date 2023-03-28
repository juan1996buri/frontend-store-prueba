import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import logo from "../../assets/logo.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SwipperStore = () => {
  return (
    <section>
      <img src={logo} alt="" className="md:h-24 h-12" />
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
        {[1, 2, 3, 4].map((item, index) => (
          <SwiperSlide key={index} className="h-96">
            <img
              alt=""
              src="https://media.glamour.mx/photos/61909f30f5ed039ceea86de0/master/w_1600,c_limit/177689.jpg"
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwipperStore;
