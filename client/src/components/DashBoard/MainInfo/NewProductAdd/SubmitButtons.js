import React from "react";

function SubmitButtons() {
  return (
    <div className="mt-4  absolute bottom-[17.28px] right-[17.28px] space-x-3">
      <button className="bg-[#FF385C] hover:shadow-sm_dark  transition-all duration-300 text-small border-[#FF385C] border-[.5px] font-medium text-white p-2 px-3 rounded-sm">
        Add Product
      </button>
      <button className="border-[#FF385C] border-[.5px] hover:shadow-sm_dark  transition-all duration-300 text-small text-[#FF385C] font-medium  p-2 px-3 rounded-sm">
        Save Product
      </button>
    </div>
  );
}

export default SubmitButtons;
