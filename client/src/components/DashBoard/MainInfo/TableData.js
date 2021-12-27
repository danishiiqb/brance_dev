import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
function TableData({ orderData }) {
  const [info, showInfo] = useState(false);
  return (
    <tr className="hover:bg-[#f5f5f5] text-small last:border-b-0 group  border-b-2 border-[#f8f8f8] transition-all rounded-md cursor-pointer">
      <td className="px-1.5 py-2.5 group-hover:font-semibold">
        {orderData.orderId}
      </td>
      <td className="px-1.5 py-2.5 group-hover:font-semibold">
        {orderData.user}
      </td>
      <td className="px-1.5 py-2.5 group-hover:font-semibold">
        {orderData.address}
      </td>
      <td className="px-1.5 py-2.5 group-hover:font-semibold">
        {orderData.date}
      </td>
      <td className="px-1.5 py-2.5 group-hover:font-semibold">
        ${orderData.amount}
      </td>
      <td className="px-1.5 py-2.5">
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-200 flex-1 py-1.5 text-center text-sm font-semibold  rounded-lg">
            {orderData.status}
          </div>
          <div className="relative">
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
        </div>
      </td>
    </tr>
  );
}

export default TableData;
