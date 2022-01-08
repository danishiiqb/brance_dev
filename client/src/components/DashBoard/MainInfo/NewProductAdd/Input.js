import React from "react";

function Input({ placeholder, id, type = "text" }) {
  return (
    <input
      type={type}
      className="block w-full border-gray-300 border-[.5px] focus:border-[#FF385C] mt-2 focus:outline-none transition-all duration-200 text-small rounded-md py-2 px-2"
      id={id}
      placeholder={placeholder}
    />
  );
}

export default Input;
