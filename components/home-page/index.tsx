import Banner from "@/shared/banner";
import Categories from "@/shared/goals-homepage";
import PopularCategories from "@/shared/popular-categories";
import ProductSlider from "@/shared/products-slider";
import React, { useState, useEffect } from "react";
import Header from "../main-header";
import ProductsSection from "../../shared/products-section-sliders";
import Brands from "@/shared/brands";
import WhyNutritrix from "@/shared/whynutritrix";
import BundlePack from "@/shared/bundle-pack";
import BlogSlider from "@/shared/blogs-slider";
import Footer from "@/shared/footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <Categories/>
      <PopularCategories/>
      <ProductSlider/>
      <Banner/>
      <BundlePack/>
      <ProductsSection heading="VITAMINS & MINERALS"/>
      <ProductsSection heading="RECOVERY & REPAIR"/>
      <ProductsSection heading="ENERGY & ENDURANCE"/>
      <ProductsSection heading="WORKOUT ESSENTIALS"/>
      <Brands/>
      <WhyNutritrix/>
      <BlogSlider/>
      <Footer/>
    </>
  );
};

export default Homepage;
