import React from "react";
import { useState } from "react";

function ImageBox({ product }) {
  const [currSelected, setCurrSelected] = useState(0);
  return (
    <div className="w-1/2 flex space-x-4">
      <div className="space-y-3">
        {product.productImg.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                setCurrSelected(idx);
              }}
              className={`w-24 ${
                idx === currSelected ? "border-[1px]  border-[#FF385C]" : ""
              }  bg-gray-200  overflow-hidden group rounded-md  cursor-pointer h-24`}
            >
              <img
                src={item}
                className={`w-full ${
                  idx === currSelected ? "scale-105" : ""
                } group-hover:scale-105 transition-all duration-150 h-full rounded-md object-cover`}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="h-[750px] bg-gray-200 rounded-md cursor-pointer overflow-hidden w-full">
        <img
          className="w-full  hover:scale-101 transition-all duration-150 rounded-md h-full object-cover"
          src={product.productImg[currSelected]}
          alt=""
        />
      </div>
    </div>
  );
}

export default ImageBox;
