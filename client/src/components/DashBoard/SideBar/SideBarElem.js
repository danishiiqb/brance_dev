import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetProducts } from "../../../store/products";
import { resettableHeader } from "../../../store/tableHeaderSortingReducer";

function SideBarElem({ item, activatedElem, activate }) {
  const [hover, setHover] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        activate(item.name);
        dispatch(resetProducts());
        dispatch(resettableHeader());
        history.push(`/admin/${item.name.toLowerCase()}`);
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={`flex items-center py-2 space-x-3.5 relative
 after:h-full hover:after:opacity-100  after:bg-[#ff385d23] after:transition-all after:rounded-full after:duration-500 after:absolute ${
   activatedElem === item.name
     ? "text-[#FF385C] after:opacity-100  after:w-[271px]"
     : "after:opacity-0"
 } hover:text-[#FF385C] hover:after:w-[270px] after:w-[20px] after:-left-2/3 after:-z-1 z-20 cursor-pointer transition-all duration-200`}
    >
      {hover || activatedElem === item.name ? (
        <item.hover className="w-6 h-6 transition-all duration-75"></item.hover>
      ) : (
        <item.icon className="w-6 h-6"></item.icon>
      )}
      <div>{item.name}</div>
    </div>
  );
}

export default SideBarElem;
