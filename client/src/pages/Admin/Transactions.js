import React, { useEffect, useRef, useState } from "react";
import Search from "../../components/DashBoard/MainInfo/Search";
import PaginationBtns from "../../components/DashBoard/MainInfo/PaginationBtns";
import TableHeaderRow from "../../components/DashBoard/MainInfo/TableHeaderRow.js";
import TransactionTable from "../../components/DashBoard/MainInfo/TransactionTable";
import Filter from "../../components/DashBoard/MainInfo/Filter";
import { getProductsData, updateProduct } from "../../store/products";
import { useDispatch, useSelector } from "react-redux";
import { ImSpinner2 } from "react-icons/im";
import { filterDate } from "../../store/filteredData";

function Transactions() {
  const dispatcher = useDispatch();
  const productsArr = useRef(null);
  const [currPage, setCurrPage] = useState(1);
  const { user, products, filteredData } = useSelector((state) => {
    return {
      user: state.user,
      products: state.products,
      filteredData: state.filteredData
    };
  });
  function pagination(page) {
    let start = (page - 1) * 10;
    let end = 10 * page;
    return products.products.slice(start, end);
  }

  function filterByDate(start, end) {
    dispatcher(
      filterDate({
        start,
        end,
        elementsArr: productsArr.current,
        typeDta: "orders"
      })
    );
  }
  useEffect(() => {
    if (productsArr.current && filteredData.length > 0) {
      dispatcher(updateProduct(filteredData));
      setCurrPage(1);
      return;
    }
    if (
      !Array.isArray(filteredData) &&
      filteredData !== null &&
      typeof filteredData === "object"
    ) {
      dispatcher(updateProduct(productsArr.current));
      setCurrPage(1);
      return;
    }
    if (filteredData.length === 0 && productsArr.current) {
      dispatcher({ type: "ERROR", payload: "No Products found" });
      return;
    }
  }, [filteredData, dispatcher]);

  useEffect(() => {
    if (products.products.length > 0 && !productsArr.current) {
      productsArr.current = [...products.products];
    }
  }, [products.products]);

  function convertDate(sec) {
    let date = new Date(sec * 1000);
    return `${date.getDate()}/${
      date.getMonth() + 1 > 9
        ? `${date.getMonth() + 1}`
        : `0${date.getMonth() + 1}`
    }/${date.getFullYear()}`;
  }

  function navigate(type) {
    setCurrPage((prev) => {
      return type === "forward" ? prev + 1 : prev - 1;
    });
  }
  function shortenTitle(title) {
    if (title.length > 24) {
      return `${title.substr(0, 25)}..`.toLowerCase();
    }
    return title.toLowerCase();
  }
  useEffect(() => {
    if (user.user) {
      dispatcher(getProductsData(user.user.uid, "incomingOrders"));
    }
  }, [user.user, dispatcher]);
  return (
    <div className={`h-panel  relative`}>
      <div
        className={`bg-white flex-1  relative  h-full shadow-sm_dark rounded-md mt-6 p-small`}
      >
        <div className="px-1.5 flex items-center justify-between">
          <Filter filterByDate={filterByDate} type="transaction"></Filter>
          <Search></Search>
        </div>
        <table className="w-full my-3">
          {products.products.length > 0 ? (
            <table className="w-full my-3">
              <thead>
                <TableHeaderRow
                  headerList={[
                    "Transaction ID",
                    "Product",
                    "Payment",
                    "Date",
                    "PayMent Method",
                    "PayMent Status"
                  ]}
                ></TableHeaderRow>
              </thead>
              <tbody>
                {pagination(currPage).map((transaction) => {
                  if (transaction.status !== "Delivered") {
                    return null;
                  }
                  return (
                    <TransactionTable
                      type="transaction"
                      tableData={{
                        transactionId: transaction.id.split("-").reverse()[0],
                        name: shortenTitle(transaction.details.title),
                        amount: (
                          transaction.qty * transaction.details.prize
                        ).toFixed(2),
                        method: "Visa",
                        payment: transaction.payment_status,
                        date: convertDate(transaction.timestamp.seconds)
                      }}
                    ></TransactionTable>
                  );
                })}
              </tbody>
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
              forwardDisable={10 * currPage >= products.products.length}
              backBtn={currPage === 1 ? true : false}
              currPage={currPage}
              navigate={navigate}
            ></PaginationBtns>
          </div>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
