import Categories from "@/shared/goals-homepage";
import React, { useState, useEffect } from "react";
import Header from "../main-header";

const Homepage = () => {
  return (
    <>
      <Header />
      <Categories/>
    </>
  );
};

export default Homepage;
