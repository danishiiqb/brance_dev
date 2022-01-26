import React, { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";
import { v4 as uuidv4 } from "uuid";
import AdditionalInfo from "./AdditionalInfo";
import Input from "./Input";

function NewProductForm({ collectValues, clear }) {
  const { current: dropdownList } = useRef([
    {
      id: uuidv4(),
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
      ],
      pattern: [
        "plain",
        "logo",
        "stripe",
        "check",
        "print",
        "graphic",
        "embroidery",
        "colour block",
        "other"
      ]
    },
    {
      id: uuidv4(),
      name: "Hoodies & SweatShirts",
      style: [
        "Hooded",
        "cuffed",
        "zip through",
        "tracksuit",
        "oversized",
        "other",
        "joggers",
        "fleece lined"
      ],
      pattern: [
        "plain",
        "logo",
        "stripe",
        "floral",
        "check",
        "print",
        "graphic",
        "embroidery",
        "colour block",
        "other"
      ]
    },
    {
      id: uuidv4(),
      name: "Tshirts & Polos",
      style: [
        "LongLine",
        "Muscle",
        "Oversized",
        "slim fit",
        "Regular",
        "Relaxed",
        "slim",
        "Other"
      ],
      pattern: [
        "logo",
        "Plain",
        "graphic",
        "print",
        "check",
        "coulour block",
        "other"
      ]
    },
    {
      id: uuidv4(),
      name: "Joggers",
      style: ["cargo", "Cigarette", "Cropped", "slim", "relaxed", "other"],
      pattern: undefined
    },
    {
      id: uuidv4(),
      name: "Shirts",
      style: ["Denim", "Oxford", "Regular", "Relaxed", "Slim", "Other"],
      pattern: [
        "plain",
        "check",
        "print",
        "stripe",
        "logo",
        "floral",
        "tartan",
        "other"
      ]
    },
    {
      id: uuidv4(),
      name: "Jeans",
      style: ["Slim", "Tapered", "Regular", "Other"],
      pattern: undefined
    },
    {
      id: uuidv4(),
      name: "LoungeWear",
      style: ["Hooded", "cuffed", "zip through", "jersey", "hoodies"],
      pattern: undefined
    },
    {
      id: uuidv4(),
      name: "Pants & Chinos",
      style: [
        "cargo",
        "Cigarette",
        "chino",
        "Cropped",
        "slim",
        "relaxed",
        "other"
      ],
      pattern: ["Plain", "check", "stripe", "logo", "other"]
    },
    {
      id: uuidv4(),
      name: "Socks",
      style: ["ankle sock", "trainer sock", "slipper sock"],
      pattern: ["plain", "logo", "print", "stripe", "embroidery", "other"]
    },
    {
      id: uuidv4(),
      name: "Sets & OutFits",
      style: [
        "Joggers sets",
        "t-shirt set",
        "sweater set",
        "tracksuit",
        "hooded",
        "Co Ord"
      ],
      pattern: ["plain", "logo", "print", "stripe", "graphic", "other"]
    },
    {
      id: uuidv4(),
      name: "Jumpers & KnitWear",
      style: ["Oversized", "regular", "relaxed", "other"],
      pattern: [
        "plain",
        "logo",
        "print",
        "stripe",
        "graphic",
        "cable",
        "colour block",
        "other"
      ]
    }
  ]);
  let [detailDropDown, setDetailDropDown] = useState("");
  const [def, setDefault] = useState(false);
  let [selectedValues, setSelectedValues] = useState({
    title: "",
    category: "",
    for: "",
    brand: "",
    size: "",
    madewith: "",
    colour: "",
    inStock: "",
    prize: "",
    currency: ""
  });

  useEffect(() => {
    if (clear) {
      let keys = Object.keys(selectedValues);
      let newSelectedVal = {};
      keys.forEach((key) => {
        if (key) newSelectedVal[key] = "";
      });
      setSelectedValues({ ...newSelectedVal });
      setDefault(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clear]);

  useEffect(() => {
    setDefault(false);
    collectValues(selectedValues, "formData");
  }, [selectedValues, collectValues]);

  function getAllValues(val, type) {
    setSelectedValues((prev) => {
      return { ...prev, [type]: val };
    });
  }

  useEffect(() => {
    let foundStyle = dropdownList.find((elem) => {
      return elem.name === selectedValues.category;
    });
    if (foundStyle) {
      setDetailDropDown({
        id: foundStyle.id,
        style: foundStyle.style,
        pattern: foundStyle.pattern
      });
    }
  }, [selectedValues.category, dropdownList]);

  return (
    <div className="flex-1">
      <div>
        <label htmlFor="title" className="font-medium text-small">
          Product Name
        </label>
        <Input
          value={selectedValues.title}
          id="title"
          getAllValues={getAllValues}
          placeholder="Name"
        ></Input>
      </div>
      <div className="flex mt-4 space-x-3">
        <div className="flex-1">
          <DropDown
            def={def}
            title="category"
            getAllValues={getAllValues}
            dropdownList={dropdownList.map((elem) => elem.name)}
          ></DropDown>
        </div>
        <div className="w-32">
          <DropDown
            def={def}
            title="for"
            getAllValues={getAllValues}
            dropdownList={["Mens", "Boys"]}
          ></DropDown>
        </div>
      </div>

      <div className="mt-4">
        <DropDown
          title="brand"
          def={def}
          getAllValues={getAllValues}
          dropdownList={[
            "Nike",
            "Tommy Hilfiger",
            "H&M",
            "Adidas",
            "Gap",
            "North Face",
            "Levis",
            "Zara",
            "Next",
            "Urban Outfitters",
            "Custom"
          ]}
        ></DropDown>
      </div>

      <div className="flex mt-4 space-x-3">
        {detailDropDown && (
          <div className="flex-1">
            <DropDown
              def={def}
              getAllValues={getAllValues}
              key={detailDropDown.id}
              dropdownList={detailDropDown.style}
              title="style"
            ></DropDown>
          </div>
        )}
        {detailDropDown.pattern && (
          <div className="w-32">
            <DropDown
              def={def}
              title="pattern"
              getAllValues={getAllValues}
              key={detailDropDown.id}
              dropdownList={detailDropDown.pattern}
            ></DropDown>
          </div>
        )}
      </div>

      <div className="flex mt-4 space-x-3">
        <div className="flex-1">
          <DropDown
            multiple
            title="size"
            def={def}
            getAllValues={getAllValues}
            dropdownList={[
              "x-small",
              "small",
              "medium",
              "large",
              "X-Large",
              "XX-Large",
              "3X-Large",
              "4X-Large"
            ]}
          ></DropDown>
        </div>
        <div className="w-32">
          <label htmlFor="madewith" className="font-medium text-small">
            Material
          </label>
          <Input
            value={selectedValues.madewith}
            id="madewith"
            getAllValues={getAllValues}
            placeholder="Made With"
          ></Input>
        </div>
      </div>
      <AdditionalInfo
        def={def}
        getAllValues={getAllValues}
        values={{
          colour: selectedValues.colour,
          inStock: selectedValues.inStock,
          prize: selectedValues.prize
        }}
      ></AdditionalInfo>
    </div>
  );
}

export default NewProductForm;
