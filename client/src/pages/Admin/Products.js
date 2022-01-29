import React, { useEffect } from "react";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
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
  const [currPage, setCurrPage] = useState(1);
  function setActionWithId(obj) {
    console.log(obj);
  }
  const headerRowStates = useSelector((state) => {
    return state.tableHeaderSorting;
  });
  const dispatcher = useDispatch();

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
    if (user.user && user.user.type === "admin")
      dispatcher(getProductsData(user.user.uid));
  }, [dispatcher, user.user]);

  useEffect(() => {
    dispatcher(reset());
  }, [dispatcher]);
  return (
    <div className={`h-panel `}>
      <div
        className={`bg-white  relative h-full shadow-sm_dark rounded-md mt-6 p-small`}
      >
        <div className="px-1.5 flex items-center justify-between">
          <Filter type="products"></Filter>
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
