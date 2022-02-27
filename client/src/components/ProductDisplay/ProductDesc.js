import React, { useState } from "react";
import { ReactComponent as Bag } from "../../icons/bagProd.svg";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import Rating from "../Rating";
import Qty from "../Qty";
import Accordian from "../Accordian";

function ProductDesc({ product }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [heart, setSwitchHeart] = useState(false);
  return (
    <div className="w-1/2">
      <div className="">
        <h2 className="font-regular mb-[3px] select-none capitalize leading-tight text-[1.76rem]">
          {product.title}
        </h2>
        <div>
          <Rating reviews={product.reviews} big={true}></Rating>
        </div>
        <div className="font-medium select-none text-[1.76rem] mt-3 ">
          {product.currency === "USD" ? "$" : ""}
          {product.prize}
        </div>
      </div>
      <div className="space-y-2 my-7">
        <div className="text-md select-none font-medium">Colour:</div>
        <div
          style={{ backgroundColor: `${product.colour}` }}
          className={`w-[14px] h-[14px] rounded-full 
                     border-[1.7px] cursor-pointer border-black
                  `}
        ></div>
      </div>
      <div className="space-y-2 mb-7">
        <div className="text-md select-none font-medium">Size:</div>
        <div className="flex space-x-3">
          {product.size.map((item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  setSelectedSize(idx);
                }}
                className={`
                       border-[.7px] ${
                         selectedSize === idx && "bg-[#000000] text-white"
                       } hover:bg-[#000000] hover:border-white hover:text-white  transition-all duration-150 px-2.5 py-0.5 cursor-pointer border-black capitalize select-none text-sm rounded-sm
                    `}
              >
                {item.elem.startsWith("X") ||
                item.elem.startsWith("3") ||
                item.elem.startsWith("4")
                  ? item.elem === "X-Large" || item.elem === "X-Small"
                    ? item.elem
                        .split("")
                        .filter((el) => el !== "-")
                        .slice(0, 2)
                    : item.elem
                        .split("")
                        .filter((el) => el !== "-")
                        .slice(0, 3)
                  : item.elem.slice(0, 1)}
              </div>
            );
          })}
        </div>
      </div>
      <div className="space-y-2">
        <Qty inStock={product.inStock}></Qty>
      </div>
      <div className="flex  space-x-5 mt-10 items-center w-[85%]">
        <div className="flex-1 relative">
          <div className="flex cursor-pointer group shadow-sm_dark hover:shadow-darker transition-all duration-300  items-center space-x-1.5 justify-center text-white p-[0.6rem] rounded-md bg-[#FF385C]">
            <button className="text-lg select-none font-semibold">
              Add To Bag
            </button>
            <Bag className="w-7 h-7 group-hover:text-white transition-all fill-current stroke-white text-transparent  duration-300 stroke-white"></Bag>
          </div>
          <div className="absolute select-none text-[12px] text-[#6b6b6b] mt-2 -translate-x-1/2 left-1/2 top-full ">
            Free Delivery Ts&Cs apply
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setSwitchHeart(true);
          }}
          onMouseLeave={() => {
            setSwitchHeart(false);
          }}
          className="border-black cursor-pointer border-2 flex items-center justify-center rounded-full hover:bg-[#FF385C] transition-all duration-150  hover:border-white  w-10 h-10 p-[1.3rem]"
        >
          <div>
            {heart ? (
              <RiHeartFill className="w-6 text-white fill-current h-6" />
            ) : (
              <RiHeartLine className="w-7 h-7" />
            )}
          </div>
        </div>
      </div>
      <div className="mt-20 space-y-5">
        <Accordian
          title={"Product Details"}
          detail={product.description}
        ></Accordian>
        <Accordian
          title={"Size & Fit"}
          detail={`Male model wears: Size Medium
                    Model's height: 183cm/6'0"`}
        ></Accordian>{" "}
        <Accordian
          title={"Fabric & Care"}
          detail={`Machine wash according to instructions on care label
                Material Used : ${product.madewith}`}
        ></Accordian>
      </div>
    </div>
  );
}

export default ProductDesc;
