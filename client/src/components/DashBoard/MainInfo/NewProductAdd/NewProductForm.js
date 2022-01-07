import React, { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineSmile,
  AiOutlineUnderline
} from "react-icons/ai";
function NewProductForm() {
  const { current: dropdownList } = useRef([
    {
      name: "Jacket & Coats",
      style: [
        "Leather",
        "OverCoat",
        "PullOver",
        "Biker",
        "Bomber Jacket",
        "Parkas",
        "Denim Jacket",
        "Track",
        "Varsity",
        "Wind Breaker",
        "Other"
      ]
    },
    { name: "Hoodies & SweatShirts", style: [] },
    {
      name: "Tshirts & Polos",
      style: [
        "LongLine",
        "Muscle",
        "Oversized",
        "Other",
        "Regular",
        "Relaxed",
        "Similar",
        "Other"
      ]
    },
    {
      name: "Joggers",
      style: ["cargo", "Cigarette", "Cropped", "slim", "relaxed", "other"]
    },
    {
      name: "Shirts",
      style: ["Denim", "Oxford", "Regular", "Relaxed", "Slim", "Other"]
    },
    { name: "Jeans", style: ["Slim", "Tapered", "Regular", "Other"] },
    { name: "LoungeWear", style: ["Other"] },
    {
      name: "Pants & Chinos",
      style: ["cargo", "Cigarette", "Cropped", "slim", "relaxed", "other"]
    },
    { name: "Socks", style: ["Other"] },
    { name: "Sets & OutFits", style: ["Other"] },
    {
      name: "Jumpers & KnitWear",
      style: ["Oversized", "regular", "relaxed", "other"]
    }
  ]);
  let [dropDownListSelection, setFromDropDownListSelection] = useState("");

  const style = useRef(null);

  function selectedFromList(element) {
    let foundStyle = dropdownList.find((elem) => {
      return elem.name === element;
    });
    if (foundStyle) {
      style.current = foundStyle.style;
      setFromDropDownListSelection(element);
    }
  }
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
          <DropDown
            dropdownList={dropdownList.map((elem) => elem.name)}
            notifyParentOfSelected={selectedFromList}
          ></DropDown>
        </div>
        <div className="w-24">
          <div className="font-medium text-small">For</div>
          <DropDown dropdownList={["Mens", "Boys"]}></DropDown>
        </div>
      </div>

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
      {dropDownListSelection && (
        <div className="mt-4">
          <div className="font-medium text-small">Style</div>
          <DropDown
            key={dropDownListSelection}
            dropdownList={style.current}
          ></DropDown>
        </div>
      )}

      <div className="mt-4">
        <label className="font-medium text-small" htmlFor="description">
          Description
        </label>
        <textarea
          className="resize-none block mt-2 w-96 h-52 border-gray-300 border-[.5px] focus:border-[#FF385C]  focus:outline-none transition-all duration-200 text-small rounded-md py-2 px-2"
          contentEditable="true"
        ></textarea>
      </div>
    </div>
  );
}

export default NewProductForm;
