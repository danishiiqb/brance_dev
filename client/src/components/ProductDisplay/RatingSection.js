import React from "react";
import Comments from "./Comments";
import CustomerReviews from "./CustomerReviews";

function RatingSection({ reviews }) {
  return (
    <>
      <div className="text-2xl mt-16 font-medium capitalize mb-5">
        Customer Reviews
      </div>
      <div className="flex space-x-20">
        <CustomerReviews reviews={reviews}></CustomerReviews>
        <Comments></Comments>
      </div>
    </>
  );
}

export default RatingSection;
