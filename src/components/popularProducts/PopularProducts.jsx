import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import SectionTitle from "../section-title/SectionTitle";

const PopularProducts = () => {
  return (
    <section className="md:w-[80%] sm:w-[80%] w-full mx-auto ">
      <SectionTitle title={"Productos populares"} />
      <Swiper
        spaceBetween={30}
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
              style={{ height: "10rem" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularProducts;
