import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FilterType from "../components/Shop/FilterType";
import { db } from "../services/firebase";
import data from "../data/FilterItems.json";
import { v4 as uuidv4 } from "uuid";

function Shop() {
  const [products, setProducts] = useState([]);
  const allProducts = useRef([]);
  let { id, type } = useParams();
  const filterType = useRef(data);
  const [selectedVals, setSelectedVals] = useState([]);

  function getSelectedVals(obj) {
    let elementExists = selectedVals.find((elem) => {
      return elem.value === obj.value;
    });
    if (elementExists) {
      let filteredValue = selectedVals.filter((el) => {
        return el.value !== obj.value;
      });
      setSelectedVals([...filteredValue]);
      return;
    }
    setSelectedVals((prev) => {
      return [...prev, obj];
    });
  }

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
        <div className="mt-2">
          {filterType.current.map((type, idx) => {
            return (
              <FilterType
                key={idx}
                selectedVals={selectedVals}
                getSelectedVals={getSelectedVals}
                type={type}
              />
            );
          })}
        </div>
      </div>
      <div>hhhhh</div>
    </div>
  );
}

export default Shop;
