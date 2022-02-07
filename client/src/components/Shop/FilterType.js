import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { ReactComponent as Dropdown } from "../../icons/dropdown.svg";

function FilterType({ type }) {
  const [dropdown, setDropdown] = useState(false);
  const [showMore, setShowMore] = useState(false);
  let show = useRef(false);
  function expandDeepDropdown() {
    if (type.type !== "Style" && type.type !== "Pattern") {
      return type.dropdownItems;
    }
    let excludedItems = [
      "plain",
      "print",
      "stripe",
      "floral",
      "embroidery",
      "colour block",
      "check",
      "graphic",
      "logo",
      "other",
      "slim",
      "regular",
      "relaxed"
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
    let modifiedDropItems =
      type.type === "Pattern"
        ? dropItems.concat(excludedItems.slice(0, excludedItems.length - 3))
        : dropItems.concat(excludedItems.slice(-3));
    if (modifiedDropItems.length > 12) {
      show.current = true;
    }
    return modifiedDropItems.length > 12 && !showMore
      ? modifiedDropItems.slice(0, 13)
      : modifiedDropItems;
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
        {dropdown && show.current && (
          <div
            onClick={() => {
              setShowMore((prev) => {
                return !prev;
              });
            }}
            className="cursor-pointer py-[4px] font-medium text-sm"
          >
            {!showMore ? "Show More" : "Show Less"}
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterType;
