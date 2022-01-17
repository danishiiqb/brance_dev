import React, { useState } from "react";
import { ReactComponent as Search } from "../icons/search.svg";
import { ReactComponent as Menu } from "../icons/menu.svg";
import {
  RiHeartFill,
  RiHeartLine,
  RiUser3Fill,
  RiUser3Line
} from "react-icons/ri";
import { IoCart, IoCartOutline } from "react-icons/io5";
import useWindow from "../hooks/useWindow";
import Icons from "./Icons";
import { useDispatch } from "react-redux";
import { openModal } from "../store/modal";

function Nav({ items, openSide, selectTab }) {
  const [width] = useWindow();
  const [dropDown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const triggerDropDown = () => {
    setDropdown((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <nav className="flex items-center px-4 lg:px-11 py-3 lg:py-6 shadow-md justify-between relative">
        <ul className="flex  space-x-5 lg:space-x-10  font-medium text-xs lg:text-base cursor-pointer">
          {width > 700 ? (
            items.map((item, idx) => {
              return (
                <li
                  className="hover-list"
                  onClick={(e) => {
                    openSide(true);
                    selectTab(item);
                  }}
                  key={idx}
                >
                  {item}
                </li>
              );
            })
          ) : (
            <li>
              <Menu
                onClick={() => {
                  openSide(true);
                  selectTab("Men");
                }}
                className="w-4 h-4  cursor-pointer "
              ></Menu>
            </li>
          )}
        </ul>
        <img
          className={`w-14 lg:w-40 m-auto cursor-pointer absolute top-1/2  left-1/2  transform -translate-x-1/2 -translate-y-1/2`}
          src="./logo.png"
          alt=""
        />
        <div className="">
          <ul className="flex items-center space-x-4 lg:space-x-10 ">
            <li className="flex items-center before:absolute before:border-b-2  hover:before:opacity-100 before:-bottom-1 before:w-7 before:opacity-0  before:transition-all before:duration-300 hover:before:w-full  cursor-pointer before:border-[#FF385C] relative">
              <Search className="w-3.5 h-3.5 lg:w-5 lg:h-5 -mr-5"></Search>
              <input
                className={` placeholder-gray-300 text-[8px] lg:text-lg  font-regular pl-6 lg:pl-7 top-10  outline-none bg-transparent `}
                type="text"
                name="search"
                placeholder="Search Products"
                id=""
              />
            </li>
            <div className="relative">
              <Icons
                filledicon={RiUser3Fill}
                openDropDown={triggerDropDown}
                icon={RiUser3Line}
              ></Icons>
              {dropDown && (
                <div className="z-50 absolute w-max  font-semibold overflow-hidden text-sm  left-0 shadow-sm_dark rounded-md top-8  bg-white">
                  <div
                    onClick={() => {
                      dispatch(openModal(false));
                      triggerDropDown();
                    }}
                    className="hover:bg-[#f5f5f5] cursor-pointer  py-2 px-4 transition-all"
                  >
                    SignIn/SignUp User
                  </div>
                  <div
                    onClick={() => {
                      dispatch(openModal(true));
                      triggerDropDown();
                    }}
                    className="hover:bg-[#f5f5f5] cursor-pointer  py-2 px-4 transition-all"
                  >
                    SignUp Admin
                  </div>
                </div>
              )}
            </div>

            <Icons filledicon={RiHeartFill} icon={RiHeartLine}></Icons>
            <Icons filledicon={IoCart} icon={IoCartOutline}></Icons>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
