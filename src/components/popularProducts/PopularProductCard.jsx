const PopularProductCard = ({ popular }) => {
  return (
    <div className="relative  rounded overflow-hidden shadow-lg ">
      <img
        className="w-full h-60 object-cover"
        src={popular?.img}
        alt="product"
      />
      <div className="absolute bg-black opacity-50 inset-0 w-full top-36 bottom-0 "></div>
      <div className="absolute flex flex-col justify-center px-2  w-full top-40 bottom-0 ">
        <h3 className="text-white text-2xl font-bold mb-2">{popular?.name}</h3>
        <p className="text-white text-lg">$ {popular?.price}</p>
      </div>
    </div>
  );
};

export default PopularProductCard;
