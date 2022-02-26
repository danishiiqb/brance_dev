import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebase";
import ImageBox from "../components/ProductDisplay/ImageBox";
import ProductDesc from "../components/ProductDisplay/ProductDesc";

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
        <div className="flex py-8 space-x-12">
          <ImageBox product={product}></ImageBox>
          <ProductDesc product={product}></ProductDesc>
        </div>
      )}
    </div>
  );
}

export default ProductsDisplay;
