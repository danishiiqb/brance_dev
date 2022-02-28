import { getDocs } from "firebase/firestore";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Product from "../Product";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function ProductRecomm({ products }) {
  const track = useRef("");
  const idx = useRef(0);
  //   useEffect(() => {
  //     console.log();
  //   });

  return (
    <div
      style={{
        width: `calc((${window.innerWidth}px - 2 * ${"2.75rem"} - 16px)`
      }}
      className="relative"
    >
      <div className="overflow-hidden">
        <div className="flex transition-all duration-200" ref={track}>
          {products.map((product) => {
            return (
              <div
                key={product.id}
                style={{
                  width: `calc((${window.innerWidth}px - 2 * 2.75rem) / 5 - 16px)`
                }}
                className={`flex-shrink-0 mr-4`}
              >
                <Product prodDesc={product} expandHeight={true}></Product>
              </div>
            );
          })}
        </div>
      </div>
      <div className="">
        <div
          onClick={() => {
            if (idx.current >= products.length - 1) {
              return;
            }
            idx.current += 1;
            track.current.style.transform = `translate(-${
              idx.current * 270
            }px)`;
          }}
          className="absolute flex justify-center items-center bg-white w-12 h-12 rounded-full top-1/2 -translate-y-1/2 shadow-sm cursor-pointer"
          style={{
            right: `-24px`
          }}
        >
          <IoIosArrowForward className="w-6 h-6"></IoIosArrowForward>
        </div>
        <div
          onClick={() => {
            if (idx.current <= 0) {
              return;
            }
            idx.current -= 1;
            track.current.style.transform = `translate(-${
              idx.current * 270
            }px)`;
          }}
          className="absolute flex justify-center items-center bg-white w-12 h-12 rounded-full top-1/2 -translate-y-1/2 shadow-sm cursor-pointer"
          style={{ left: `-24px` }}
        >
          <IoIosArrowBack className="w-6 h-6"></IoIosArrowBack>
        </div>
      </div>
    </div>
  );
}

export default ProductRecomm;
