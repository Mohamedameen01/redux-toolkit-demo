import React, { useEffect, useState } from "react";
import axios from "axios";
import CartButtons from "./CartButton";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);  
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleMouseEnter = (id) => setHoveredItemId(id);
  const handleMouseLeave = () => setHoveredItemId(null);

  return (
    <section className="max-w-[1400px] mx-auto my-5 px-[10px]">
      <div className="mx-5 grid md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products.map((item, key) => (
          <div
            key={key}
            className="bg-white relative overflow-hidden text-slate-800 px-5 py-5 rounded-lg before:content-[''] before:bg-cyan-500 before:w-[80px] before:h-[120px] before:absolute before:top-[-100px] before:left-[-80px] before:rounded-[50%] before:transition-all before:ease-in-out before:delay-300 hover:before:top-[-50px]  hover:before:left-[-40px] "
          >
            <img
              className="w-36 h-40 mx-auto my-4 hover:scale-75 "
              src={item.image}
              alt={item.title}
            />
            <h3 className="h-20 text-md font-semibold tracking-wide my-3 text-center hover:scale-90 overflow-hidden">
              {item.title}
            </h3>
            <CartButtons product={item} />
            <div className="mt-2 flex justify-between ">
              <h5 className="text-sm text-blue-700 font-medium hover:scale-110 hover:font-semibold ">
                {item.price}$
              </h5>
              <h6 className="text-sm text-red-600 font-medium hover:scale-110 hover:font-semibold ">
                {item.rating.rate}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
