import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="text-center md:py-10 py-5">
      <h1 className="md:text-3xl sm:text-xl text-lg font-bold text-gray-900">
        {title}
      </h1>
      <div className="w-12 h-1 bg-gray-900 mx-auto my-4"></div>
    </div>
  );
};

export default SectionTitle;
