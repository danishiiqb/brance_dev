import React from "react";

function TableData({ children }) {
  return (
    <td className="px-1.5 py-2.5 transition-all duration-150 group-hover:font-semibold">
      {children}
    </td>
  );
}

export default TableData;
