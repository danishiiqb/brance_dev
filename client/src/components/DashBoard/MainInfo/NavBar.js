import React from "react";
import { ReactComponent as Notification } from "../../../icons/notification.svg";
import { ReactComponent as Message } from "../../../icons/message1.svg";
import { AiOutlineCaretDown } from "react-icons/ai";
import Search from "./Search";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <div>
      <div className="flex justify-between items-center ">
        <div className="text-nav font-semibold  capitalize">
          {location.pathname.split("/")[2] === "settings"
            ? "Profile Setting"
            : location.pathname.split("/")[2]}
        </div>
        <div className="flex items-center text-[#4e4e4e] space-x-3">
          <Search section="nav"></Search>
          <div className="cursor-pointer group relative p-2.5 transition-all duration-300 hover:bg-[#ff385d23]">
            <Message className="w-6 group-hover:fill-[#ff385d]  group-hover:stroke-[#ff385d] transition-all stroke-[2px] stroke-[#4e4e4e] fill-[#4e4e4e00] h-6"></Message>
            <div className="text-xs rounded-full font-regular absolute top-1 left-5  text-center bg-[#ff385d] group-hover:bg-white group-hover:text-[#ff385d]   text-white w-4 h-4">
              3
            </div>
          </div>
          <div className="cursor-pointer group p-2.5 transition-all duration-200 hover:bg-[#ff385d23] ">
            <Notification className="w-6 group-hover:fill-[#ff385d] group-hover:stroke-[#ff385d] fill-[#4e4e4e00] stroke-[5px] stroke-[#4e4e4e] transition-all  h-6"></Notification>
          </div>
          <div className="cursor-pointer flex pl-2.5 items-center space-x-1 overflow-hidden">
            <img
              className="w-10 rounded-full border-2 transition-all duration-300  hover:border-[#ff385d] object-cover"
              src="https://d.newsweek.com/en/full/822411/pikachu-640x360-pokemon-anime.jpg?w=1600&h=1600&q=88&f=b65592079ef009b8b80897ddb8660b29"
              alt=""
            />
            <AiOutlineCaretDown></AiOutlineCaretDown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
