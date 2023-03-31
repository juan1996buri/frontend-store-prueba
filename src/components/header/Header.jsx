import BasicMenu from "./BasicMenu";

const Header = () => {
  return (
    <header className="flex w-full bg-intenseGreen justify-between px-10 h-full">
      <div className="flex  items-center gap-2">
        <div className="h-[1px] bg-softMint w-12" />
        <div className="h-[1px] bg-softMint w-12" />
      </div>
      <div className="flex gap-2">
        <BasicMenu />
      </div>
    </header>
  );
};

export default Header;
