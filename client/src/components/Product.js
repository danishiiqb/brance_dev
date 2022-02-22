import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Bag } from "../icons/bag.svg";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import gsap from "gsap";

function Product({ prodDesc, expandHeight }) {
  const [detailView, showDetailed] = useState(false);
  const [currImg, setCurrImg] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [initLoad, setinitLoad] = useState(false);
  const { current: imgLength } = useRef(prodDesc.productImg.length);
  let { current: timeline } = useRef(gsap.timeline());
  let innerBox = useRef(null);
  let box = useRef(null);
  let stars = useRef(null);
  let colorPallete = useRef(null);

  function renderStars(rating) {
    let totalStars = 5;
    let filled = [...Array(Math.floor(rating))].map((_) => {
      return <BsStarFill className="w-3.5 h-3.5 fill-current text-[#FFC107]" />;
    });
    let empty = [];
    if (rating % 1 === 0) {
      empty = [...Array(totalStars - rating)].map((_, idx) => (
        <BsStarFill className="w-3.5 h-3.5 fill-current text-[#ECEFF1]" />
      ));
    } else {
      empty = [...Array(totalStars - Math.floor(rating))].map((_, idx) => {
        return idx === 0 ? (
          <BsStarHalf className="w-3.5 h-3.5 text-[#FFC107]"></BsStarHalf>
        ) : (
          <BsStarFill className="w-3.5 h-3.5 fill-current text-[#ECEFF1]" />
        );
      });
    }
    return [...filled, ...empty];
  }

  useEffect(() => {
    if (detailView) {
      timeline
        .to(box.current, {
          height: "4.5rem",
          duration: ".27",
          ease: "power4.out"
        })
        .to(stars.current, {
          opacity: "1",
          duration: ".27",
          ease: "power4.out"
        })
        .to(colorPallete.current, {
          opacity: "1",
          duration: ".27",
          ease: "power4.out"
        });
    } else {
      box.current &&
        timeline.to(box.current, {
          height: "auto",
          duration: ".27",
          ease: "power4.out"
        });
    }
    return () => {
      setCurrImg(0);
    };
  }, [detailView, timeline]);

  useEffect(() => {
    let timer;
    if (detailView && imgLoaded) {
      timer = setTimeout(() => {
        console.log("oooo");
        setImgLoaded(false);
        setCurrImg((prev) => {
          return prev >= imgLength - 1 ? 0 : prev + 1;
        });
      }, 3500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [detailView, imgLoaded, currImg, imgLength]);

  function shortenTitle(title) {
    if (title.length > 31) {
      return `${title.substr(0, 32)}..`;
    }
    return title;
  }

  return (
    <>
      <div
        onMouseEnter={() => {
          showDetailed(true);
        }}
        onMouseLeave={() => {
          showDetailed(false);
        }}
        className={`${
          expandHeight ? "h-[412px]" : "h-prHeight"
        } rounded-md cursor-pointer overflow-hidden relative`}
      >
        <img
          onLoad={() => {
            if (!currImg) setinitLoad(true);
            setImgLoaded(true);
          }}
          src={prodDesc.productImg[currImg]}
          className={`w-full   ${
            initLoad ? "" : "bg-gray-200 blur-sm"
          }  h-full object-cover`}
          alt=""
        />
        <div
          ref={box}
          className={`box absolute bottom-2 shadow-sm_dark cursor-pointer rounded-md  bg-white w-secFull -translate-x-1/2 left-1/2 text-[13px] p-1.5 px-2 flex flex-col justify-center`}
        >
          <div ref={innerBox} className="flex items-center justify-between">
            <div>
              <div className="font-normal capitalize">
                {shortenTitle(prodDesc.title)}
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="font-semibold">${prodDesc.prize}</div>
                {detailView && (
                  <div ref={stars} className="flex space-x-1.5 opacity-0">
                    <div className="flex space-x-0.5">
                      {renderStars(
                        prodDesc.reviews.reduce((prev, curr) => {
                          return prev + curr.rating;
                        }, 0) / prodDesc.reviews.length
                      )}
                    </div>
                    <div className="text-[11px]">
                      ({prodDesc.reviews.length})
                    </div>
                  </div>
                )}
              </div>
              {detailView && (
                <div
                  ref={colorPallete}
                  className="flex space-x-1 mt-1 opacity-0"
                >
                  <div
                    style={{ backgroundColor: `${prodDesc.colour}` }}
                    className={`w-[9px] h-[9px] rounded-full ${
                      prodDesc.colour === "white" &&
                      "bg-white border-[1.5px] border-black"
                    }`}
                  ></div>
                </div>
              )}
            </div>
            <div className="">
              <Bag className="w-7 h-7 fill-current text-transparent transition-all duration-200 hover:fill-current hover:text-black"></Bag>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
