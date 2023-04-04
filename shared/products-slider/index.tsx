import "swiper/css";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Rating from "@mui/material/Rating";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const ProductSlider = () => {
  const [value, setValue] = useState<number>(2);

  return (
    <>
      <div className="product-slider-class">
        <div className="popular-categories-heading">
          <h2>TRENDING NOW</h2>
          <span>
            <ArrowForwardIosIcon width={60} height={60} />
          </span>
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
                  width={240}
                  height={240}
                  priority
                />
                <FavoriteBorderOutlinedIcon className='wishlist-icon' width={60} height={60} />
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
                width={240}
                height={240}
                priority
              />
              <FavoriteBorderOutlinedIcon className='wishlist-icon' width={60} height={60} />
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
                width={240}
                height={240}
                priority
              />
              <FavoriteBorderOutlinedIcon className='wishlist-icon' width={60} height={60} />
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
                width={240}
                height={240}
                priority
              />
              <FavoriteBorderOutlinedIcon className='wishlist-icon' width={60} height={60} />
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
                width={240}
                height={240}
                priority
              />
              <FavoriteBorderOutlinedIcon className='wishlist-icon' width={60} height={60} />
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
                width={240}
                height={240}
                priority
              />
              <FavoriteBorderOutlinedIcon className='wishlist-icon' width={60} height={60} />
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
                width={240}
                height={240}
                priority
              />
              <FavoriteBorderOutlinedIcon className='wishlist-icon' width={60} height={60} />
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
                width={240}
                height={240}
                priority
              />
              <FavoriteBorderOutlinedIcon className='wishlist-icon' width={60} height={60} />
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
    </>
  );
};

export default ProductSlider;
