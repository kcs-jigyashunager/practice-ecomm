import React, { useState, useEffect } from "react";
import Image from "next/image";


const Banner = () => {
  return (
    <>
    <div className="banner">
        <Image
            alt="nutritrix"
            className="banner-ad"
            src="/banner.png"
            width={1300}
            height={220}
            priority
          />
        </div>
    </>
  );
};

export default Banner;
