import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
import FeatureSec from "../components/FeatureSec";
import HeaderSec from "../components/HeaderSec";
import Hero from "../components/Hero";
import Modal from "../components/Modal";
import ProductSection from "../components/ProductSection";
import Section from "../components/Section";
import StyleBanner from "../components/StyleBanner";
import { closeModal } from "../store/modal";

function Home() {
  const modal = useSelector((state) => {
    return state.modal;
  });
  const dispatch = useDispatch();
  return (
    <>
      <div className={`relative overflow-hidden`}>
        {modal.modal && (
          <>
            <div
              onClick={() => {
                dispatch(closeModal());
              }}
              className=" fixed cursor-pointer w-full h-full z-50  bg-[#000000c2]"
            ></div>
            <Modal></Modal>
          </>
        )}
        <HeaderSec></HeaderSec>
        <Hero></Hero>
        <Banner></Banner>
        <ProductSection
          type="Trending Products"
          ImgAlignment="left"
        ></ProductSection>
        <StyleBanner></StyleBanner>
        <ProductSection
          type="Best Selling"
          ImgAlignment="right"
        ></ProductSection>
        <Brands></Brands>
        <Section></Section>
        <FeatureSec></FeatureSec>
      </div>
    </>
  );
}

export default Home;
