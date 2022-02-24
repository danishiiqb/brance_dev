import React from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
function Qty() {
  return (
    <>
      <div className="text-md font-medium">Qty:</div>
      <div
        className={`
             border-[.7px] flex w-max items-center cursor-pointer border-black capitalize rounded-sm space-x-1.5 px-1 py-0.5
          `}
      >
        <div>
          <HiMinus className="w-3.5 h-3.5 " />
        </div>
        <div>1</div>
        <div>
          <HiPlus className="w-3.5 h-3.5" />
        </div>
      </div>
    </>
  );
}

export default Qty;
