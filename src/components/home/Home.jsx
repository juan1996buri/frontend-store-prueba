import React from "react";
import SwipperStore from "../swipper/SwipperStore";
import Categories from "../categories/Categories";
import Products from "../product-list/Products";
import PopularProducts from "../popularProducts/PopularProducts";
import Testimonials from "../testimonial/Testimonials";
import Footer from "../footer/Footer";

function Home() {
  return (
    <>
      <div className="md:relative z-40 bg-red-">
        <SwipperStore />
        <div className="md:absolute w-full md:-bottom-14 mt-4 z-50 ">
          <div className=" md:w-[80%] w-full  mx-auto ">
            <Categories />
          </div>
        </div>
      </div>
      <Products />
      <PopularProducts />
      <Testimonials />
    </>
  );
}

export default Home;
