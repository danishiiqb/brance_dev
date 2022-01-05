import React from "react";
import { FiUploadCloud } from "react-icons/fi";

function EditPhoto() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <img
        src="/img/dashboard/dummypic.jpg"
        className="w-52 rounded-full object-cover"
        alt=""
      />
      <button className="flex space-x-1.5 items-center rounded-sm text-[#FF385C] p-1 px-3 border-[.5px] border-[#FF385C]">
        <FiUploadCloud></FiUploadCloud>
        <span>Edit</span>
      </button>
    </div>
  );
}

export default EditPhoto;
