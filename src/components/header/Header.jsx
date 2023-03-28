import React from "react";

const Header = () => {
  return (
    <header className="flex w-full bg-deepBlue justify-between px-10 h-full">
      <div className="flex  items-center gap-2">
        <div className="h-1 bg-brightTurquoise w-6" />
        <div className="h-1 bg-brightTurquoise w-6" />
      </div>
      <div className="flex gap-2">
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
      </div>
    </header>
  );
};

export default Header;
