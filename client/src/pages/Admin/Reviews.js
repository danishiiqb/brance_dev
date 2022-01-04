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
        rating: "4",
        engageMent: {
          likes: [{ user: "John" }],
          dislikes: [{ user: "Jio" }]
        }
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
        rating: "4",
        engageMent: {
          likes: [],
          dislikes: []
        }
      },
      product: {
        img: "/img/product.png",
        name: "Air Jordan 5 Retro",
        category: "Jeans"
      }
    }
  ]);

  function deleteOwnerReview(objId) {
    setReviews((prev) => {
      const newReview = prev.map((review, _) => {
        if (objId === review.id) {
          const { reply, ...comments } = review.comments;
          return {
            ...review,
            product: { ...review.product },
            comments: { ...comments }
          };
        }
        return {
          ...review,
          product: { ...review.product },
          comments: { ...review.comments }
        };
      });
      return newReview;
    });
  }

  function setActionWithId(obj) {
    if (obj.type === "Delete") {
      deleteOwnerReview(obj.id);
      return;
    }
    return;
  }
  function setCommentReply(obj) {
    setReviews((prev) => {
      let newReviews = prev.map((review) => {
        if (review.id === obj.id) {
          return {
            ...review,
            product: { ...review.product },
            comments: { ...review.comments, reply: obj.comment }
          };
        }
        return {
          ...review,
          product: { ...review.product },
          comments: { ...review.comments }
        };
      });
      return newReviews;
    });
  }
  function checkExistingLikes(user, likesArray) {
    let alreadyLiked = likesArray.findIndex((likes) => {
      return likes.name === user.name;
    });
    if (alreadyLiked !== -1) {
      return likesArray.filter((_, idx) => {
        return idx !== alreadyLiked;
      });
    }
    return [...likesArray, user];
  }
  function incDecEngagement(obj) {
    setReviews((prev) => {
      let newReviews = prev.map((review) => {
        if (review.id === obj.id) {
          return obj.engageInfo.type === "Like"
            ? {
                ...review,
                product: { ...review.product },
                comments: {
                  ...review.comments,
                  engageMent: {
                    ...review.comments.engageMent,
                    likes: checkExistingLikes(
                      obj.engageInfo.user,
                      review.comments.engageMent.likes
                    )
                  }
                }
              }
            : {
                ...review,
                product: { ...review.product },
                comments: {
                  ...review.comments,
                  dislikes: review.comments.dislikes + 1
                }
              };
        }
        return {
          ...review,
          product: { ...review.product },
          comments: { ...review.comments }
        };
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
                incDecEngagement={incDecEngagement}
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
