import React from "react";
import { FaPen } from "react-icons/fa";
function EditInputField({ label, value }) {
  return (
    <div
      className={`flex justify-between items-center ${
        label === "Address" ? "col-span-2" : ""
      }`}
    >
      <div className="text-sm space-y-[4px]">
        <div>{label}</div>
        <div className="text-base font-medium">{value}</div>
      </div>
      <FaPen className="w-3 text-[#4e4e4e81] cursor-pointer h-3"></FaPen>
    </div>
  );
}

export default EditInputField;
