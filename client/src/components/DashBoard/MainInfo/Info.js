import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
function Info({ type, clickedAction }) {
  const [info, showInfo] = useState(false);
  return (
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
          <div
            onClick={() => {
              clickedAction("View-Info");
            }}
            className="hover:bg-[#f5f5f5]  py-2 px-4 transition-all"
          >
            View Detail
          </div>
          {type !== "transaction" && (
            <div
              onClick={() => {
                clickedAction("Edit");
              }}
              className="hover:bg-[#f5f5f5]  py-2 px-4 transition-all"
            >
              Edit Info
            </div>
          )}
          <div
            onClick={() => {
              clickedAction("Delete");
            }}
            className="hover:bg-[#f5f5f5] text-[#ff385d]  py-2 px-4 transition-all"
          >
            Delete
          </div>
        </div>
      )}
    </div>
  );
}

export default Info;
