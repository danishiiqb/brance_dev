import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebase";

function Shop() {
  const [products, setProducts] = useState([]);
  const allProducts = useRef([]);
  let { id, type } = useParams();
  const filterType = useRef([
    "Category",
    "Sale/NewSeason",
    "Size",
    "Brand",
    "Colour",
    "Style",
    "Pattern",
    "Discount%",
    "Price",
    "Material"
  ]);
  useEffect(() => {
    async function getAllProducts() {
      try {
        const collectionRef = await getDocs(collection(db, "users"));
        let productsColl = [];
        collectionRef.forEach((doc) => {
          if (doc.data().type === "admin") {
            productsColl.push(
              getDocs(collection(db, "users", doc.id, "products"))
            );
          }
        });
        let response = await Promise.all(productsColl);
        let productsArr = [];
        response.forEach((elem) => {
          elem.forEach((doc) => {
            productsArr.push({ id: doc.id, ...doc.data() });
          });
        });
        let filteredProducts = productsArr.filter((product) => {
          return product.for.toLowerCase() === type.toLowerCase();
        });
        allProducts.current = filteredProducts;
        setProducts(filteredProducts.slice(0, 10));
      } catch (err) {
        console.log(err.message);
      }
    }
    getAllProducts();
  }, []);
  return (
    <div className="flex">
      <div className="w-1/4 p-6">
        <div className="flex justify-between items-center">
          <div className="text-md font-medium">Filters</div>
          <div className="text-sm relative transition-all duration-200 hover:after:top-[95%] after:top-[90%] after:left-0 after:absolute after:bg-gray-700 after:w-full after:h-[1px] cursor-pointer text-gray-700">
            Clear Filters
          </div>
        </div>
        <div>{}</div>
      </div>
      <div>hhhhh</div>
      {/* {products.map((el) => {
        return <div>{el.title}</div>;
      })} */}
    </div>
  );
}

export default Shop;
