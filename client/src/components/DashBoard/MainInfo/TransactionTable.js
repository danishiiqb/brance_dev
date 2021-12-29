import React, { useState } from "react";
import Info from "./Info";
import TableData from "./Table/TableData";
import TableRow from "./Table/TableRow";

function TransactionTable({ Id, setActionWithId, tableData, type }) {
  function setAction(type) {
    setActionWithId({ type, Id });
  }
  return (
    <TableRow>
      <TableData>{tableData.transactionId}</TableData>
      <TableData>{tableData.amount}</TableData>
      <TableData>08/07/22, 16:05</TableData>
      <TableData>
        <div className="flex items-center space-x-2.5">
          <div>{tableData.method}</div>
        </div>
      </TableData>
      <TableData className="px-1.5 py-2.5">
        <Info clickedAction={setAction} type={type}></Info>
      </TableData>
    </TableRow>
  );
}

export default TransactionTable;
