import React from "react";
import SectionTitle from "../section-title/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="w-[80%] mx-auto">
      <SectionTitle title={"Testimonios"} />

      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className=""
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
        <SwiperSlide className=" flex justify-center ">
          <div className="w-40 flex flex-col justify-center items-center">
            <div className=" rounded-full  md:w-full md:h-40 w-56 h-56 flex justify-center items-center shadow-lg overflow-hidden">
              <img
                src="https://media.glamour.mx/photos/61909f30f5ed039ceea86de0/master/w_1600,c_limit/177689.jpg"
                className="h-full"
              />
            </div>
            <h3 className="text-gray-800 text-xl font-medium mb-2">Nombre</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center ">
          <div className="w-40 flex flex-col justify-center items-center">
            <div className=" rounded-full  md:w-48 md:h-48 w-56 h-56  flex justify-center items-center shadow-lg overflow-hidden">
              <img
                src="https://media.glamour.mx/photos/61909f30f5ed039ceea86de0/master/w_1600,c_limit/177689.jpg"
                className="h-full"
              />
            </div>
            <h3 className="text-gray-800 text-xl font-medium mb-2">Nombre</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center ">
          <div className="w-40 flex flex-col justify-center items-center">
            <div className=" rounded-full md:w-full md:h-40 w-56 h-56  flex justify-center items-center shadow-lg overflow-hidden">
              <img
                src="https://media.glamour.mx/photos/61909f30f5ed039ceea86de0/master/w_1600,c_limit/177689.jpg"
                className="h-full"
              />
            </div>
            <h3 className="text-gray-800 text-xl font-medium mb-2">Nombre</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
