import React from "react";
import Info from "./Info";
import TableData from "./Table/TableData";
import TableRow from "./Table/TableRow";

function OrderTableRow({ Id, setActionWithId, tableData, type }) {
  function setAction(type) {
    setActionWithId({ type, Id });
  }
  return (
    <TableRow>
      <TableData>{tableData.orderId}</TableData>
      <TableData>{tableData.user}</TableData>
      <TableData>{tableData.address}</TableData>
      <TableData>{tableData.date}</TableData>
      <TableData>
        <div className="font-medium">${tableData.amount}.00</div>
      </TableData>
      <TableData>
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-200 flex-1 py-1.5 text-center text-sm font-semibold  rounded-lg">
            {tableData.status}
          </div>
        </div>
      </TableData>
      <TableData className="px-1.5 py-2.5">
        <Info clickedAction={setAction} type={type}></Info>
      </TableData>
    </TableRow>
  );
}

export default OrderTableRow;
