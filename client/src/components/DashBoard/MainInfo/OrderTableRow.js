import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import TableData from "./Table/TableData";
import TableRow from "./Table/TableRow";

function OrderTableRow({ tableData }) {
  const [info, showInfo] = useState(false);
  return (
    <TableRow>
      <TableData>{tableData.orderId}</TableData>
      <TableData>{tableData.user}</TableData>
      <TableData>{tableData.address}</TableData>
      <TableData>{tableData.date}</TableData>
      <TableData>${tableData.amount}</TableData>
      <TableData>
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-200 flex-1 py-1.5 text-center text-sm font-semibold  rounded-lg">
            {tableData.status}
          </div>
        </div>
      </TableData>
      <TableData className="px-1.5 py-2.5">
        <div className="relative flex items-center justify-center">
          <BsThreeDots
            className="w-6 h-6"
            onClick={() => {
              showInfo((prev) => {
                return !prev;
              });
            }}
          ></BsThreeDots>
          {info && (
            <div className="z-50 absolute top-5 font-semibold overflow-hidden text-sm shadow-sm_dark rounded-md right-0 w-32 bg-white">
              <div className="hover:bg-[#f5f5f5]  py-2 px-4 transition-all">
                View Detail
              </div>
              <div className="hover:bg-[#f5f5f5]  py-2 px-4 transition-all">
                Edit Info
              </div>
              <div className="hover:bg-[#f5f5f5] text-[#ff385d]  py-2 px-4 transition-all">
                Delete
              </div>
            </div>
          )}
        </div>
      </TableData>
    </TableRow>
  );
}

export default OrderTableRow;
