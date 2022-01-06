import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function DropDown({ dropdownList }) {
  const [dropdown, expandDropDown] = useState(false);
  const [selected, setSelected] = useState(dropdownList[0]);
  return (
    <ul className="border-gray-300   rounded-sm  mt-2 border-[.5px] text-small font-regular">
      <li
        onClick={() => {
          expandDropDown((prev) => !prev);
        }}
        className={`flex border-gray-300  ${
          dropdown ? "border-b-[.5px]" : ""
        } cursor-pointer  p-2 justify-between  items-center `}
      >
        <div>{selected}</div>
        <IoMdArrowDropdown className="w-4 h-4"></IoMdArrowDropdown>
      </li>
      {dropdown && (
        <>
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
                className="p-2  border-b-[.5px] last:border-b-0  hover:bg-gray-50 cursor-pointer  border-gray-300"
              >
                {elem}
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
}

export default DropDown;
