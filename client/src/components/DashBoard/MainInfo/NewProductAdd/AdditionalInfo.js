import React from "react";
import DropDown from "./DropDown";
import Input from "./Input";

function AdditionalInfo() {
  return (
    <div className="mt-4">
      <div className="flex space-x-3">
        <div className="w-full">
          <label htmlFor="colour" className="font-medium text-small">
            Colour
          </label>
          <Input placeholder="Colour" id="colour"></Input>
        </div>
        <div>
          <label htmlFor="inStock" className="font-medium text-small">
            In Stock
          </label>
          <div className="w-32">
            <Input type="Number" placeholder="In Stock" id="inStock"></Input>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="prize" className="font-medium text-small">
          Prize
        </label>
        <div className="flex space-x-3">
          <Input type="Number" placeholder="Prize" id="prize"></Input>
          <div className="">
            <DropDown dropdownList={["USD", "EUR", "GBP", "INR"]}></DropDown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdditionalInfo;
