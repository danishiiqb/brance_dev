import React from "react";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
import FeatureSec from "../components/FeatureSec";
import HeaderSec from "../components/HeaderSec";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import Section from "../components/Section";
import StyleBanner from "../components/StyleBanner";

function Home() {
  return (
    <div className="relative overflow-hidden">
      <HeaderSec></HeaderSec>
      <Hero></Hero>
      <Banner></Banner>
      <ProductSection
        type="Trending Products"
        ImgAlignment="left"
      ></ProductSection>
      <StyleBanner></StyleBanner>
      <ProductSection type="Best Selling" ImgAlignment="right"></ProductSection>
      <Brands></Brands>
      <Section></Section>
      <FeatureSec></FeatureSec>
    </div>
  );
}

export default Home;
