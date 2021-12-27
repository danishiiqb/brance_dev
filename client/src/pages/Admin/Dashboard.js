import React from "react";
import DetailCardBox from "../../components/DashBoard/MainInfo/DetailSection/DetailCardBox";
import Graph from "../../components/DashBoard/MainInfo/Graph";
import GrossingProduct from "../../components/DashBoard/MainInfo/GrossingProduct";
import LatestOrders from "../../components/DashBoard/MainInfo/LatestOrders";

function DashBoard() {
  return (
    <>
      <DetailCardBox></DetailCardBox>
      <div className="flex mt-6 space-x-6">
        <Graph></Graph>
        <GrossingProduct></GrossingProduct>
      </div>
      <LatestOrders></LatestOrders>
    </>
  );
}

export default DashBoard;
