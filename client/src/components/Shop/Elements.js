import React, { useState } from "react";
import { useEffect } from "react";

function Elements({ children, notifyParent }) {
  const [clickedVal, setClicked] = useState(false);
  return (
    <div
      onClick={() => {
        setClicked((prev) => {
          return !prev;
        });
        notifyParent(children);
      }}
      className={`py-[4px] ${
        clickedVal ? "text-[#FF385C]" : "text-[#000000]"
      } animplane capitalize font-regular text-sm cursor-pointer`}
    >
      {children}
    </div>
  );
}

export default Elements;
