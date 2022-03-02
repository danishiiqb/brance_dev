import React from "react";
import Comments from "./Comments";
import CustomerReviews from "./CustomerReviews";

function RatingSection({ reviews }) {
  return (
    <div>
      <div className="text-2xl font-medium capitalize mb-5">
        Customer Reviews
      </div>
      <div className="flex space-x-32">
        <CustomerReviews reviews={reviews}></CustomerReviews>
        {reviews.length > 0 && (
          <div className="flex-1 space-y-9">
            <div className="space-y-9">
              {reviews.map((rev, idx) => {
                return rev.comment && rev.title ? (
                  <Comments key={idx} review={rev}></Comments>
                ) : (
                  ""
                );
              })}
            </div>
            <div className="cursor-pointer text-center">
              <div className="text-sm text-center text-gray-600 inline-block border-b-[1px] border-gray-600">
                Read More Reviews
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RatingSection;
