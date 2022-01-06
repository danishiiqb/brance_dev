import React, { useRef, useState } from "react";
import DropDown from "./DropDown";

function NewProductForm() {
  const { current: dropdownList } = useRef([
    "Jacket & Coats",
    "Hoodies & SweatShirts",
    "Tshirts & Polos",
    "Joggers",
    "Shirts",
    "Jeans",
    "LoungeWear",
    "Pants & Chinos",
    "Socks",
    "Sets & OutFits",
    "Jumpers & KnitWear"
  ]);
  return (
    <div>
      <div>
        <label htmlFor="title" className="font-medium text-small">
          Product Name
        </label>
        <input
          type="text"
          className="block w-96 border-gray-300 border-[.5px] focus:border-[#FF385C] mt-2 focus:outline-none transition-all duration-200 text-small rounded-md py-2 px-2"
          id="title"
          placeholder="Name"
        />
      </div>
      <div className="flex mt-4 space-x-3">
        <div className="flex-1">
          <div className="font-medium text-small">Category</div>
          <DropDown dropdownList={dropdownList}></DropDown>
        </div>
        <div className="w-24">
          <div className="font-medium text-small">For</div>
          <DropDown dropdownList={["Mens", "Boys"]}></DropDown>
        </div>
      </div>
      <div>
        <div className="mt-4">
          <div className="font-medium text-small">Brand</div>
          <DropDown
            dropdownList={[
              "Nike",
              "Tommy Hilfiger",
              "H&M",
              "Adidas",
              "Hype",
              "North Face",
              "Levis",
              "Lego",
              "Next",
              "Custom"
            ]}
          ></DropDown>
        </div>
      </div>
    </div>
  );
}

export default NewProductForm;
