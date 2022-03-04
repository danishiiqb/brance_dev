import React from "react";
import NavProduct from "./NavProduct";

function BagReview({ liked, addToProd }) {
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
        <>
          <div className="text-sm text-white font-medium bg-black cursor-pointer text-center m-2 transition-all duration-300 rounded-sm hover:font-semibold capitalize p-[0.5rem] ">
            <span>Checkout</span>
          </div>
          <div className="text-sm  font-medium border-[1px] border-black cursor-pointer text-center m-2 rounded-sm text-black transition-all duration-300 hover:font-semibold capitalize p-[0.5rem] ">
            <span> Shopping bag</span>
          </div>
        </>
      )}
    </div>
  );
}

export default BagReview;
