import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <NavLink
      to={`/product/${product.id}`}
      className="rounded-lg overflow-hidden shadow-lg w-full"
    >
      <div className="h-56 overflow-hidden ">
        <img
          src={product?.image}
          className="h-full w-full object-cover hover:scale-125 transition-all duration-300"
        />
      </div>
      <div className="py-4 mx-2">
        <h3 className="text-gray-800 text-xl font-medium mb-2">
          {product?.name}
        </h3>
        <div className="flex justify-between">
          <h3 className="text-red-600 font-semibold">${product?.price}</h3>
          <div className="bg-intenseGreen">
            <h3 className="text-white py-1 px-2">stock {product.stock}</h3>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{product.description}</p>
      </div>
    </NavLink>
  );
};

export default ProductCard;
