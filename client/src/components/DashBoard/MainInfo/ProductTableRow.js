import React, { useState } from "react";
import TableData from "./Table/TableData";
import TableRow from "./Table/TableRow";
import { BsThreeDots } from "react-icons/bs";

function ProductTableRow({ tableData }) {
  const [info, showInfo] = useState(false);
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
      <TableData>{tableData.revenue}.00</TableData>
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

export default ProductTableRow;
