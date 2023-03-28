import { NavLink } from "react-router-dom";

const ProductCard = () => {
  return (
    <NavLink to={"/1"} className="rounded-lg overflow-hidden shadow-lg w-full">
      <div className="h-56 overflow-hidden ">
        <img
          src="https://media.glamour.mx/photos/61909f30f5ed039ceea86de0/master/w_1600,c_limit/177689.jpg"
          className="h-full w-full object-cover hover:scale-125 transition-all duration-300"
        />
      </div>
      <div className="py-4 mx-2">
        <h3 className="text-gray-800 text-xl font-medium mb-2">
          Nombre del Producto
        </h3>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
        </p>
      </div>
    </NavLink>
  );
};

export default ProductCard;
