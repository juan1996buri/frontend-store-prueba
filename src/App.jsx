import { Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./components/categories/Categories";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import PopularProducts from "./components/popularProducts/PopularProducts";
import Products from "./components/product-list/Products";
import SwipperStore from "./components/swipper/SwipperStore";
import Testimonials from "./components/testimonial/Testimonials";
import Home from "./components/home/Home";
import ProductById from "./components/product/ProductById";

const App = () => {
  return (
    <div className="">
      <section className="fixed z-50 w-full h-14">
        <Header />
      </section>
      <div className="pt-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ProductById />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
