import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function PaginationBtns() {
  return (
    <div className="flex items-center justify-end cursor-pointer">
      <div className="w-8 hover:bg-gray-100 transition-all duration-150 flex items-center justify-center h-8 p-2 border-2  rounded-sm ">
        <IoIosArrowBack></IoIosArrowBack>
      </div>
      <div className="border-t-2  border-b-2 flex items-center justify-center font-regular p-2 w-8 h-8 text-xs">
        1
      </div>
      <div className=" p-2 w-8 flex hover:bg-gray-100 transition-all duration-150 items-center justify-center h-8 border-2  rounded-sm ">
        <IoIosArrowForward className="w-5 h-5"></IoIosArrowForward>
      </div>
    </div>
  );
}

export default PaginationBtns;
