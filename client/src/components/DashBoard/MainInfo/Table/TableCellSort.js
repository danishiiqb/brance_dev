import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import StatusDropDown from "../StatusDropDown";
function TableCellSort({ elem }) {
  return (
    <div
      onClick={() => {
        elem.setter((prev) => {
          return prev === "desc" ? "asc" : "desc";
        });
      }}
      className="flex items-center relative cursor-pointer"
    >
      <div>{elem.name}</div>
      {elem.order === "desc" ? (
        <IoMdArrowDropdown className="w-6  h-6 text-gray-500"></IoMdArrowDropdown>
      ) : (
        <IoMdArrowDropup className="w-6 h-6 text-gray-500"></IoMdArrowDropup>
      )}

      {elem.name === "Status" && elem.order === "asc" && (
        <StatusDropDown></StatusDropDown>
      )}
    </div>
  );
}

export default TableCellSort;
