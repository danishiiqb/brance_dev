import React, { useState } from "react";
import Filter from "../../components/DashBoard/MainInfo/Filter";
import PaginationBtns from "../../components/DashBoard/MainInfo/PaginationBtns";
import ReviewsTableRow from "../../components/DashBoard/MainInfo/ReviewsTableRow";
import Search from "../../components/DashBoard/MainInfo/Search";
import TableHeaderRow from "../../components/DashBoard/MainInfo/TableHeaderRow";

function Reviews() {
  const [reviews, setReviews] = useState([
    {
      id: "89",
      comments: {
        name: "Simon",
        img: "/img/dashboard/profile.jpeg",
        message:
          "Very bad experience. Gave money on 17th till date could not use the laptop as we have received lower configuration. Will not buy hereafter from flipkart.will say friends and relatives also. Will file a civil suit on Monday.",
        time: "9h ago",
        rating: "4"
      },
      product: {
        img: "/img/product.png",
        name: "Air Jordan 5 Retro",
        category: "Jeans"
      }
    },
    {
      id: "9",
      comments: {
        name: "Simon",
        img: "/img/dashboard/profile.jpeg",
        message:
          "Very bad experience. Gave money on 17th till date could not use the laptop as we have received lower configuration. Will not buy hereafter from flipkart.will say friends and relatives also. Will file a civil suit on Monday.",
        time: "9h ago",
        rating: "4"
      },
      product: {
        img: "/img/product.png",
        name: "Air Jordan 5 Retro",
        category: "Jeans"
      }
    }
  ]);
  function setActionWithId(obj) {
    console.log(obj);
  }
  function setCommentReply(obj) {
    setReviews((prev) => {
      let newReviews = prev.map((review) => {
        if (review.id === obj.id) {
          return {
            ...review,
            comments: { ...review.comments, reply: obj.comment }
          };
        }
        return review;
      });
      return newReviews;
    });
  }
  return (
    <div className="h-screen">
      <div className="bg-white shadow-sm_dark rounded-md mt-6 p-small">
        <div className="px-1.5 flex items-center justify-between">
          <Filter type="products"></Filter>
          <Search></Search>
        </div>
        <table className="w-full my-3">
          <TableHeaderRow
            headerList={["Comments", "Products"]}
          ></TableHeaderRow>
          {reviews.map((tableData, idx) => {
            return (
              <ReviewsTableRow
                setActionWithId={setActionWithId}
                type="reviews"
                key={idx}
                setCommentReply={setCommentReply}
                tableData={tableData}
              ></ReviewsTableRow>
            );
          })}
        </table>
        <PaginationBtns></PaginationBtns>
      </div>
    </div>
  );
}

export default Reviews;
