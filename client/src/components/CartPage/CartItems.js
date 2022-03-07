import React from "react";
import { useSelector } from "react-redux";
import LikedIcon from "../LikedIcon";
import Qty from "../Qty";
import { RiDeleteBin6Fill } from "react-icons/ri";

function WrapperItem({ children }) {
  return <div className="flex w-44 justify-between text-sm">{children}</div>;
}

function CartItems({ item }) {
  let size = item.size[item.sizeSelected || 0].elem;
  const { likedProducts } = useSelector((state) => {
    return { likedProducts: state.likedProducts };
  });
  return (
    <div className="flex cursor-pointer space-x-4 border-b-[1px] py-7 first:pt-0 border-[#dfdfdf]">
      <div className="w-32">
        <img
          className="w-full h-full rounded-sm object-cover"
          src={item.productImg[0]}
          alt=""
        />
      </div>
      <div className="space-y-1 py-2.5 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-md capitalize">{item.title.toLowerCase()}</div>
          <div className="text-md font-medium">
            ${(Math.round(item.prize * 100) / 100).toFixed(2)}
          </div>
        </div>
        <div className="space-y-1 text-[#000000ea]">
          <div className="flex space-x-14">
            <WrapperItem>
              <div className="">Quantity:</div>
              <div>{item.qty}</div>
            </WrapperItem>
            <WrapperItem className="flex">
              <div className="">Colour:</div>
              <div className="capitalize">{item.colour}</div>
            </WrapperItem>
          </div>
          <div className="flex space-x-14">
            <WrapperItem className="flex">
              <div className="">Size:</div>
              <div className=" capitalize ">
                {size.startsWith("X") ||
                size.startsWith("3") ||
                size.startsWith("4")
                  ? size === "X-Large" || size === "X-Small"
                    ? size
                        .split("")
                        .filter((el) => el !== "-")
                        .slice(0, 2)
                    : size
                        .split("")
                        .filter((el) => el !== "-")
                        .slice(0, 3)
                  : size.slice(0, 1)}
              </div>
            </WrapperItem>
            <WrapperItem>
              <div className="">Total:</div>
              <div>
                ${(Math.round(item.qty * item.prize * 100) / 100).toFixed(2)}
              </div>
            </WrapperItem>
          </div>
        </div>
        <div className="flex space-x-4  items-center">
          <div>
            <LikedIcon
              cart={true}
              likedProducts={likedProducts}
              prod={item}
            ></LikedIcon>
          </div>
          <div>
            <Qty notShow={true}></Qty>
          </div>
        </div>
      </div>
      <div className="pt-2.5">
        <RiDeleteBin6Fill className="w-5  transition-all duration-300 hover:text-[#FF385C] fill-current h-5" />
      </div>
    </div>
  );
}

export default CartItems;
