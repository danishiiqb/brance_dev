import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebase";
import ImageBox from "../components/ProductDisplay/ImageBox";
import ProductDesc from "../components/ProductDisplay/ProductDesc";
import ProductRecomm from "../components/ProductDisplay/ProductRecomm";
import RatingSection from "../components/ProductDisplay/RatingSection";
import Footer from "../components/Footer";

function ProductsDisplay() {
  let { brand, name, id } = useParams();
  const [product, setProduct] = useState("");
  const [err, setErr] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [recently, setRecent] = useState([]);
  useEffect(() => {
    let recentlyViewed = localStorage.getItem("recentlyViewed");
    setRecent(
      JSON.parse(recentlyViewed)
        .filter((el) => el.id !== id)
        .reverse()
    );
  }, [id]);
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
        let product = [];
        response.forEach((elem, idx1) => {
          elem.docs.forEach((doc, idx2) => {
            if (doc.id === responseRev[idx1].docs[idx2].id) {
              product.push({
                id: doc.id,
                ...doc.data(),
                ...responseRev[idx1].docs[idx2].data()
              });
            }
          });
        });
        let [foundProduct] = product.filter((pr) => pr.id === id);
        if (!foundProduct) {
          throw new Error("Product Not Found");
        }
        let recommendations = product.filter(
          (recomm) =>
            recomm.brand === foundProduct.brand && foundProduct.id !== recomm.id
        );
        setRecommendations(recommendations);
        setProduct(foundProduct);
      } catch (err) {
        setErr(err.message);
      }
    }
    findDocument();
  }, [id]);

  return (
    <div>
      {product && (
        <>
          <div className="px-11">
            <div className="flex py-8 space-x-12">
              <ImageBox product={product}></ImageBox>
              <ProductDesc product={product}></ProductDesc>
            </div>
          </div>
          <div className="px-11 space-y-24 mt-20">
            <ProductRecomm
              title={"YOU MIGHT ALSO LIKE"}
              products={recommendations}
            ></ProductRecomm>
            <RatingSection reviews={product.reviews}></RatingSection>
            {recently.length > 0 && (
              <ProductRecomm
                title={"Recently Viewed"}
                products={recently}
              ></ProductRecomm>
            )}
          </div>
          <Footer></Footer>
        </>
      )}
    </div>
  );
}

export default ProductsDisplay;
