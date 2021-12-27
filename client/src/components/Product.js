import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Bag } from "../icons/bag.svg";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import gsap from "gsap";
function Product({ prodDesc }) {
    const [detailView, showDetailed] = useState(false);
    const [clickedColor, setClickedColor] = useState(prodDesc.colorDesc[0].color);
    let { current: timeline } = useRef(gsap.timeline());
    let innerBox = useRef(null);
    let box = useRef(null);
    let stars = useRef(null);
    let colorPallete = useRef(null);
    function renderStars() {
        let totalStars = 5;
        let filled = [...Array(Math.floor(prodDesc.rating))].map((_) => {
            return <BsStarFill className="w-3.5 h-3.5 fill-current text-[#FFC107]" />;
        });
        let empty = [];
        if (prodDesc.rating % 1 === 0) {
            empty = [...Array(totalStars - prodDesc.rating)].map((_, idx) => (
                <BsStarFill className="w-3.5 h-3.5 fill-current text-[#ECEFF1]" />
            ));
        } else {
            empty = [...Array(totalStars - Math.floor(prodDesc.rating))].map(
                (_, idx) => {
                    return idx === 0 ? (
                        <BsStarHalf className="w-3.5 h-3.5 text-[#FFC107]"></BsStarHalf>
                    ) : (
                        <BsStarFill className="w-3.5 h-3.5 fill-current text-[#ECEFF1]" />
                    );
                }
            );
        }
        return [...filled, ...empty];
    }
    useEffect(() => {
        if (detailView) {
            timeline
                .to(box.current, { height: "4.5rem", duration: '.3', ease: "power4.out" })
                .to(stars.current, { opacity: "1", duration: ".46", ease: "power4.out" })
                .to(colorPallete.current, { opacity: "1", duration: ".46", ease: "power4.out" });
            return;
        }
        box.current && timeline.to(box.current, {
            height: "auto", duration: '.3', ease: "power4.out"
        })
    }, [detailView]);
    return (
        <>
            <div className="h-prHeight rounded-lg overflow-hidden relative">
                <img src={prodDesc.img} className="w-full h-full object-cover" alt="" />
                <div
                    onMouseEnter={() => {
                        showDetailed(true);
                    }}
                    onMouseLeave={() => {
                        showDetailed(false);
                    }}
                    ref={box}
                    className={`box absolute bottom-2 shadow-sm_dark cursor-pointer rounded-lg  bg-white w-secFull -translate-x-1/2 left-1/2 text-[13px]  p-1.5 px-2 flex flex-col justify-center`}
                >
                    <div ref={innerBox} className="flex items-center justify-between">
                        <div>
                            <div className="font-normal">{prodDesc.brand}</div>
                            <div className="flex items-center space-x-1.5">
                                <div className="font-semibold">${prodDesc.price}</div>
                                {detailView && (
                                    <div ref={stars} className="flex space-x-1.5 opacity-0">
                                        <div className="flex space-x-0.5">{renderStars()}</div>
                                        <div className="text-[11px]">({prodDesc.reviews})</div>
                                    </div>
                                )}
                            </div>
                            {detailView && (
                                <div
                                    ref={colorPallete}
                                    className="flex space-x-1 mt-1 opacity-0"
                                >
                                    {prodDesc.colorDesc.map((color, idx) => {
                                        return (
                                            <div
                                                key={idx}
                                                onClick={() => {
                                                    setClickedColor(color.color);
                                                }}
                                                style={{ backgroundColor: `${color.color}` }}
                                                className={`w-2 h-2 rounded-full ${color.color === clickedColor
                                                    ? "border-[.5px] border-black"
                                                    : ""
                                                    }`}
                                            ></div>
                                        );
                                    })}
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
