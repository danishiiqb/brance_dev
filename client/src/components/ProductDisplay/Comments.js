import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { ReactComponent as ThumbsFilled } from "../../icons/thumbs2.svg";
import { useState } from "react";
import { ReactComponent as ThumbsOutline } from "../../icons/thumbs1.svg";

function Comments({
  review: { likes, dislikes, comment, rating, title, user, createdAt }
}) {
  const [interaction, setInteraction] = useState({
    likesInter: { likes, liked: false },
    dislikesInter: { dislikes, disliked: false }
  });
  function renderStars(rating) {
    let totalStars = 5;
    let filled = [...Array(Math.floor(rating))].map((_) => {
      return (
        <BsStarFill
          key={Math.random()}
          className="w-[.9rem] h-[.9rem] fill-current text-[#FFC107]"
        />
      );
    });
    let empty = [];
    if (rating % 1 === 0) {
      empty = [...Array(totalStars - rating)].map((_, idx) => (
        <BsStarFill
          key={Math.random()}
          className={`w-[.9rem] h-[.9rem] fill-current text-[#ECEFF1]`}
        />
      ));
    } else {
      empty = [...Array(totalStars - Math.floor(rating))].map((_, idx) => {
        return idx === 0 ? (
          <BsStarHalf
            key={Math.random()}
            className={`w-[.9rem] h-[.9rem] text-[#FFC107]`}
          />
        ) : (
          <BsStarFill
            key={Math.random()}
            className={`w-[.9rem] h-[.9rem]
                fill-current text-[#ECEFF1]`}
          />
        );
      });
    }
    return [...filled, ...empty];
  }
  function convertDate(sec) {
    let date = new Date(sec * 1000);
    return `${date.toLocaleString("default", {
      month: "long"
    })} ${date.getDate()}, ${date.getFullYear()}`;
  }
  return (
    <div className="space-y-2">
      <div className="font-medium text-lg">{title}</div>
      <div className="flex space-x-1 relative -top-1">
        {renderStars(rating)}
      </div>
      <div className="font-regular text-small">{comment}</div>
      <div className="flex text-sm text-[#797979]">
        <div>
          <span className="capitalize">{user.name}</span>
          <span className="inline-block mx-1">|</span>
        </div>
        <div>
          <span>{convertDate(createdAt.seconds)}</span>
          <span className="inline-block mx-1">|</span>
        </div>
        <div>
          <span>Verified Purchaser</span>
          <span className="inline-block mx-1">|</span>
        </div>
        <div>Incentivised Review</div>
      </div>
      <div className="flex items-center space-x-1">
        <div className="font-regular text-sm">Helpful?</div>
        <div className="flex space-x-1 items-center">
          <div
            onClick={() => {
              setInteraction((prev) => {
                if (!prev.likesInter.liked) {
                  return {
                    dislikesInter: prev.dislikesInter.disliked
                      ? {
                          dislikes: prev.dislikesInter.dislikes - 1,
                          disliked: !prev.dislikesInter.disliked
                        }
                      : { ...prev.dislikesInter },
                    likesInter: {
                      likes: prev.likesInter.likes + 1,
                      liked: !prev.likesInter.liked
                    }
                  };
                } else {
                  return {
                    ...prev,
                    likesInter: {
                      likes: prev.likesInter.likes - 1,
                      liked: !prev.likesInter.liked
                    }
                  };
                }
              });
            }}
            className="cursor-pointer space-x-0.5 flex items-center"
          >
            <div>
              {interaction.likesInter.liked ? (
                <ThumbsFilled className="w-4  h-4" />
              ) : (
                <ThumbsOutline className="w-4 fill-current h-4" />
              )}
            </div>
            <div className="text-[13px]">{interaction.likesInter.likes}</div>
          </div>
          <div
            onClick={() => {
              setInteraction((prev) => {
                if (!prev.dislikesInter.disliked) {
                  return {
                    likesInter: prev.likesInter.liked
                      ? {
                          likes: prev.likesInter.likes - 1,
                          liked: !prev.likesInter.liked
                        }
                      : { ...prev.likesInter },
                    dislikesInter: {
                      dislikes: prev.dislikesInter.dislikes + 1,
                      disliked: !prev.dislikesInter.disliked
                    }
                  };
                } else {
                  return {
                    ...prev,
                    dislikesInter: {
                      dislikes: prev.dislikesInter.dislikes - 1,
                      disliked: !prev.dislikesInter.disliked
                    }
                  };
                }
              });
            }}
            className="cursor-pointer space-x-0.5 flex items-center"
          >
            <div>
              {interaction.dislikesInter.disliked ? (
                <ThumbsFilled className="w-4 tr fill-current  h-4" />
              ) : (
                <ThumbsOutline className="w-4 tr fill-current  h-4" />
              )}
            </div>
            <div className="text-[13px]">
              {interaction.dislikesInter.dislikes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
