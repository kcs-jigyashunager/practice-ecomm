import Categories from "@/shared/goals-homepage";
import PopularCategories from "@/shared/popular-categories";
import React, { useState, useEffect } from "react";
import Header from "../main-header";

const Homepage = () => {
  return (
    <>
      <Header />
      <Categories/>
      <PopularCategories/>
    </>
  );
};

export default Homepage;
