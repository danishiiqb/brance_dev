import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/DashBoard/MainInfo/Filter";
import PaginationBtns from "../../components/DashBoard/MainInfo/PaginationBtns";
import ProductTableRow from "../../components/DashBoard/MainInfo/ProductTableRow";
import Search from "../../components/DashBoard/MainInfo/Search";
import TableHeaderRow from "../../components/DashBoard/MainInfo/TableHeaderRow";
import { reset } from "../../store/tableHeaderSortingReducer";

function Products() {
  const [data, setData] = useState([
    {
      name: "DESIGN oversized sweatshirt in white",
      img: "/img/product.png",
      category: "Jackets",
      price: "$56",
      revenue: "$3400",
      inStock: 67,
      sold: 34
    },
    {
      name: "Air Jordan 5 Retro",
      img: "/img/product.png",
      category: "Jackets",
      price: "$56",
      revenue: "$3400",
      inStock: 67,
      sold: 34
    },
    {
      name: "Air Jordan 5 Retro",
      img: "/img/product.png",
      category: "Jackets",
      price: "$56",
      revenue: "$3400",
      inStock: 67,
      sold: 34
    },
    {
      name: "Air Jordan 5 Retro",
      img: "/img/product.png",
      category: "Jackets",
      price: "$56",
      revenue: "$3400",
      inStock: 67,
      sold: 34
    },
    {
      name: "Air Jordan 5 Retro",
      img: "/img/product.png",
      category: "Jackets",
      price: "$56",
      revenue: "$3400",
      inStock: 67,
      sold: 34
    }
  ]);
  function setActionWithId(obj) {
    console.log(obj);
  }
  const headerRowStates = useSelector((state) => {
    return state.tableHeaderSorting;
  });
  const dispatcher = useDispatch();
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
          {data.map((tableData, idx) => {
            return (
              <ProductTableRow
                Id="678"
                setActionWithId={setActionWithId}
                type="transaction"
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
