import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function DropDown({ dropdownList }) {
  const [dropdown, expandDropDown] = useState(false);
  const [selected, setSelected] = useState(dropdownList[0]);
  return (
    <ul className={`  relative   mt-2  text-small  font-regular`}>
      <li
        onClick={() => {
          expandDropDown((prev) => !prev);
        }}
        className={`flex ${
          dropdown ? "shadow-sm rounded-t-md border-b-0" : "rounded-md "
        }  cursor-pointer border-gray-300 border-[.5px]border-gray-300 border-[.5px] p-2 justify-between  items-center `}
      >
        <div>{selected}</div>
        <IoMdArrowDropdown className="w-4 h-4"></IoMdArrowDropdown>
      </li>
      {dropdown && (
        <ul className="absolute z-50 left-0 top-full w-full h-full  ">
          {dropdownList.map((elem, idx) => {
            if (selected === elem) {
              return null;
            }
            return (
              <li
                onClick={() => {
                  setSelected(elem);
                  expandDropDown(false);
                }}
                key={idx}
                className="p-2 bg-white relative border-gray-300 border-r-[.5px] border-l-[.5px] hover:bg-gray-50 last:border-b-[.5px] last:rounded-b-md  cursor-pointer "
              >
                {elem}
              </li>
            );
          })}
        </ul>
      )}
    </ul>
  );
}

export default DropDown;
