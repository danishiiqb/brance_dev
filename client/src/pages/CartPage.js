import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../components/CartPage/Cart";
import Total from "../components/CartPage/Total";
import { ReactComponent as Stripe } from "../icons/stripe.svg";
import { AiFillCheckCircle } from "react-icons/ai";
import { SiVisa, SiPaypal, SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { openModal } from "../store/modal";

function CartPage() {
  const { addToBag: shoppingBag, user } = useSelector((state) => {
    return { addToBag: state.addToBag, user: state.user };
  });
  const dispatch = useDispatch();
  let totalPrice = useMemo(() => {
    return shoppingBag.reduce(
      (acc, curr) => acc + Number(curr.prize) * curr.qty,
      0
    );
  }, [shoppingBag]);
  return (
    <div className="mb-8">
      <div className="flex mt-8 mb-5 px-11 text-xl font-medium space-x-1">
        <div>My Cart</div>
        <div>({shoppingBag.length})</div>
      </div>
      <div className="px-11 flex space-x-24">
        <Cart shoppingBag={shoppingBag}></Cart>
        <div
          style={{ height: "max-content" }}
          className="bg-[#f5f5f5] shadow-sm_dark rounded-sm flex-1 p-4 py-6 "
        >
          <div>
            {!user.user && (
              <div
                onClick={() => {
                  dispatch(openModal(false));
                }}
                className="text-md  font-medium border-[1px] border-black cursor-pointer text-center m-2 rounded-sm text-black transition-all duration-300 hover:font-semibold capitalize p-[0.7rem] "
              >
                <span>Log In</span>
              </div>
            )}
          </div>
          <Total cart={true} totalPrice={totalPrice}></Total>

          <div className="text-md text-white font-medium bg-black cursor-pointer text-center m-2 transition-all duration-300 rounded-sm hover:font-semibold capitalize p-[0.7rem]">
            <span>Continue to Checkout</span>
          </div>
          <div className="text-xs flex mt-3 space-x-1 items-center justify-center ">
            <div>
              <AiFillCheckCircle className="w-3 h-3" />
            </div>
            <div>
              Safe and Secure Payments.Easy returns.100% Authentic products.
            </div>
          </div>
          <div className="flex mt-5   flex-col">
            <div className="text-sm text-[#000000a6]">We accept</div>
            <div className="flex space-x-4 items-center">
              <div>
                <SiVisa className="w-8 h-8 "></SiVisa>
              </div>
              <div>
                <FaCcMastercard className="w-5 h-5 "></FaCcMastercard>
              </div>
              <div>
                <SiPaypal className="w-4 h-4 "></SiPaypal>
              </div>
              <div>
                <SiAmericanexpress className="w-4 h-4 "></SiAmericanexpress>
              </div>
            </div>
          </div>
          <div className="text-xs text-[#909090] mt-5">
            Prices and delivery costs are not confirmed until you've reached the
            checkout
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;