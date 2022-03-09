import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import OrderItem from "./OrderItem";

function WrapperOrders({ order }) {
  const [itemsOrdered, setitemsOrdered] = useState([]);
  useEffect(() => {
    async function getIndOrderedItem() {
      try {
        let collectedPromises = [];
        order.orderedItems.forEach((item) => {
          collectedPromises.push(
            getDoc(doc(db, "users", item.adId, "products", item.prId))
          );
        });
        let fulfilled = await Promise.all(collectedPromises);
        let docsData = fulfilled.map((doc, idx) => {
          return {
            orderedQty: order.orderedItems[idx].qt,
            orderStatus: order.orderedItems[idx].orderStatus,
            userOrderedName: order.orderedItems[idx].nm,
            id: doc.id,
            ...doc.data()
          };
        });
        setitemsOrdered(docsData);
      } catch (err) {}
    }
    getIndOrderedItem();
  }, []);
  return (
    <div className=" bg-gray-50 p-7">
      {itemsOrdered.map((item) => {
        return <OrderItem item={item}></OrderItem>;
      })}
      <div className="text-sm w-48 text-[#858585] justify-between flex space-x-1.5">
        <div className="">Ordered Amount</div>
        <div className="">
          ${(order.reciept.amount - order.reciept.amount_shipping).toFixed(2)}
        </div>
      </div>
      <div className="text-sm w-48 text-[#858585] justify-between flex space-x-1.5">
        <div>Shipping</div>
        <div>${order.reciept.amount_shipping}</div>
      </div>
      <div className="text-sm w-48 text-[#858585] justify-between flex space-x-1.5">
        <div>Total</div>
        <div>${order.reciept.amount}</div>
      </div>
    </div>
  );
}

export default WrapperOrders;
