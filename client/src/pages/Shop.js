import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FilterType from "../components/Shop/FilterType";
import { db } from "../services/firebase";
import data from "../data/FilterItems.json";
import Product from "../components/Product";
import Sort from "../components/Shop/Sort";
import { ImSpinner2 } from "react-icons/im";

function Shop() {
  const [products, setProducts] = useState([]);
  const allProducts = useRef([]);
  let { id, type } = useParams();
  const filterType = useRef(data);
  const [loader, setLoader] = useState(true);
  const [selectedVals, setSelectedVals] = useState([]);

  function getSelectedVals(obj) {
    setSelectedVals((prev) => {
      let elementExists = prev.find((elem) => {
        return elem.value === obj.value;
      });
      if (elementExists) {
        let filteredValue = prev.filter((el) => {
          return el.value !== obj.value;
        });
        return [...filteredValue];
      }
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

        let filteredProducts = productsArr
          .filter((product) => {
            return product.for.toLowerCase() === type.toLowerCase();
          })
          .sort((a, b) => {
            return b.createdAt.seconds - a.createdAt.seconds;
          });
        console.log(filteredProducts);
        allProducts.current = filteredProducts;
        setProducts(filteredProducts.slice(0, 25));
      } catch (err) {
        console.log(err.message);
      }
      setLoader(false);
    }
    getAllProducts();
  }, []);

  return (
    <>
      {loader && (
        <div className="fixed w-full top-0  h-full z-50 bg-[#000000cc]"></div>
      )}
      <div className={`flex space-x-3`}>
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
        <div className="flex-1 p-6 pl-0 relative">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-sm">
                Home/<span className="capitalize">{type}</span>
              </span>
              <span className="font-medium  text-[1.1rem]">
                All <span className="capitalize">{type}</span> Clothing{" "}
                <span>({allProducts.current.length})</span>
              </span>
            </div>
            <Sort></Sort>
          </div>
          <div className="grid grid-cols-3 mt-3 gap-4 ">
            {products.length > 0 &&
              products.map((prod) => {
                return (
                  <Product
                    key={prod.id}
                    expandHeight={true}
                    prodDesc={prod}
                  ></Product>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
