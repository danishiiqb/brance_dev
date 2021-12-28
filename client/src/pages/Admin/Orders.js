import React from "react";
import Search from "../../components/DashBoard/MainInfo/Search";
import OrderTableRow from "../../components/DashBoard/MainInfo/OrderTableRow";
import Filter from "../../components/DashBoard/MainInfo/Filter";
import PaginationBtns from "../../components/DashBoard/MainInfo/PaginationBtns";
import TableHeaderRow from "../../components/DashBoard/MainInfo/TableHeaderRow.js";
import { useState } from "react";

function Orders() {
  const [dateOrder, setDateOrder] = useState("desc");
  const [priceOrder, setPriceOrder] = useState("desc");
  const [statusBlock, setStatusBlock] = useState("desc");
  return (
    <div className="h-screen">
      <div className="bg-white shadow-sm_dark rounded-md mt-6 p-small">
        <div className="px-1.5 flex items-center justify-between">
          <Filter></Filter>
          <Search></Search>
        </div>
        <div className="">
          <div className="my-3">
            <table className="w-full">
              <TableHeaderRow
                headerList={[
                  "Order No",
                  "Name",
                  "Address",
                  { name: "Date", setter: setDateOrder, order: dateOrder },
                  { name: "Price", setter: setPriceOrder, order: priceOrder },
                  { name: "Status", setter: setStatusBlock, order: statusBlock }
                ]}
              ></TableHeaderRow>
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
          <PaginationBtns></PaginationBtns>
        </div>
      </div>
    </div>
  );
}

export default Orders;
