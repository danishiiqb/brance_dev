import React, { useState } from "react";
import TableData from "./Table/TableData";
import TableRow from "./Table/TableRow";
import { BsThreeDots } from "react-icons/bs";
import Info from "./Info";

function ProductTableRow({ Id, setActionWithId, tableData, type }) {
  function setAction(type) {
    setActionWithId({ type, Id });
  }
  return (
    <TableRow>
      <TableData>
        <div className="flex items-center  space-x-3">
          <img
            className="w-12 h-12 object-cover rounded-md"
            src={tableData.img}
            alt=""
          />
          <div>{tableData.name}</div>
        </div>
      </TableData>
      <TableData>Hoodies & SweatShirts</TableData>
      <TableData>08/07/22</TableData>
      <TableData>{tableData.price}.00</TableData>
      <TableData>{tableData.inStock}</TableData>
      <TableData>{tableData.sold}</TableData>
      <TableData>
        <div className="font-medium">{tableData.revenue}.00</div>
      </TableData>
      <TableData className="px-1.5 py-2.5">
        <Info clickedAction={setAction} type={type}></Info>
      </TableData>
    </TableRow>
  );
}

export default ProductTableRow;
