import React from "react";
import Search from "../../components/DashBoard/MainInfo/Search";
import PaginationBtns from "../../components/DashBoard/MainInfo/PaginationBtns";
import TableHeaderRow from "../../components/DashBoard/MainInfo/TableHeaderRow.js";
import TransactionTable from "../../components/DashBoard/MainInfo/TransactionTable";
import Filter from "../../components/DashBoard/MainInfo/Filter";
function Transactions() {
  function setActionWithId(obj) {
    console.log(obj);
  }
  return (
    <div className="h-screen">
      <div className="bg-white shadow-sm_dark rounded-md mt-6 p-small">
        <div className="px-1.5 flex items-center justify-between">
          <Filter type="transaction"></Filter>
          <Search></Search>
        </div>
        <table className="w-full my-3">
          <TableHeaderRow
            headerList={["Transaction ID", "Paid", "Date", "PayMent Method"]}
          ></TableHeaderRow>
          <TransactionTable
            Id="678"
            setActionWithId={setActionWithId}
            type="transaction"
            tableData={{
              transactionId: "#56668",
              amount: "$560.00",
              method: "Visa",
              img: ""
            }}
          ></TransactionTable>
        </table>
        <PaginationBtns></PaginationBtns>
      </div>
    </div>
  );
}

export default Transactions;
