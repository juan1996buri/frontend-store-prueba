import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
//width: "80%"
const Categories = () => {
  return (
    <section>
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 3,
          },
        }}
      >
        {[1, 2, 3, 5, 6, 7].map((category, index) => (
          <SwiperSlide key={index}>
            <img
              alt=""
              src="https://media.glamour.mx/photos/61909f30f5ed039ceea86de0/master/w_1600,c_limit/177689.jpg"
              className=" h-full  w-full object-cover"
              style={{ height: "7rem" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Categories;
