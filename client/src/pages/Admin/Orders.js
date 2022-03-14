import React, { useEffect, useRef, useState } from "react";
import Search from "../../components/DashBoard/MainInfo/Search";
import { ImSpinner2 } from "react-icons/im";
import Filter from "../../components/DashBoard/MainInfo/Filter";
import PaginationBtns from "../../components/DashBoard/MainInfo/PaginationBtns";
import TableHeaderRow from "../../components/DashBoard/MainInfo/TableHeaderRow.js";
import { useDispatch, useSelector } from "react-redux";
import { sortByType } from "../../store/tableHeaderSortingReducer";
import { getProductsData, updateProduct } from "../../store/products";
import WrapperOrderTableRow from "../../components/DashBoard/MainInfo/WrapperOrderTableRow";

function Orders() {
  const { user, products, tableHeaderSorting } = useSelector((state) => {
    return {
      user: state.user,
      products: state.products,
      tableHeaderSorting: state.tableHeaderSorting
    };
  });
  const [currPage, setCurrPage] = useState(1);
  function navigate(type) {
    setCurrPage((prev) => {
      return type === "forward" ? prev + 1 : prev - 1;
    });
  }

  function pagination(page) {
    let start = (page - 1) * 8;
    let end = 8 * page;
    return products.products.slice(start, end);
  }
  const dispatcher = useDispatch();

  function setActionWithId(obj) {
    console.log(obj);
  }

  useEffect(() => {
    if (tableHeaderSorting.modifiedArr.length > 0) {
      dispatcher(updateProduct(tableHeaderSorting.modifiedArr));
    }
  }, [tableHeaderSorting.modifiedArr, dispatcher]);
  useEffect(() => {
    if (tableHeaderSorting.order) {
      dispatcher(
        sortByType(
          products.products,
          tableHeaderSorting.sortElemName.toUpperCase()
        )
      );
    }
  }, [tableHeaderSorting.sortElemName, tableHeaderSorting.order, dispatcher]);

  useEffect(() => {
    if (user.user) {
      dispatcher(getProductsData(user.user.uid, "incomingOrders"));
    }
  }, [user.user, dispatcher]);

  return (
    <div className={`h-panel`}>
      <div
        className={`bg-white  relative  h-[86%] shadow-sm_dark rounded-md mt-6 p-small`}
      >
        <div className="px-1.5 flex items-center justify-between">
          <Filter></Filter>
          <Search></Search>
        </div>
        {products.products.length > 0 ? (
          <table className="w-full my-3">
            <TableHeaderRow
              headerList={[
                "Order No",
                "Name",
                "Product",
                "Address",
                {
                  name: "Date"
                },
                {
                  name: "Price"
                },
                "Status"
              ]}
            ></TableHeaderRow>
            {pagination(currPage).map((order) => {
              return (
                <WrapperOrderTableRow
                  key={order.id}
                  setActionWithId={setActionWithId}
                  type="order"
                  tableData={order}
                ></WrapperOrderTableRow>
              );
            })}
          </table>
        ) : products.message !== "" ? (
          <div className="flex absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div className="text-[#FF385C]">{products.message}</div>
          </div>
        ) : (
          <div className="flex absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <ImSpinner2 className="animate-spin fill-current text-[#FF385C] w-16 h-16"></ImSpinner2>
          </div>
        )}

        <div>
          <PaginationBtns
            forwardDisable={8 * currPage >= products.products.length}
            backBtn={currPage === 1 ? true : false}
            currPage={currPage}
            navigate={navigate}
          ></PaginationBtns>
        </div>
      </div>
    </div>
  );
}

export default Orders;
