import React, { useState } from "react";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike
} from "react-icons/ai";

function LikeDislike({ setEngagement, engageMent }) {
  const [outlineChange, setOutLineChange] = useState({
    like: false,
    dislike: false
  });
  const [clicked, setClicked] = useState({
    liked: false,
    disliked: false
  });
  return (
    <div className="flex mt-1 items-center space-x-2">
      <button
        className="flex items-center space-x-0.5"
        onMouseEnter={() => {
          setOutLineChange((prev) => {
            return { ...prev, like: true };
          });
        }}
        onMouseLeave={() => {
          setOutLineChange((prev) => {
            return { ...prev, like: false };
          });
        }}
        onClick={() => {
          setEngagement({ type: "Like" });
          setClicked((prev) => {
            return {
              ...prev,
              disliked: prev.disliked ? false : prev.disliked,
              liked: prev.liked ? false : true
            };
          });
        }}
      >
        {outlineChange.like || clicked.liked ? (
          <AiFillLike
            className={`${
              clicked.liked ? "text-[#FF385C]" : "text-[#000000b2]"
            } `}
          ></AiFillLike>
        ) : (
          <AiOutlineLike></AiOutlineLike>
        )}
        <span className="text-xs"> {engageMent.likes.length}</span>
      </button>
      <button
        className="flex items-center space-x-0.5"
        onMouseEnter={() => {
          setOutLineChange((prev) => {
            return { ...prev, dislike: true };
          });
        }}
        onMouseLeave={() => {
          setOutLineChange((prev) => {
            return { ...prev, dislike: false };
          });
        }}
        onClick={() => {
          setEngagement({ type: "Dislike" });
          setClicked((prev) => {
            return {
              ...prev,
              //   liked: prev.liked ? false : prev.liked,
              disliked: prev.disliked ? false : true
            };
          });
        }}
      >
        {outlineChange.dislike || clicked.disliked ? (
          <AiFillDislike
            className={`${
              clicked.disliked ? "text-[#FF385C]" : "text-[#000000b2]"
            } `}
          ></AiFillDislike>
        ) : (
          <AiOutlineDislike></AiOutlineDislike>
        )}
        <span className="text-xs">{engageMent.dislikes.length}</span>
      </button>
    </div>
  );
}

export default LikeDislike;
