import Banner from "@/shared/banner";
import Categories from "@/shared/goals-homepage";
import LatestDeals from "@/shared/latest-deals";
import PopularCategories from "@/shared/popular-categories";
import ProductSlider from "@/shared/products-slider";
import React, { useState, useEffect } from "react";
import Header from "../main-header";

const Homepage = () => {
  return (
    <>
      <Header />
      <Categories/>
      <PopularCategories/>
      <ProductSlider/>
      <Banner/>
      <LatestDeals/>
    </>
  );
};

export default Homepage;
