import React, { useEffect } from "react";
import Search from "../../components/DashBoard/MainInfo/Search";
import OrderTableRow from "../../components/DashBoard/MainInfo/OrderTableRow";
import Filter from "../../components/DashBoard/MainInfo/Filter";
import PaginationBtns from "../../components/DashBoard/MainInfo/PaginationBtns";
import TableHeaderRow from "../../components/DashBoard/MainInfo/TableHeaderRow.js";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../store/tableHeaderSortingReducer";

function Orders() {
  const headerRowStates = useSelector((state) => {
    return state.tableHeaderSorting;
  });
  function setActionWithId(obj) {
    console.log(obj);
  }
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(reset());
  }, [dispatcher]);
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
                  {
                    name: "Date",
                    order: headerRowStates.date
                  },
                  {
                    name: "Price",
                    order: headerRowStates.price
                  },
                  {
                    name: "Status",
                    order: headerRowStates.status
                  }
                ]}
              ></TableHeaderRow>
              <OrderTableRow
                Id="678"
                setActionWithId={setActionWithId}
                type="order"
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
                Id="678"
                setActionWithId={setActionWithId}
                type="order"
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
                Id="678"
                setActionWithId={setActionWithId}
                type="order"
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
                Id="678"
                setActionWithId={setActionWithId}
                type="order"
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
                Id="678"
                setActionWithId={setActionWithId}
                type="order"
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
                Id="678"
                setActionWithId={setActionWithId}
                type="order"
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
                Id="678"
                setActionWithId={setActionWithId}
                type="order"
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
