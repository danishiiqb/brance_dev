import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Qty from "../components/Qty";
import Rating from "../components/Rating";
import { db } from "../services/firebase";
import { ReactComponent as Bag } from "../icons/bagProd.svg";
import { ReactComponent as Heart } from "../icons/heart.svg";

function ProductsDisplay() {
  let { brand, name, id } = useParams();
  const [product, setProduct] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    async function findDocument() {
      try {
        const collectionRef = await getDocs(collection(db, "users"));
        let productsColl = [];
        let reviewColl = [];
        collectionRef.forEach((doc) => {
          if (doc.data().type === "admin") {
            productsColl.push(
              getDocs(collection(db, "users", doc.id, "products"))
            );
            reviewColl.push(
              getDocs(collection(db, "users", doc.id, "productReviews"))
            );
          }
        });
        let response = await Promise.all(productsColl);
        let responseRev = await Promise.all(reviewColl);
        let product;
        response.forEach((elem, idx1) => {
          elem.docs.forEach((doc, idx2) => {
            if (doc.id === responseRev[idx1].docs[idx2].id && doc.id === id) {
              product = {
                id: doc.id,
                ...doc.data(),
                ...responseRev[idx1].docs[idx2].data()
              };
            }
          });
        });
        if (!product) {
          throw new Error("Product Not Found");
        }
        setProduct(product);
      } catch (err) {
        setErr(err.message);
      }
    }
    findDocument();
  }, [id]);
  console.log(product);
  return (
    <div className="px-11">
      {product && (
        <div className="flex mt-8 space-x-8">
          <div className="w-1/2 flex space-x-4">
            <div className="space-y-3">
              {product.productImg.map((item, idx) => {
                return (
                  <div key={idx} className={`w-24 cursor-pointer h-24`}>
                    <img
                      src={item}
                      className="w-full h-full rounded-md object-cover"
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
            <div className="h-[93%]  w-full">
              <img
                className="w-full rounded-md h-full object-cover"
                src={product.productImg[0]}
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2 space-y-7">
            <div className="">
              <h2 className="font-regular capitalize leading-tight text-[1.76rem]">
                {product.title}
              </h2>
              <div>
                <Rating reviews={product.reviews} big={true}></Rating>
              </div>
              <div className="font-medium text-[1.76rem] mt-3 ">
                {product.currency === "USD" ? "$" : ""}
                {product.prize}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-md font-medium">Colour:</div>
              <div
                style={{ backgroundColor: `${product.colour}` }}
                className={`w-[14px] h-[14px] rounded-full 
                     border-[1.7px] cursor-pointer border-black
                  `}
              ></div>
            </div>
            <div className="space-y-2">
              <div className="text-md font-medium">Size:</div>
              <div className="flex space-x-3">
                {product.size.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className={`
                       border-[.7px] px-2.5 py-0.5 cursor-pointer border-black capitalize rounded-sm
                    `}
                    >
                      {item.elem.startsWith("X") ||
                      item.elem.startsWith("3") ||
                      item.elem.startsWith("4")
                        ? item.elem === "X-Large" || item.elem === "X-Small"
                          ? item.elem
                              .split("")
                              .filter((el) => el !== "-")
                              .slice(0, 2)
                          : item.elem
                              .split("")
                              .filter((el) => el !== "-")
                              .slice(0, 3)
                        : item.elem.slice(0, 1)}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="space-y-2">
              <Qty></Qty>
            </div>

            <div className="flex space-x-5 items-center  w-[90%]">
              <div className="flex-1 relative">
                <div className="flex cursor-pointer items-center space-x-1.5  justify-center text-white p-3 rounded-md bg-[#FF385C]">
                  <button className="text-xl font-semibold">Add To Bag</button>
                  <Bag className="w-8 h-8 transition-all fill-current stroke-white text-transparent  duration-300 stroke-white"></Bag>
                </div>
                <div className="absolute text-[12px] text-[#6b6b6b] mt-2 -translate-x-1/2 left-1/2 top-full ">
                  Free Delivery Ts&Cs apply
                </div>
              </div>
              <div className="border-black cursor-pointer border-2 flex items-center justify-center rounded-full w-12 h-12 p-6">
                <div>
                  <Heart className="w-6 h-6"></Heart>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsDisplay;
