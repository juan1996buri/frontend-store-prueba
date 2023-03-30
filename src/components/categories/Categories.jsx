import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper";
import { getAllCategory } from "../../services/CategoryService";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    try {
      getAllCategory().then((state) => {
        if (state.statusCode === 200) {
          setCategories(state?.data);
        } else if (state.statusCode === 400) {
        }
      });
    } catch (error) {}
  }, []);
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
        {categories?.map((category, index) => (
          <SwiperSlide key={index}>
            <CategoryCard category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Categories;
