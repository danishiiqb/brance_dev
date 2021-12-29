import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  activateAscending,
  activateDescending
} from "../../../../store/tableHeaderSortingReducer";
import StatusDropDown from "../StatusDropDown";
function TableCellSort({ elem }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        elem.order === "asc"
          ? dispatch(activateDescending(elem.name.toLowerCase()))
          : dispatch(activateAscending(elem.name.toLowerCase()));
      }}
      className="flex space-x-0.5 items-center relative cursor-pointer"
    >
      <div>{elem.name}</div>
      {elem.order === "desc" ? (
        <IoMdArrowDropdown className="w-6  h-6 text-gray-400"></IoMdArrowDropdown>
      ) : (
        <IoMdArrowDropup className="w-6 h-6 text-gray-400"></IoMdArrowDropup>
      )}
      {elem.name === "Status" && elem.order === "asc" && (
        <StatusDropDown></StatusDropDown>
      )}
    </div>
  );
}

export default TableCellSort;
