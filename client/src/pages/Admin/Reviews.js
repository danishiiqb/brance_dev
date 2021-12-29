import React from "react";
import Filter from "../../components/DashBoard/MainInfo/Filter";
import PaginationBtns from "../../components/DashBoard/MainInfo/PaginationBtns";
import Search from "../../components/DashBoard/MainInfo/Search";
import TableHeaderRow from "../../components/DashBoard/MainInfo/TableHeaderRow";

function Reviews() {
  return (
    <div className="h-screen">
      <div className="bg-white shadow-sm_dark rounded-md mt-6 p-small">
        <div className="px-1.5 flex items-center justify-between">
          <Filter type="products"></Filter>
          <Search></Search>
        </div>
        <table className="w-full my-3">
          <TableHeaderRow
            headerList={["Comments", "Products"]}
          ></TableHeaderRow>
          {/* {data.map((tableData, idx) => {
            return (
              <ProductTableRow
                Id="678"
                setActionWithId={setActionWithId}
                type="transaction"
                key={idx}
                tableData={tableData}
              ></ProductTableRow>
            );
          })} */}
        </table>
        <PaginationBtns></PaginationBtns>
      </div>
    </div>
  );
}

export default Reviews;
