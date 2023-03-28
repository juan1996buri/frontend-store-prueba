import SectionTitle from "../section-title/SectionTitle";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="md:w-[80%] sm:w-[90%] w-full mx-auto  md:pt-10 pt-5 ">
      <SectionTitle title={"Productos disponibles"} />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-1 gap-y-2 ">
        {[1, 2, 3, 4, 5].map((product, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default Products;
