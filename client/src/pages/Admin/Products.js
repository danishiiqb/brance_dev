import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/DashBoard/MainInfo/Filter";
import PaginationBtns from "../../components/DashBoard/MainInfo/PaginationBtns";
import ProductTableRow from "../../components/DashBoard/MainInfo/ProductTableRow";
import Search from "../../components/DashBoard/MainInfo/Search";
import TableHeaderRow from "../../components/DashBoard/MainInfo/TableHeaderRow";
import { getProductsData } from "../../store/products";
import { reset } from "../../store/tableHeaderSortingReducer";

function Products() {
  const { user, products } = useSelector((state) => {
    return { user: state.user, products: state.products };
  });
  console.log(products);
  function setActionWithId(obj) {
    console.log(obj);
  }
  const headerRowStates = useSelector((state) => {
    return state.tableHeaderSorting;
  });
  const dispatcher = useDispatch();

  useEffect(() => {
    if (user.user && user.user.type === "admin")
      dispatcher(getProductsData(user.user.uid));
  }, [dispatcher, user.user]);

  useEffect(() => {
    dispatcher(reset());
  }, [dispatcher]);
  return (
    <div className="h-screen">
      <div className="bg-white shadow-sm_dark rounded-md mt-6 p-small">
        <div className="px-1.5 flex items-center justify-between">
          <Filter type="products"></Filter>
          <Search></Search>
        </div>
        <table className="w-full my-3">
          <TableHeaderRow
            headerList={[
              "Product Name",
              "Category",
              {
                name: "Date",
                order: headerRowStates.date
              },
              {
                name: "Price",
                order: headerRowStates.price
              },
              {
                name: "Stock",
                order: headerRowStates.stock
              },
              {
                name: "Sold",
                order: headerRowStates.sold
              },
              {
                name: "Revenue",
                order: headerRowStates.revenue
              }
            ]}
          ></TableHeaderRow>
          {products.products.map((tableData, idx) => {
            return (
              <ProductTableRow
                setActionWithId={setActionWithId}
                type="products"
                key={idx}
                tableData={tableData}
              ></ProductTableRow>
            );
          })}
        </table>
        <PaginationBtns></PaginationBtns>
      </div>
    </div>
  );
}

export default Products;
