import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

function Header() {
  const [isAnimating, setIsAnimating] = useState(false);
  const { cartLists } = useSelector((state) => state.cart);

  useEffect(() => {
    setIsAnimating(true);

    const timeout = setTimeout(() => {
      setIsAnimating(false);
    },[300])

    return () => clearTimeout(timeout);
  },[cartLists?.length])

  return (
    <header className="sticky top-2 left-0 right-0 z-10 min-h-10  max-w-[1400px] mx-auto my-5 px-[10px]">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-green-400  ">AMR Group</h1>
        <div >
          {cartLists.length > 0 && (
            <div className={`w-5 float-end bg-pink-500  rounded-[50%] text-sm text-center ${isAnimating && "animate-ping"}`}>
              {cartLists?.length}
            </div>
          )}
          <ShoppingCartIcon fontSize="large"  className="text-green-400" />
        </div>
      </div>
    </header>
  );
}

export default Header;
