import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <header className="max-w-[1400px] mx-auto my-5 px-[10px]">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">AMR Group</h1>
        <ShoppingCartIcon fontSize="large"/>
      </div>
    </header>
  );
}

export default Header;
