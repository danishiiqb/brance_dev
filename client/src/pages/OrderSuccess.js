import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WrapperOrders from "../components/OrderSucces/WrapperOrders";
import { db } from "../services/firebase";

function OrderSuccess() {
  const { user } = useSelector((state) => {
    return state.user;
  });
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      let results = await getDocs(collection(db, "users", user.uid, "orders"));
      let resultedDocs = [];
      results.forEach((doc) => {
        resultedDocs.push({ id: doc.id, ...doc.data() });
      });

      setOrders(
        resultedDocs.sort((a, b) => {
          return b.timestamp.seconds - a.timestamp.seconds;
        })
      );
    }
    if (user) getOrders();
  }, [user]);

  return (
    <div className="my-8 px-11">
      <div className=" mb-4  text-xl font-medium ">My Orders</div>
      <div className=" space-y-7">
        {orders.map((order) => {
          return <WrapperOrders order={order}></WrapperOrders>;
        })}
      </div>
    </div>
  );
}

export default OrderSuccess;
