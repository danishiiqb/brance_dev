import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Filter from "../../components/DashBoard/MainInfo/Filter";
import PaginationBtns from "../../components/DashBoard/MainInfo/PaginationBtns";
import ReviewsTableRowWrapper from "../../components/DashBoard/MainInfo/Reviews/ReviewsTableRowWrapper";
import Search from "../../components/DashBoard/MainInfo/Search";
import { db } from "../../services/firebase";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [reload, setRelaod] = useState(false);
  const { user, products, tableHeaderSorting, filteredData } = useSelector(
    (state) => {
      return {
        user: state.user,
        products: state.products,
        tableHeaderSorting: state.tableHeaderSorting,
        filteredData: state.filteredData
      };
    }
  );

  useEffect(() => {
    async function getReviews() {
      let collRev = await collection(
        db,
        "users",
        user.user.uid,
        "productReviews"
      );
      let docs = await getDocs(collRev);

      let reviewsArr = [];
      docs.forEach((item) => {
        if (item.data().reviews.length > 0) {
          reviewsArr.push({ ...item.data(), id: item.id });
        }
      });
      setReviews(reviewsArr);
      reload && setRelaod(false);
    }
    (user.user || reload) && getReviews();
  }, [user.user]);

  return (
    <div className="">
      <div className="bg-white h-full shadow-sm_dark rounded-md mt-6 p-small">
        <div className="px-1.5 flex items-center justify-between">
          <Filter type="reviews"></Filter>
          <Search></Search>
        </div>
        <div className="mt-5">
          <div className=" space-y-4">
            {reviews.map((tableData, idx) => {
              return (
                <ReviewsTableRowWrapper
                  setReload={setRelaod}
                  type="reviews"
                  key={idx}
                  admin={{ name: user.user.displayName, uid: user.user.uid }}
                  tableData={tableData}
                ></ReviewsTableRowWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
