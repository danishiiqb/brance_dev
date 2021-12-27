import React from "react";
import { useRef } from "react";

function GrossingProduct() {
  const { current: refer } = useRef([
    {
      img: "/img/product.png",
      product: "Air Jordan 5 Retro",
      category: "Shirts",
      price: "$556.00"
    },
    {
      img: "/img/product.png",
      product: "Air Jordan 5 Retro",
      category: "Shoes",
      price: "$956.00"
    },
    {
      img: "/img/product.png",
      product: "Air Jordan 5 Retro",
      category: "Shirts",
      price: "$556.00"
    },
    {
      img: "/img/product.png",
      product: "Air Jordan 5 Retro",
      category: "Shoes",
      price: "$956.00"
    },
    {
      img: "/img/product.png",
      product: "Air Jordan 5 Retro",
      category: "Shirts",
      price: "$556.00"
    }
  ]);
  return (
    <div className="bg-white flex-1 p-small rounded-md shadow-sm_dark">
      <h3 className="font-medium text-lg">Top Grossing Products</h3>
      <div>
        {refer.map((product, key) => {
          return (
            <div
              key={key}
              className="flex cursor-pointer space-x-2 duration-300 rounded-md transition-all hover:bg-[#f5f5f5] mt-2 p-1.5"
            >
              <div className="w-14 h-14 rounded-md overflow-hidden">
                <img
                  src={product.img}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-1 items-center justify-between">
                <div className="font-normal">
                  <div className="font-normal text-small capitalize">
                    {product.product}
                  </div>
                  <div className="text-sm text-[#4e4e4e] capitalize">
                    {product.category}
                  </div>
                </div>
                <div className="font-semibold text-small">{product.price}</div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="border-2 hover:border-black transition-all duration-300 block w-full font-bold rounded-md text-small mt-2 p-2">
        All Products
      </button>
    </div>
  );
}

export default GrossingProduct;
