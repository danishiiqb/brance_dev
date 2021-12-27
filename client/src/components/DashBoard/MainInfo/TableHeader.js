import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
function TableHeader() {
  const [sortStatus, setSortStatus] = useState(false);
  const [sortPrice, setSortPrice] = useState("desc");
  const [sortDate, setSortDate] = useState("desc");
  return (
    <tr className="text-left text-small last:border-b-0 border-b-2 border-[#f8f8f8] ">
      <th className="font-medium px-1.5 py-2">Order No</th>
      <th className="font-medium px-1.5 py-2">Name</th>
      <th className="font-medium px-1.5 py-2">Address</th>
      <th className="font-medium px-1.5 py-2">
        <div
          onClick={() => {
            setSortDate((prev) => {
              return prev === "desc" ? "asc" : "desc";
            });
          }}
          className="flex items-center  cursor-pointer"
        >
          <div>Date</div>
          {sortDate === "desc" ? (
            <IoMdArrowDropdown className="w-6  h-6 text-gray-500"></IoMdArrowDropdown>
          ) : (
            <IoMdArrowDropup className="w-6 h-6 text-gray-500"></IoMdArrowDropup>
          )}
        </div>
      </th>
      <th className="font-medium px-1.5 py-2">
        <div
          className="flex items-center  cursor-pointer"
          onClick={() => {
            setSortPrice((prev) => {
              return prev === "desc" ? "asc" : "desc";
            });
          }}
        >
          <div>Price</div>
          {sortPrice === "desc" ? (
            <IoMdArrowDropdown className="w-6 h-6  text-gray-500"></IoMdArrowDropdown>
          ) : (
            <IoMdArrowDropup className="w-6 h-6 text-gray-500"></IoMdArrowDropup>
          )}
        </div>
      </th>
      <th className="font-medium px-1.5 py-2 cursor-pointer">
        <div
          className="flex items-center"
          onClick={() => {
            setSortStatus((prev) => {
              return !prev;
            });
          }}
        >
          <div>Status</div>
          {sortStatus ? (
            <IoMdArrowDropup className="w-6  h-6 text-gray-500"></IoMdArrowDropup>
          ) : (
            <IoMdArrowDropdown className="w-6  h-6 text-gray-500"></IoMdArrowDropdown>
          )}
        </div>
        <div className="relative">
          {sortStatus && (
            <div className="absolute top-0 left-0 shadow-sm_dark rounded-md bg-white">
              <div className="font-medium text-xs px-2 py-1">Sort By</div>
              <div className="flex flex-col text-xs font-normal">
                <span className="px-2 py-1 hover:bg-[#f5f5f5] transition-all">
                  Pending
                </span>
                <span className="px-2 py-1 hover:bg-[#f5f5f5] transition-all">
                  Success
                </span>
                <span className="px-2 py-1 hover:bg-[#f5f5f5] transition-all">
                  Delivered
                </span>
              </div>
            </div>
          )}
        </div>
      </th>
    </tr>
  );
}

export default TableHeader;
