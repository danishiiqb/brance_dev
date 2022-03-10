import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import WrapperOrders from "../components/OrderSucces/WrapperOrders";
import { db } from "../services/firebase";

function OrderCompleted() {
  const { user } = useSelector((state) => state.user);
  const [compOrder, setCompOrder] = useState("");
  const divBox = useRef("");
  useEffect(() => {
    if (user) {
      let { id: sess_Id } = JSON.parse(localStorage.getItem("ids"));
      if (sess_Id) {
        getDoc(doc(db, "users", user.uid, "orders", sess_Id)).then((res) => {
          if (res.exists()) {
            setCompOrder({ id: res.id, ...res.data() });
          }
        });
      }
    }
  }, [user]);
  useEffect(() => {
    let timer = setTimeout(() => {
      if (divBox.current) {
        divBox.current.style.display = "none";
      }
    }, 4500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="px-11  mt-8">
      <div
        ref={divBox}
        className="flex cursor-pointer fade  bg-green-200 justify-center rounded-md w-[70%] p-4  m-auto items-center space-x-2"
      >
        <div>
          <BsBagCheckFill className="w-8 h-8" />
        </div>
        <div className="font-medium  text-xl">
          Thank you, your order has been confirmed
        </div>
      </div>
      <div className="mt-12">
        {compOrder && <WrapperOrders order={compOrder} />}
      </div>

      <div className="mt-2 text-center">
        <Redirect
          className="text-xs after:bg-black relative after:top-[105%] after:left-0 after:absolute after:w-full after:h-[1px] hover:after:bg-[#FF385C]  hover:text-[#FF385C]"
          to="/MyOrders"
        >
          See all Orders
        </Redirect>
      </div>
    </div>
  );
}

export default OrderCompleted;
