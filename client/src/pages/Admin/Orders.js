import React from "react";
import Search from "../../components/DashBoard/MainInfo/Search";
import TableData from "../../components/DashBoard/MainInfo/TableData";
import TableHeader from "../../components/DashBoard/MainInfo/TableHeader";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Filter from "../../components/DashBoard/MainInfo/Filter";
function Orders() {
  return (
    <div className="h-screen">
      <div className="  bg-white shadow-sm_dark rounded-md mt-6 p-small">
        <div className="px-1.5 flex items-center justify-between">
          <Filter></Filter>
          <Search></Search>
        </div>
        <div className="">
          <div className="my-3">
            <table className="w-full">
              <TableHeader></TableHeader>
              <TableData
                orderData={{
                  orderId: "#45555",
                  user: "John will",
                  address: "Jameson Street Freeway",
                  date: "08/07/20",
                  amount: 789.0,
                  status: "pending"
                }}
              ></TableData>
              <TableData
                orderData={{
                  orderId: "#45555",
                  user: "John will",
                  address: "Jameson Street Freeway",
                  date: "08/07/20",
                  amount: 789.0,
                  status: "pending"
                }}
              ></TableData>{" "}
              <TableData
                orderData={{
                  orderId: "#45555",
                  user: "John will",
                  address: "Jameson Street Freeway",
                  date: "08/07/20",
                  amount: 789.0,
                  status: "pending"
                }}
              ></TableData>{" "}
              <TableData
                orderData={{
                  orderId: "#45555",
                  user: "John will",
                  address: "Jameson Street Freeway",
                  date: "08/07/20",
                  amount: 789.0,
                  status: "pending"
                }}
              ></TableData>{" "}
              <TableData
                orderData={{
                  orderId: "#45555",
                  user: "John will",
                  address: "Jameson Street Freeway",
                  date: "08/07/20",
                  amount: 789.0,
                  status: "pending"
                }}
              ></TableData>{" "}
              <TableData
                orderData={{
                  orderId: "#45555",
                  user: "John will",
                  address: "Jameson Street Freeway",
                  date: "08/07/20",
                  amount: 789.0,
                  status: "pending"
                }}
              ></TableData>{" "}
              <TableData
                orderData={{
                  orderId: "#45555",
                  user: "John will",
                  address: "Jameson Street Freeway",
                  date: "08/07/20",
                  amount: 789.0,
                  status: "pending"
                }}
              ></TableData>
            </table>
          </div>
          <div className="flex items-center justify-end cursor-pointer">
            <div className="w-8 hover:bg-gray-100 transition-all duration-150 flex items-center justify-center h-8 p-2 border-2  rounded-sm ">
              <IoIosArrowBack></IoIosArrowBack>
            </div>
            <div className="border-t-2  border-b-2 flex items-center justify-center font-regular p-2 w-8 h-8 text-xs">
              1
            </div>
            <div className=" p-2 w-8 flex hover:bg-gray-100 transition-all duration-150 items-center justify-center h-8 border-2  rounded-sm ">
              <IoIosArrowForward className="w-5 h-5"></IoIosArrowForward>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
