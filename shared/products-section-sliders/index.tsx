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

const ProductsSection = ({ heading }: { heading: string }) => {
  const [selected, setSelected] = useState<string>("");
  const [value, setValue] = useState<number>(2);
  const [defaultValue, setDefaultValue] = useState<boolean>(true);
  const [color, setColor] = useState<boolean>(false);

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

          <div className="products-section">
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
          </div>
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
          <SwiperSlide>
            <div className="product-card">
              <div className="product-image">
                <Image
                  alt="nutritrix"
                  src="/fusionPC.jpg"
                  width={200}
                  height={200}
                  priority
                  className="product-card-image"
                />
                <FavoriteOutlinedIcon
                  onClick={() => setColor(!color)}
                  className={color? "wishlist-icon-color" : "wishlist-icon"}
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
          <SwiperSlide>
            <div className="product-card">
              <div className="product-image">
                <Image
                  alt="nutritrix"
                  src="/goldPC.jpg"
                  width={200}
                  height={200}
                  priority
                  className="product-card-image"
                />
                <FavoriteOutlinedIcon
                  onClick={() => setColor(!color)}
                  className={color? "wishlist-icon-color" : "wishlist-icon"}
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
          <SwiperSlide>
            <div className="product-card">
              <div className="product-image">
                <Image
                  alt="nutritrix"
                  src="/grassPC.jpg"
                  width={200}
                  height={200}
                  priority
                  className="product-card-image"
                />
                <FavoriteOutlinedIcon
                  onClick={() => setColor(!color)}
                  className={color? "wishlist-icon-color" : "wishlist-icon"}
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
          <SwiperSlide>
            <div className="product-card">
              <div className="product-image">
                <Image
                  alt="nutritrix"
                  src="/maxPC.jpg"
                  width={200}
                  height={200}
                  priority
                  className="product-card-image"
                />
                <FavoriteOutlinedIcon
                  onClick={() => setColor(!color)}
                  className={color? "wishlist-icon-color" : "wishlist-icon"}
                  width={60}
                  height={60}
                />
                <h6>Category</h6>
                <h4 className="two-line-text">
                  Optimum Nutrition Gold Standard 100% Whey Proteinn
                </h4>
                <div>
                  <div className="stars-rating">
                    <Rating
                      className="stars"
                      name="read-only"
                      value={value}
                      readOnly
                    />
                    <span className="stars-count">(3)</span>
                  </div>
                  <div className="product-price"></div>
                  <h5>$90.00</h5>
                </div>
                <button className="hover-up">
                  <span>ADD TO CART</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product-card">
              <div className="product-image">
                <Image
                  alt="nutritrix"
                  src="/naturePC.jpg"
                  width={200}
                  height={200}
                  priority
                  className="product-card-image"
                />
                <FavoriteOutlinedIcon
                  onClick={() => setColor(!color)}
                  className={color? "wishlist-icon-color" : "wishlist-icon"}
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
          <SwiperSlide>
            <div className="product-card">
              <div className="product-image">
                <Image
                  alt="nutritrix"
                  src="/nitroPC.jpg"
                  width={200}
                  height={200}
                  priority
                  className="product-card-image"
                />
                <FavoriteOutlinedIcon
                  onClick={() => setColor(!color)}
                  className={color? "wishlist-icon-color" : "wishlist-icon"}
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
          <SwiperSlide>
            <div className="product-card">
              <div className="product-image">
                <Image
                  alt="nutritrix"
                  src="/standPC.jpg"
                  width={200}
                  height={200}
                  priority
                  className="product-card-image"
                />
                <FavoriteOutlinedIcon
                  onClick={() => setColor(!color)}
                  className={color? "wishlist-icon-color" : "wishlist-icon"}
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
          <SwiperSlide>
            <div className="product-card">
              <div className="product-image">
                <Image
                  alt="nutritrix"
                  src="/workPC.jpg"
                  width={200}
                  height={200}
                  priority
                  className="product-card-image"
                />
                <FavoriteOutlinedIcon
                  onClick={() => setColor(!color)}
                  className={color? "wishlist-icon-color" : "wishlist-icon"}
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
        </Swiper>
      </div>
      <Slider value={heading} />
    </>
  );
};

export default ProductsSection;
