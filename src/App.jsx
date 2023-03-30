import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ProductById from "./components/product/ProductById";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

const App = () => {
  return (
    <div className="">
      <section className="fixed z-50 w-full h-14">
        <Header />
      </section>
      <div className="pt-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductById />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
