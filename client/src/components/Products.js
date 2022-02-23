import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";

import Product from "./Product";

function Products({ type }) {
  const [products, setProducts] = useState({
    categories: [
      "All",
      "Hoodies & SweatShirt",
      "Shirts & Tshirts",
      "Pants & Chinos",
      "ActiveWear",
      "Accessories"
    ],
    product: []
  });
  const [selectedTab, setSelectedTab] = useState("All");

  //   useEffect(() => {
  //     async function getAllProducts() {
  //       try {
  //         const collectionRef = await getDocs(collection(db, "users"));
  //         let productsColl = [];
  //         let reviewColl = [];
  //         collectionRef.forEach((doc) => {
  //           if (doc.data().type === "admin") {
  //             productsColl.push(
  //               getDocs(collection(db, "users", doc.id, "products"))
  //             );
  //             reviewColl.push(
  //               getDocs(collection(db, "users", doc.id, "productReviews"))
  //             );
  //           }
  //         });
  //         let response = await Promise.all(productsColl);
  //         let responseRev = await Promise.all(reviewColl);
  //         let productsArr = [];

  //         response.forEach((elem, idx1) => {
  //           elem.docs.forEach((doc, idx2) => {
  //             if (doc.id === responseRev[idx1].docs[idx2].id) {
  //               productsArr.push({
  //                 id: doc.id,
  //                 ...doc.data(),
  //                 ...responseRev[idx1].docs[idx2].data()
  //               });
  //             }
  //           });
  //         });
  //         let filteredProducts = productsArr
  //           .filter((product) => {
  //             return product.for.toLowerCase() === type.toLowerCase();
  //           })
  //           .sort((a, b) => {
  //             return b.createdAt.seconds - a.createdAt.seconds;
  //           });

  //         // allProducts.current = filteredProducts;
  //         console.log(response, productsArr, filteredProducts);
  //         setProducts((prev) => {
  //           return { ...prev, product: productsArr.slice(0, 6) };
  //         });
  //         // setLoader(false);
  //       } catch (err) {
  //         // setLoader(false);
  //         return err.message;
  //       }
  //     }
  //     getAllProducts();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <div className="flex-grow">
      <div className="flex space-x-7 font-semibold mb-6 ">
        {products.categories.map((category, idx) => {
          return (
            <div
              key={idx}
              className={`transition-all duration-200 cursor-pointer px-3 border-[3px] border-transparent ${
                selectedTab === category && "!border-[#FF385C]  rounded-lg"
              } `}
              onClick={() => {
                setSelectedTab(category);
              }}
            >
              {category}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-5">
        {products.product
          .filter((prod) => {
            return selectedTab !== "All" ? prod.category === selectedTab : true;
          })
          .map((prod, idx) => {
            return <Product key={idx} prodDesc={prod}></Product>;
          })}
      </div>
    </div>
  );
}

export default Products;
