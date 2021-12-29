import React from "react";
import Customer from "../../components/DashBoard/MainInfo/Messages/Customer";
import MessageBox from "../../components/DashBoard/MainInfo/Messages/MessageBox";
import Search from "../../components/DashBoard/MainInfo/Search";

function Customers() {
  return (
    <div className="h-panel">
      <div className="bg-white space-x-6 h-full flex shadow-sm_dark rounded-md mt-6 p-small">
        <div className="">
          <div>
            <div className="px-2.5">
              <Search></Search>
            </div>
            <div className="mt-6">
              <Customer customer={{ id: 0 }}></Customer>
              <Customer customer={{ id: 1 }}></Customer>
              <Customer customer={{ id: 2 }}></Customer>
              <Customer customer={{ id: 3 }}></Customer>
              <Customer customer={{ id: 4 }}></Customer>
            </div>
          </div>
        </div>
        <MessageBox></MessageBox>
      </div>
    </div>
  );
}

export default Customers;
