import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProductById } from "../../services/ProductoService";
function ProductById() {
  const productId = useLocation().pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    try {
      getProductById(productId).then((state) => {
        if (state.statusCode === 200) {
          return setProduct(state.data);
        } else if (state.statusCode === 400) {
          return <h2> no existe</h2>;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleAddToCar = () => {
    if (count < product?.stock) {
      setCount(count + 1);
    }
  };
  const handleRemoveToCar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <section className="md:px-2 flex md:flex-row flex-col bg-white rounded-lg shadow-lg overflow-hidden pt-5">
      <div className="h-[24rem] w-[34rem] overflow-hidden relative">
        <img
          alt=""
          src={product?.image}
          className="h-full w-full object-cover hover:scale-125 transition-all duration-150"
        />
      </div>
      <div className="flex-1 p-4 md:mx-9 ">
        <h2 className="font-bold text-2xl mb-2 uppercase text-gray-800">
          {product?.name}
        </h2>
        <h3 className="font-bold pb-2 text-gray-800">
          Precio: $ {product?.price}
        </h3>
        <h3 className="font-bold pb-2 text-gray-800">
          Stock: {product?.stock}
        </h3>

        <p className="text-gray-600 mb-4">{product?.description}</p>
        <div className="flex flex-col items-center gap-y-3">
          <div className="flex items-center gap-4">
            <button
              onClick={handleRemoveToCar}
              className="bg-white text-gray-800 rounded-full px-3 py-1 font-bold hover:bg-gray-200 transition-all duration-150"
            >
              -
            </button>
            <h3 className="font-bold text-lg text-gray-800">{count}</h3>
            <button
              onClick={handleAddToCar}
              className="bg-white text-gray-800 rounded-full px-3 py-1 font-bold hover:bg-gray-200 transition-all duration-150"
            >
              +
            </button>
          </div>
          <button className="bg-brightTurquoise hover:bg-deepBlue text-white rounded-full  w-56 py-3 font-bold  transition-all duration-150">
            Añadir al carrito
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductById;
