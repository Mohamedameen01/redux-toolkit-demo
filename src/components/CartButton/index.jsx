import React, { useMemo } from "react";
import BeforeCart from "./BeforeCart";
import AfterCart from "./AfterCart";
import { useSelector } from "react-redux";

function CartButtons({ product }) {
  const { cartLists } = useSelector((state) => state.cart);

  const cartCount = useMemo(() => {
    return cartLists?.find((item) => item.id === product.id)?.count;
  }, [cartLists, product?.id]);

  return (
    <>
      {cartCount > 0 ? (
        <AfterCart count={cartCount} productId={product?.id} />
      ) : (
        <BeforeCart product={product} />
      )}
    </>
  );
}

export default CartButtons;
