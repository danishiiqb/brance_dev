import React from "react";
import Info from "./Info";
import Review from "./Review";
import TableData from "./Table/TableData";
import TableRow from "./Table/TableRow";

function ReviewsTableRow({
  tableData,
  setCommentReply,
  setActionWithId,
  type
}) {
  function setAction(type) {
    setActionWithId({ type, id: tableData.id });
  }
  function setReply(comment) {
    setCommentReply({ comment, id: tableData.id });
  }
  return (
    <TableRow>
      <TableData type={type}>
        <Review
          data={tableData}
          setAction={setAction}
          setReply={setReply}
        ></Review>
      </TableData>
      <TableData>
        <div className="flex space-x-2 duration-300 rounded-md ">
          <div className="w-14 h-14 rounded-md overflow-hidden">
            <img
              src={tableData.product.img}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-1 items-center justify-between">
            <div className="font-normal">
              <div className="font-normal  capitalize">
                {tableData.product.name}
              </div>
              <div className="text-sm text-[#4e4e4e] capitalize">
                {tableData.product.category}
              </div>
            </div>
          </div>
        </div>
      </TableData>
      <TableData className="px-1.5 py-2.5">
        <Info clickedAction={setAction} type={type}></Info>
      </TableData>
    </TableRow>
  );
}

export default ReviewsTableRow;
