import React from "react";
import { BsArrowRight } from "react-icons/bs";
import OrderTableHeader from "./OrderTableHeader";
import OrderTableRow from "./OrderTableRow";

function LatestOrders() {
  return (
    <div className="bg-white  shadow-sm_dark rounded-md mt-6 p-small">
      <div className="flex items-center px-1.5  justify-between">
        <h3 className="font-medium text-lg">Latest Orders</h3>
        <div className="text-sm cursor-pointer hover:text-[#ff385d] transition-all duration-300 group flex items-center space-x-1">
          <span>View All</span>
          <BsArrowRight className="relative group-hover:left-[1.5px]"></BsArrowRight>
        </div>
      </div>
      <div className="mt-3">
        <table className="w-full">
          <OrderTableHeader></OrderTableHeader>
          <OrderTableRow
            tableData={{
              orderId: "#45555",
              user: "John will",
              address: "Jameson Street Freeway",
              date: "08/07/20",
              amount: 789.0,
              status: "pending"
            }}
          ></OrderTableRow>
          <OrderTableRow
            tableData={{
              orderId: "#45555",
              user: "John will",
              address: "Jameson Street Freeway",
              date: "08/07/20",
              amount: 789.0,
              status: "pending"
            }}
          ></OrderTableRow>{" "}
          <OrderTableRow
            tableData={{
              orderId: "#45555",
              user: "John will",
              address: "Jameson Street Freeway",
              date: "08/07/20",
              amount: 789.0,
              status: "pending"
            }}
          ></OrderTableRow>{" "}
          <OrderTableRow
            tableData={{
              orderId: "#45555",
              user: "John will",
              address: "Jameson Street Freeway",
              date: "08/07/20",
              amount: 789.0,
              status: "pending"
            }}
          ></OrderTableRow>{" "}
          <OrderTableRow
            tableData={{
              orderId: "#45555",
              user: "John will",
              address: "Jameson Street Freeway",
              date: "08/07/20",
              amount: 789.0,
              status: "pending"
            }}
          ></OrderTableRow>{" "}
          <OrderTableRow
            tableData={{
              orderId: "#45555",
              user: "John will",
              address: "Jameson Street Freeway",
              date: "08/07/20",
              amount: 789.0,
              status: "pending"
            }}
          ></OrderTableRow>{" "}
          <OrderTableRow
            tableData={{
              orderId: "#45555",
              user: "John will",
              address: "Jameson Street Freeway",
              date: "08/07/20",
              amount: 789.0,
              status: "pending"
            }}
          ></OrderTableRow>
        </table>
      </div>
    </div>
  );
}

export default LatestOrders;
