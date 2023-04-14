import React, { useState, useEffect } from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "@/shared/slider";
import myCustomData from "@/json-data/data.json";

const ProductsSection = ({ heading }: { heading: string }) => {
  const [selected, setSelected] = useState<string>("");
  const [value, setValue] = useState<number>(2);
  const [defaultValue, setDefaultValue] = useState<boolean>(true);
  const [num, setNum] = useState<Array<number>>([]);

  const handlewWishList = (productIndex:number) => {
    if(num.indexOf(productIndex) === -1){
      setNum([...num, productIndex])
    } else {
      const filteredNumbers = num.filter(number => number !== productIndex);
      setNum(filteredNumbers)
    }
  }

  return (
    <>
      <div className="product-section-class">
        <div className="popular-categories-heading">
          <h2>
            {heading}
            <span>
              <ArrowForwardIosIcon
                className="arrow-icon"
                width={60}
                height={60}
              />
            </span>
          </h2>

          {heading !== "TRENDING NOW" ? <div className="products-section">
            <h4
              className={
                defaultValue || selected === "featured"
                  ? "selected-heading"
                  : ""
              }
              onClick={() => setSelected("featured")}
            >
              FEATURED PRODUCTS
            </h4>
            <h4
              className={selected === "rated" ? "selected-heading" : ""}
              onClick={() => {
                setSelected("rated");
                setDefaultValue(false);
              }}
            >
              TOP RATED
            </h4>
            <h4
              className={selected === "seller" ? "selected-heading" : ""}
              onClick={() => {
                setSelected("seller");
                setDefaultValue(false);
              }}
            >
              BEST SELLER
            </h4>
          </div>: ""}
        </div> 

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          className="products-slider"
        >
          {myCustomData?.data.map((product, index) => (
            <>
           <SwiperSlide >
            <div key={index} className="product-card">
              <div className="product-image">
                <Image
                  alt="nutritrix"
                  src={product.image}
                  width={200}
                  height={200}
                  priority
                  className="product-card-image"
                />
                <FavoriteOutlinedIcon
                  onClick={() => handlewWishList(index)}
                  className={num.includes(index) ? "wishlist-icon-color" : "wishlist-icon"}
                  width={60}
                  height={60}
                />
                <h6>Category</h6>
                <h4 className="two-line-text">
                  Optimum Nutrition Gold Standard 100% Whey Proteinn
                </h4>
                <div className="stars-rating">
                  <Rating
                    className="stars"
                    name="read-only"
                    value={value}
                    readOnly
                  />
                  <span className="stars-count">(3)</span>
                </div>
                <div className="product-price">
                  <h5>$90.00</h5>
                </div>
                <button className="hover-up">
                  <span>ADD TO CART</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
          
          </>
          ))}
        </Swiper>
      </div>
      <Slider value={heading} />
    </>
  );
};

export default ProductsSection;
