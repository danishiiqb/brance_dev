import React, { useMemo } from "react";
import NavProduct from "./NavProduct";

function BagReview({ liked, addToProd }) {
  let totalPrice = useMemo(() => {
    return addToProd.reduce(
      (acc, curr) => acc + Number(curr.prize) * curr.qty,
      0
    );
  }, [addToProd]);
  return (
    <div
      className={`absolute z-50 rounded-sm overflow-hidden  shadow-sm_dark bg-white top-[115%] right-0 ${
        !liked ? "w-[420px]" : "w-[350px]"
      } `}
    >
      <div>
        {addToProd.map((prod) => {
          return <NavProduct liked={liked} key={prod.id} prod={prod} />;
        })}
      </div>
      {!liked && (
        <div className="p-3">
          <div className="space-y-2.5 border-t-[1px] pb-3 pt-3 border-[#c5c5c5] border-b-[1px]">
            <div className="flex text-xs justify-between">
              <div className="text-[#7c7c7c]">Order Value</div>
              <div>${(Math.round(totalPrice * 100) / 100).toFixed(2)}</div>
            </div>
            <div className="flex text-xs justify-between">
              <div className="text-[#7c7c7c]">Delivery</div>
              <div>$3.99</div>
            </div>
          </div>
          <div className="flex font-medium mt-2 text-sm justify-between">
            <div>Total</div>
            <div>${(Math.round(totalPrice * 100) / 100 + 3.99).toFixed(2)}</div>
          </div>
        </div>
      )}
      {!liked && (
        <>
          <div className="text-sm text-white font-medium bg-black cursor-pointer text-center m-2 transition-all duration-300 rounded-sm hover:font-semibold capitalize p-[0.5rem] ">
            <span>Checkout</span>
          </div>
          <div className="text-sm  font-medium border-[1px] border-black cursor-pointer text-center m-2 rounded-sm text-black transition-all duration-300 hover:font-semibold capitalize p-[0.5rem] ">
            <span>Shopping bag</span>
          </div>
        </>
      )}
    </div>
  );
}

export default BagReview;
