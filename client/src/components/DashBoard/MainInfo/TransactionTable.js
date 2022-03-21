import React, { useState } from "react";
import Info from "./Info";
import TableData from "./Table/TableData";
import TableRow from "./Table/TableRow";

function TransactionTable({ filterByDate, setActionWithId, tableData, type }) {
  function setAction(type) {
    setActionWithId({ type });
  }

  return (
    <TableRow>
      <TableData>{tableData.transactionId}</TableData>
      <TableData>
        <div className=" capitalize">{tableData.name.toLowerCase()}</div>
      </TableData>
      <TableData>${tableData.amount}</TableData>
      <TableData>{tableData.date}</TableData>
      <TableData>
        <div className="flex items-center space-x-2.5">
          <div>{tableData.method}</div>
        </div>
      </TableData>
      <TableData>
        <div className=" capitalize">{tableData.payment}</div>
      </TableData>
      <TableData className="px-1.5 py-2.5">
        <Info clickedAction={setAction} type={type}></Info>
      </TableData>
    </TableRow>
  );
}

export default TransactionTable;
