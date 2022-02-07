import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FilterType from "../components/Shop/FilterType";
import { db } from "../services/firebase";

function Shop() {
  const [products, setProducts] = useState([]);
  const allProducts = useRef([]);
  let { id, type } = useParams();
  const filterType = useRef([
    {
      type: "Category",
      dropdownItems: [
        "Jacket & Coats",
        "Hoodies & SweatShirts",
        "Tshirts & Polos",
        "Joggers",
        "Shirts",
        "Jeans",
        "LoungeWear",
        "Pants & Chinos",
        "Socks",
        "Jumpers & Knitwear"
      ]
    },
    {
      type: "Sale/New Season",
      dropdownItems: ["Stratnum Collection", "Diversity Collection"]
    },
    {
      type: "Size",
      dropdownItems: [
        "x-small",
        "small",
        "medium",
        "large",
        "X-Large",
        "XX-Large",
        "3X-Large",
        "4X-Large"
      ]
    },
    {
      type: "Brand",
      dropdownItems: [
        "Nike",
        "Tommy Hilfiger",
        "H&M",
        "Adidas",
        "Gap",
        "North Face",
        "Levis",
        "Zara",
        "Next",
        "Urban Outfitters",
        "Custom"
      ]
    },
    {
      type: "Colour",
      dropdownItems: [
        "Blue",
        "Tommy Hilfiger",
        "H&M",
        "Adidas",
        "Gap",
        "North Face",
        "Levis",
        "Zara",
        "Next",
        "Urban Outfitters",
        "Custom"
      ]
    },
    {
      type: "Style",
      dropdownItems: [
        {
          name: "Jacket & Coats",
          style: [
            "Leather",
            "OverCoat",
            "PullOver",
            "Biker",
            "Bomber Jacket",
            "Parkas",
            "Denim Jacket",
            "Track",
            "Varsity",
            "Wind Breaker",
            "Other"
          ]
        },
        {
          name: "Hoodies & SweatShirts",
          style: [
            "Hooded",
            "cuffed",
            "zip through",
            "tracksuit",
            "oversized",
            "other",
            "joggers",
            "fleece lined"
          ]
        },
        {
          name: "Tshirts & Polos",
          style: [
            "LongLine",
            "Muscle",
            "Oversized",
            "slim fit",
            "Regular",
            "Relaxed",
            "slim",
            "Other"
          ]
        },
        {
          name: "Joggers",
          style: ["cargo", "Cigarette", "Cropped", "slim", "relaxed", "other"]
        },
        {
          name: "Shirts",
          style: ["Denim", "Oxford", "Regular", "Relaxed", "Slim", "Other"]
        },
        {
          name: "Jeans",
          style: ["Slim", "Tapered", "Regular", "Other"]
        },
        {
          name: "LoungeWear",
          style: ["Hooded", "cuffed", "zip through", "jersey", "hoodies"]
        },
        {
          name: "Pants & Chinos",
          style: [
            "cargo",
            "Cigarette",
            "chino",
            "Cropped",
            "slim",
            "relaxed",
            "other"
          ]
        },
        {
          name: "Socks",
          style: ["ankle sock", "trainer sock", "slipper sock"]
        },
        {
          name: "Sets & OutFits",
          style: [
            "Joggers sets",
            "t-shirt set",
            "sweater set",
            "tracksuit",
            "hooded",
            "Co Ord"
          ]
        },
        {
          name: "Jumpers & KnitWear",
          style: ["Oversized", "regular", "relaxed", "other"]
        }
      ]
    },
    {
      type: "Pattern",
      dropdownItems: [
        {
          name: "Jacket & Coats",
          pattern: [
            "plain",
            "logo",
            "stripe",
            "check",
            "print",
            "graphic",
            "embroidery",
            "colour block",
            "other"
          ]
        },
        {
          name: "Hoodies & SweatShirts",
          pattern: [
            "plain",
            "logo",
            "stripe",
            "floral",
            "check",
            "print",
            "graphic",
            "embroidery",
            "colour block",
            "other"
          ]
        },
        {
          name: "Tshirts & Polos",
          pattern: [
            "logo",
            "Plain",
            "graphic",
            "print",
            "check",
            "coulour block",
            "other"
          ]
        },
        {
          name: "Joggers",
          pattern: undefined
        },
        {
          name: "Shirts",
          pattern: [
            "plain",
            "check",
            "print",
            "stripe",
            "logo",
            "floral",
            "tartan",
            "other"
          ]
        },
        {
          name: "Jeans",
          pattern: undefined
        },
        {
          name: "LoungeWear",
          pattern: undefined
        },
        {
          name: "Pants & Chinos",
          pattern: ["Plain", "check", "stripe", "logo", "other"]
        },
        {
          name: "Socks",
          pattern: ["plain", "logo", "print", "stripe", "embroidery", "other"]
        },
        {
          name: "Sets & OutFits",
          pattern: ["plain", "logo", "print", "stripe", "graphic", "other"]
        },
        {
          name: "Jumpers & KnitWear",
          pattern: [
            "plain",
            "logo",
            "print",
            "stripe",
            "graphic",
            "cable",
            "colour block",
            "other"
          ]
        }
      ]
    },
    {
      type: "Price",
      dropdownItems: "slider"
    },
    {
      type: "Material",
      dropdownItems: ["Cotton", "Polyester", "Satin"]
    }
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
        <div className="mt-2">
          {filterType.current.map((type) => {
            return <FilterType type={type} />;
          })}
        </div>
      </div>
      <div>hhhhh</div>
      {/* {products.map((el) => {
        return <div>{el.title}</div>;
      })} */}
    </div>
  );
}

export default Shop;
