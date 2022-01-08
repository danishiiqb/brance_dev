import React from "react";
function WrapperDropdown({ title, children }) {
  return (
    <>
      <div className="font-medium text-small">{title}</div>
      {children}
    </>
  );
}

export default WrapperDropdown;
