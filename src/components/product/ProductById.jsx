import React from "react";
function ProductById() {
  return (
    <section className="flex md:flex-row flex-col bg-white rounded-lg shadow-lg overflow-hidden pt-5">
      <div className="h-[24rem] w-[34rem] overflow-hidden relative">
        <img
          alt=""
          src="https://media.glamour.mx/photos/61909f30f5ed039ceea86de0/master/w_1600,c_limit/177689.jpg"
          className="h-full w-full object-cover hover:scale-125 transition-all duration-150"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-70 w-full">
          <h4 className="font-bold text-lg mb-2">Nombre del producto</h4>
          <button className="bg-white text-black rounded-full px-3 py-1 font-bold hover:bg-gray-200 transition-all duration-150">
            Añadir al carrito
          </button>
        </div>
      </div>
      <div className="flex-1 p-4">
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          beatae quasi repellendus. Maxime incidunt voluptatem, itaque
          repudiandae vel assumenda. Nam quod expedita excepturi deleniti
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="bg-white text-black rounded-full px-3 py-1 font-bold hover:bg-gray-200 transition-all duration-150">
              -
            </button>
            <h3 className="font-bold text-lg">3</h3>
            <button className="bg-white text-black rounded-full px-3 py-1 font-bold hover:bg-gray-200 transition-all duration-150">
              +
            </button>
          </div>
          <h4 className="font-bold text-lg">$50</h4>
        </div>
      </div>
    </section>
  );
}

export default ProductById;
