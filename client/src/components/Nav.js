import React from "react";
import { ReactComponent as Heart } from "../icons/heart.svg";
import { ReactComponent as Cart } from "../icons/cart.svg";
import { ReactComponent as User } from "../icons/user.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import { ReactComponent as Menu } from "../icons/menu.svg";
import useWindow from "../hooks/useWindow";

function Nav({ items, openSide, selectTab }) {
    const [width] = useWindow()
    return (
        <nav className="flex items-center px-4 lg:px-11 py-3 lg:py-6 shadow-md justify-between relative">
            <ul className="flex  space-x-5 lg:space-x-10  font-medium text-xs lg:text-base cursor-pointer">
                {width > 700 ? items.map((item, idx) => {
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
                }) : <li>
                    <Menu onClick={() => {
                        openSide(true)
                        selectTab("Men")
                    }} className="w-4 h-4  cursor-pointer "></Menu>
                </li>}
            </ul>
            <img
                className={`w-14 lg:w-40 m-auto cursor-pointer absolute top-1/2  left-1/2  transform -translate-x-1/2 -translate-y-1/2`}
                src="./logo.png"
                alt=""
            />
            <div className="">
                <ul className="flex items-center space-x-4 lg:space-x-10 ">
                    <li className="flex items-center before:absolute before:border-b-2  hover:before:opacity-100 before:-bottom-1 before:w-7 before:opacity-0  before:transition-all before:duration-300 hover:before:w-full  cursor-pointer before:border-[#FF385C] relative">

                        <Search className="w-2.5 h-2.5 lg:w-5 lg:h-5 -mr-5"></Search>
                        <input
                            className={` placeholder-gray-300 text-[8px] lg:text-lg  font-regular pl-6 lg:pl-7 top-10  outline-none bg-transparent `}
                            type="text"
                            name="search"
                            placeholder="Search Products"
                            id=""
                        />
                    </li>
                    <li>
                        <User className="w-3 h-3 lg:w-7 lg:h-7  cursor-pointer "></User>
                    </li>
                    <li>
                        <Heart className="w-2.5 h-2.5 lg:w-6 lg:h-6  cursor-pointer "></Heart>
                    </li>
                    <li>
                        <Cart className="w-3 h-3 lg:w-7 lg:h-7  cursor-pointer "></Cart>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
