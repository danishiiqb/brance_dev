import React from "react";
import { useState } from "react";
import { ReactComponent as Dropdown } from "../../icons/dropdown.svg";

function FilterType({ type }) {
  const [dropdown, setDropdown] = useState(false);
  function expandDeepDropdown() {
    if (type.type !== "Style" && type.type !== "Pattern") {
      return type.dropdownItems;
    }
    let excludedItems = [
      "plain",
      "print",
      "stripe",
      "embroidery",
      "colour block",
      "check",
      "graphic",
      "logo",
      "other",
      "slim"
    ];
    let dropItems = type.dropdownItems
      .map((elem) => {
        return Array.isArray(elem[type.type.toLowerCase()])
          ? [...elem[type.type.toLowerCase()]]
          : [];
      })
      .flat()
      .filter((elem) => {
        let element = elem.toLowerCase();
        return !excludedItems.includes(element);
      });
    return type.type === "Pattern"
      ? dropItems.concat(excludedItems.slice(0, excludedItems.length - 1))
      : dropItems.concat(excludedItems.slice(-2));
  }
  return (
    <div className="py-3 border-b-[1px] border-[#0000002f]">
      <div
        onClick={() => {
          setDropdown((prev) => {
            return !prev;
          });
        }}
        className="flex  justify-between cursor-pointer items-center"
      >
        <div className="text-md font-medium">{type.type}</div>
        <div>
          <Dropdown className="w-2.5 h-2.5"></Dropdown>
        </div>
      </div>
      <div className={`mt-1.5 ${dropdown ? "visible" : "hidden"}`}>
        {dropdown && Array.isArray(type.dropdownItems)
          ? expandDeepDropdown().map((elem) => {
              return (
                <div
                  className={`py-[4px] animplane capitalize font-regular text-sm cursor-pointer`}
                >
                  {elem}
                </div>
              );
            })
          : "ghgh"}
      </div>
    </div>
  );
}

export default FilterType;
