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

function Shop() {
  const [products, setProducts] = useState([]);
  const allProducts = useRef([]);
  const { current: itemsQty } = useRef({ idx: 1, increment: 25, total: 25 });
  let firstRender = useRef(true);
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
  function filterDynamic(
    type,
    alreadyFiltered,
    filteredDepend,
    alias = undefined
  ) {
    console.log(alias);
    let values = (
      alreadyFiltered ? filteredDepend : allProducts.current
    ).filter((item) => {
      let defVal = false;
      type.forEach((el) => {
        if (
          item[alias || el.type.toLowerCase()].toLowerCase() ===
          el.value.toLowerCase()
        ) {
          defVal = true;
        }
      });
      return defVal;
    });

    return values;
  }
  function catogExists(val) {
    return selectedVals.filter((type) => {
      return type.type === val;
    });
  }
  useEffect(() => {
    if (!firstRender.current) {
      let categFilter = catogExists("Category");
      let filteredValues = [];
      if (categFilter.length > 0) {
        filteredValues = filterDynamic(categFilter, false, []);
      }

      let brandFilter = catogExists("Brand");
      if (categFilter.length > 0 && brandFilter.length > 0) {
        filteredValues = filterDynamic(brandFilter, true, filteredValues);
      } else if (brandFilter.length > 0) {
        filteredValues = filterDynamic(brandFilter, false, []);
      }

      let colourFilter = catogExists("Colour");
      if (
        (brandFilter.length > 0 || categFilter.length > 0) &&
        colourFilter.length > 0
      ) {
        filteredValues = filterDynamic(colourFilter, true, filteredValues);
      } else if (colourFilter.length > 0) {
        filteredValues = filterDynamic(colourFilter, false, []);
      }

      let styleFilter = catogExists("Style");
      if (
        (colourFilter.length > 0 ||
          brandFilter.length > 0 ||
          categFilter.length > 0) &&
        styleFilter.length > 0
      ) {
        filteredValues = filterDynamic(styleFilter, true, filteredValues);
      } else if (styleFilter.length > 0) {
        filteredValues = filterDynamic(styleFilter, false, []);
      }

      let patternFilter = catogExists("Pattern");
      if (
        (colourFilter.length > 0 ||
          brandFilter.length > 0 ||
          categFilter.length > 0 ||
          styleFilter.length > 0) &&
        patternFilter.length > 0
      ) {
        filteredValues = filterDynamic(patternFilter, true, filteredValues);
      } else if (patternFilter.length > 0) {
        filteredValues = filterDynamic(patternFilter, false, []);
      }

      let materialFilter = catogExists("Material");
      if (
        (colourFilter.length > 0 ||
          brandFilter.length > 0 ||
          categFilter.length > 0 ||
          styleFilter.length > 0 ||
          patternFilter.length > 0) &&
        materialFilter.length > 0
      ) {
        filteredValues = filterDynamic(
          materialFilter,
          true,
          filteredValues,
          "madewith"
        );
      } else if (materialFilter.length > 0) {
        filteredValues = filterDynamic(materialFilter, false, [], "madewith");
      }
      setProducts(filteredValues);
    }
    firstRender.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVals]);

  useEffect(() => {
    async function getAllProducts() {
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
        let productsArr = [];

        response.forEach((elem, idx1) => {
          elem.docs.forEach((doc, idx2) => {
            if (doc.id === responseRev[idx1].docs[idx2].id) {
              productsArr.push({
                id: doc.id,
                ...doc.data(),
                ...responseRev[idx1].docs[idx2].data()
              });
            }
          });
        });
        let filteredProducts = productsArr
          .filter((product) => {
            return product.for.toLowerCase() === type.toLowerCase();
          })
          .sort((a, b) => {
            return b.createdAt.seconds - a.createdAt.seconds;
          });
        allProducts.current = filteredProducts;
        setProducts(filteredProducts.slice(0, 25));
        setLoader(false);
      } catch (err) {
        setLoader(false);
        return err.message;
      }
    }
    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loader && (
        <div className="fixed w-full top-0 h-full z-50 bg-[#000000cc]"></div>
      )}
      <div className={`flex space-x-2.5`}>
        <div className="w-[18%] p-6">
          <div className="flex justify-between items-center">
            <div className="text-md font-medium">Filters</div>
            <div className="text-sm relative transition-all duration-200 hover:after:top-[95%] after:top-[90%] after:left-0 after:absolute after:bg-gray-700 after:w-full after:h-[1px] cursor-pointer text-gray-700">
              Clear Filters
            </div>
          </div>
          <div className="mt-4">
            {filterType.current.map((type, idx) => {
              return (
                <FilterType
                  key={idx}
                  getPrice={(val) => {
                    if (selectedVals.length > 0) {
                      setProducts((prev) => {
                        return [
                          ...prev.filter(
                            (el) => el.prize >= val[0] && el.prize <= val[1]
                          )
                        ];
                      });
                    } else {
                      setProducts((_) => {
                        return [
                          ...allProducts.current.filter(
                            (el) => el.prize >= val[0] && el.prize <= val[1]
                          )
                        ];
                      });
                    }
                  }}
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
                <span>({allProducts.current.length}) items </span>
              </span>
            </div>
            <Sort></Sort>
          </div>
          {products.length > 0 && (
            <>
              <div className="grid grid-cols-4 mt-3 gap-3">
                {products.map((prod) => {
                  return (
                    <Product
                      key={prod.id}
                      expandHeight={true}
                      prodDesc={prod}
                    ></Product>
                  );
                })}
              </div>
              <div className="text-center mt-6">
                <div>
                  <div className="font-bold text-small">
                    Showing {itemsQty.total} of {allProducts.current.length}{" "}
                    items
                  </div>
                  <div className="h-1.5 relative w-4/12 m-auto my-2.5">
                    <div
                      style={{
                        width: `${
                          (itemsQty.total / allProducts.current.length) * 100
                        }%`
                      }}
                      className={`absolute rounded-l-sm top-0 h-full left-0 transition-all duration-200 after:h-2.5 after:w-0.5 after:absolute after:-translate-y-1/2  after:top-1/2 after:left-full after:bg-black bg-black`}
                    ></div>
                    <div className="bg-gray-300 rounded-sm h-full w-full"></div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    if (products.length < allProducts.current.length) {
                      itemsQty.idx++;
                      itemsQty.total =
                        itemsQty.idx * itemsQty.increment >=
                        allProducts.current.length
                          ? allProducts.current.length
                          : itemsQty.idx * itemsQty.increment;
                      setProducts(allProducts.current.slice(0, itemsQty.total));
                    }
                  }}
                  className="bg-[#000000] mt-2  hover:shadow-sm_dark transition-all duration-300  font-bold rounded-md px-3 text-white text-small p-2.5 w-max "
                >
                  <span>Load More Products</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Shop;
