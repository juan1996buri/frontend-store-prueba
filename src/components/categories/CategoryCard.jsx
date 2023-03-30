const CategoryCard = ({ category }) => {
  return (
    <div className="relative h-44 md:h-52 overflow-hidden rounded-lg shadow-lg">
      <img
        alt={category?.name}
        src={category?.image}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white font-bold text-3xl md:text-5xl tracking-wide uppercase text-center">
          {category?.name}
        </h2>
      </div>
    </div>
  );
};

export default CategoryCard;
