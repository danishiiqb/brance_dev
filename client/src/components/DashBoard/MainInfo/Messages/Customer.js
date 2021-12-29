import React from "react";

function Customer({ customer }) {
  return (
    <div className="flex transition-all duration-300 hover:bg-[#FF385C] group hover:text-white cursor-pointer items-center p-4 first:rounded-t-md last:rounded-b-md border-gray-200 border-[.5px] border-b-0 last:border-b-[.5px] space-x-2.5">
      <div className="relative">
        <img
          src="/img/dashboard/profile.jpeg"
          className="w-11 rounded-full object-cover h-11"
          alt=""
        />
        <div className="w-3 h-3 top-0 left-0 absolute bg-red-400 border-2 border-white rounded-full"></div>
      </div>
      <div className="space-y-1">
        <div className="flex text-sm justify-between">
          <div>Jane Albert</div>
          <div>3:30 PM</div>
        </div>
        <div className="text-xs transition-all duration-300 group-hover:text-gray-50 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. ...
        </div>
      </div>
    </div>
  );
}

export default Customer;
