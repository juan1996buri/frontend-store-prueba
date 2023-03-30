import { useEffect, useState } from "react";
import SectionTitle from "../section-title/SectionTitle";
import ProductCard from "./ProductCard";
import { getAllProduct } from "../../services/ProductoService";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      getAllProduct().then((state) => {
        if (state.statusCode === 200) {
          setProducts(state.data.items);
        }
        if (state.statusCode === 400) {
          setMessage(state.message);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <section className="md:w-[80%] sm:w-[90%] w-full mx-auto  md:pt-10 pt-5 ">
      <SectionTitle title={"Productos disponibles"} />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-1 gap-y-2 ">
        {products?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
