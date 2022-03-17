import React from "react";
import Info from "./Info";
import TableData from "./Table/TableData";
import TableRow from "./Table/TableRow";

function OrderTableRow({ Id, setActionWithId, edit, detailedItem, type }) {
  function setAction(type) {
    setActionWithId({ type, Id });
  }
  function convertDate(sec) {
    let date = new Date(sec * 1000);
    return `${date.getDate()}/${
      date.getMonth() + 1 > 9
        ? `${date.getMonth() + 1}`
        : `0${date.getMonth() + 1}`
    }/${date.getFullYear()}`;
  }
  function shortenTitle(title) {
    if (title.length > 24) {
      return `${title.substr(0, 25)}..`.toLowerCase();
    }
    return title.toLowerCase();
  }

  return (
    <TableRow>
      <TableData>{detailedItem.id.split("-")[0]}</TableData>
      <TableData>{detailedItem.name}</TableData>
      <TableData>
        <span className=" capitalize ">
          {shortenTitle(detailedItem.details.title.toLowerCase())}
        </span>{" "}
      </TableData>
      <TableData>
        {detailedItem.shipping.line1 || detailedItem.shipping.line2}
      </TableData>
      <TableData>{convertDate(detailedItem.timestamp.seconds)}</TableData>
      <TableData>${detailedItem.prize.toFixed(2)}</TableData>
      <TableData>
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-200 flex-1 py-1.5 text-center text-sm font-semibold  rounded-lg">
            {detailedItem.status}
          </div>
        </div>
      </TableData>
      <TableData className="px-1.5 py-2.5">
        <Info setEditPhase={edit} clickedAction={setAction} type={type}></Info>
      </TableData>
    </TableRow>
  );
}

export default OrderTableRow;
