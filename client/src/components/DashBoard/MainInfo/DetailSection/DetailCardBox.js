import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import DetailCard from "./DetailCard";
import { FaBoxOpen, FaTruck, FaUsers } from "react-icons/fa";
function DetailCardBox() {
  const prInfo = [
    {
      name: "Total Revenue",
      icon: GiReceiveMoney,
      number: "$45,000"
    },
    { name: "Total Order", icon: FaTruck, number: "1,000" },
    {
      name: "Total Products",
      icon: FaBoxOpen,

      number: "3,500"
    },
    { name: "Today Visitors", icon: FaUsers, number: "12,000" }
  ];
  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        {prInfo.map((inf, key) => {
          return <DetailCard key={key} detail={inf}></DetailCard>;
        })}
      </div>
    </div>
  );
}

export default DetailCardBox;
