import React from "react";
import { IoImageOutline } from "react-icons/io5";

function ImageUploadBlock({ midSize }) {
  return (
    <div className={`relative ${midSize ? "h-1/2" : ""} cursor-pointer`}>
      <label
        htmlFor="img"
        className="absolute top-0 z-50 cursor-pointer left-0 w-full h-full"
      ></label>
      <div className=" w-widthImg h-full rounded-md  border-[.5px] border-[#FF385C] border-dashed bg-gray-50"></div>
      <div
        className={`text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max ${
          midSize ? "text-sm" : "text-small"
        }  text-center`}
      >
        <IoImageOutline
          className={`${midSize ? "w-6 h-6" : " w-7 h-7"} mb-1.5 inline-block`}
        ></IoImageOutline>
        <input type="file" id="img" className="hidden" />
        <div>Click to Browse</div>
      </div>
    </div>
  );
}

export default ImageUploadBlock;
