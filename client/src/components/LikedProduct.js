import React, { useEffect, useState } from "react";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import Icons from "./Icons";
import BagReview from "./Navbar/BagReview";

function LikedProduct({ likedProd }) {
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    likedProd.length === 0 && setExpand(false);
  }, [likedProd]);
  return (
    <div
      onClick={() => {
        likedProd.length > 0 && setExpand((prev) => !prev);
      }}
      className="relative"
    >
      <Icons
        expand={expand}
        filledicon={RiHeartFill}
        icon={RiHeartLine}
      ></Icons>
      {expand && <BagReview liked={true} addToProd={likedProd}></BagReview>}
    </div>
  );
}

export default LikedProduct;
