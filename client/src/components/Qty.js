import React from "react";
import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

function Qty({ inStock }) {
  const [num, setNum] = useState(1);
  return (
    <>
      <div className="text-md select-none font-medium">Qty:</div>
      <div
        className={`
             border-[0.7px] hover:border-[1px] flex w-max items-center cursor-pointer border-black capitalize rounded-sm space-x-1.5
          `}
      >
        <div
          className="group border-r-[1px] border-gray-300  px-1  py-[0.2rem] hover:border-black"
          onClick={() => {
            setNum((prev) => {
              return prev === 1 ? prev : prev - 1;
            });
          }}
        >
          <HiMinus className="w-[0.95rem] transition-all duration-200 group-hover:stroke-1 h-[0.95rem] " />
        </div>
        <div className="select-none text-sm">{num}</div>
        <div
          className="group border-gray-300 border-l-[1px]  px-1  py-[0.2rem] hover:border-black"
          onClick={() => {
            setNum((prev) => {
              return prev === Number(inStock) ? prev : prev + 1;
            });
          }}
        >
          <HiPlus className="w-[0.95rem] transition-all duration-200 group-hover:stroke-1 h-[0.95rem]" />
        </div>
      </div>
    </>
  );
}

export default Qty;
