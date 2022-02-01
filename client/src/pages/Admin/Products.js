import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/DashBoard/MainInfo/Filter";
import PaginationBtns from "../../components/DashBoard/MainInfo/PaginationBtns";
import ProductTableRow from "../../components/DashBoard/MainInfo/ProductTableRow";
import Search from "../../components/DashBoard/MainInfo/Search";
import TableHeaderRow from "../../components/DashBoard/MainInfo/TableHeaderRow";
import { filterCategory } from "../../store/filteredData";
import {
  getProductsData,
  resetProducts,
  updateProduct
} from "../../store/products";
import {
  resettableHeader,
  sortByType
} from "../../store/tableHeaderSortingReducer";

function Products() {
  const { user, products, tableHeaderSorting, filteredData } = useSelector(
    (state) => {
      return {
        user: state.user,
        filteredData: state.filteredData,
        products: state.products,
        tableHeaderSorting: state.tableHeaderSorting
      };
    }
  );
  const referProducts = useRef(null);
  const dispatcher = useDispatch();

  const [currPage, setCurrPage] = useState(1);

  function setActionWithId(obj) {
    console.log(obj);
  }

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

  useEffect(() => {
    return () => {
      dispatcher(resettableHeader());
      dispatcher(resetProducts());
    };
  }, [dispatcher]);

  useEffect(() => {
    if (tableHeaderSorting.modifiedArr.length > 0) {
      dispatcher(updateProduct(tableHeaderSorting.modifiedArr));
    }
  }, [tableHeaderSorting, dispatcher]);

  useEffect(() => {
    if (tableHeaderSorting.sortElemName && tableHeaderSorting.order) {
      dispatcher(
        sortByType(
          products.products,
          tableHeaderSorting.sortElemName.toUpperCase()
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableHeaderSorting.order, tableHeaderSorting.sortElemName, dispatcher]);

  useEffect(() => {
    if (user.user && user.user.type === "admin")
      dispatcher(getProductsData(user.user.uid));
  }, [dispatcher, user.user]);
  useEffect(() => {
    if (products.products.length > 0 && !referProducts.current) {
      referProducts.current = [...products.products];
    }
  }, [products]);

  useEffect(() => {
    if (filteredData.length > 0) {
      dispatcher(updateProduct(filteredData));
    }
  }, [filteredData, dispatcher]);

  function filterByDate(start, end) {
    // dispatcher()
  }

  function filterByCategory(type) {
    dispatcher(filterCategory({ type, elementsArr: referProducts.current }));
  }
  return (
    <div className={`h-panel `}>
      <div
        className={`bg-white  relative  h-full shadow-sm_dark rounded-md mt-6 p-small`}
      >
        <div className="px-1.5 flex items-center justify-between">
          <Filter
            filterByDate={filterByDate}
            filterByCategory={filterByCategory}
            type="products"
          ></Filter>
          <Search></Search>
        </div>

        {products.products.length > 0 ? (
          <table className="w-full my-3 ">
            <thead>
              <TableHeaderRow
                headerList={[
                  "Product Name",
                  "Category",
                  {
                    name: "Date"
                  },
                  {
                    name: "Price"
                  },
                  {
                    name: "Stock"
                  },
                  {
                    name: "Sold"
                  },
                  {
                    name: "Revenue"
                  }
                ]}
              ></TableHeaderRow>
            </thead>
            <tbody>
              {pagination(currPage).map((tableData, idx) => {
                return (
                  <ProductTableRow
                    setActionWithId={setActionWithId}
                    type="products"
                    key={idx}
                    tableData={tableData}
                  ></ProductTableRow>
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

        <PaginationBtns
          forwardDisable={8 * currPage >= products.products.length}
          backBtn={currPage === 1 ? true : false}
          currPage={currPage}
          navigate={navigate}
        ></PaginationBtns>
      </div>
    </div>
  );
}

export default Products;
