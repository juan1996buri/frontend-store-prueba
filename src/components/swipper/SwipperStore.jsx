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

const dataStore = [
  {
    id: 1,
    img: "https://www.mujerde10.com/wp-content/uploads/2021/08/espalda-ancha.jpg",
  },
  {
    id: 2,
    img: "https://tiempo.hn/wp-content/uploads/2021/10/Espalda-1-scaled.jpg",
  },
  {
    id: 3,
    img: "https://mujersaludable10.com/wp-content/uploads/2021/09/outfits-espalda-ancha.png",
  },
  {
    id: 4,
    img: "https://i.ytimg.com/vi/SADHy9-NFSc/maxresdefault.jpg",
  },
];

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
        {dataStore.map((item, index) => (
          <SwiperSlide key={index} className="md:h-96 h-64">
            <img alt="" src={item.img} className="h-full w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwipperStore;
