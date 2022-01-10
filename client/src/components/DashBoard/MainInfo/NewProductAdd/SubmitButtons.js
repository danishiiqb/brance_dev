import React, { useEffect, useState } from "react";

function SubmitButtons({ formData }) {
  const [save, setSave] = useState(false);
  useEffect(() => {
    if (save) {
      if (formData.images.length > 0 && formData.formData && formData.desc) {
        localStorage.setItem(
          "savedProduct",
          JSON.stringify({ formData: formData.formData, desc: formData.desc })
        );
      }
      setSave(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [save]);

  return (
    <div className="mt-4  absolute bottom-[17.28px] right-[17.28px] space-x-3">
      <button
        onClick={() => {}}
        className="bg-[#FF385C] hover:shadow-sm_dark  transition-all duration-300 text-small border-[#FF385C] border-[.5px] font-medium text-white p-2 px-3 rounded-sm"
      >
        Add Product
      </button>
      <button
        className="border-[#FF385C] border-[.5px] hover:shadow-sm_dark  transition-all duration-300 text-small text-[#FF385C] font-medium  p-2 px-3 rounded-sm"
        onClick={() => {
          setSave(true);
        }}
      >
        Save Product
      </button>
    </div>
  );
}

export default SubmitButtons;
