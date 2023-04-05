import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Timer from "../timer/index";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Rating from "@mui/material/Rating";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const LatestDeals = () => {
  const [value, setValue] = useState<number>(2);

  useEffect(() => {
    const progressBar = document.querySelector(".progress-bar");
    const progress = document.querySelector<HTMLElement>(".progress");
    let progressWidth = 0;
    function updateProgress() {
      progressWidth += 10; // adjust based on your needs
      if (progress) {
        progress.style.width = `${progressWidth}%`;
      }
    }
  }, []);

  // adjust interval timing based on your needs

  return (
    <>
      <div>
        <div className="latest-deals-heading">
          <h2>LATEST DEALS</h2>
          <span className="arrow-span">
            <ArrowForwardIosIcon width={60} height={60} />
          </span>
          <h6>LIMITED QUANTITIES. HURRY UP!</h6>
          <Timer />
          <h5>View All Deals</h5>
        </div>
      </div>
      <div className="product-slider-class">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          className="latest-deals-slider"
        >
          <SwiperSlide>
            <div className="product-card">
              <div className="product-image">
                <Image
                  alt="nutritrix"
                  src="/fusionPC.jpg"
                  width={230}
                  height={230}
                  priority
                />
                <FavoriteBorderOutlinedIcon
                  className="wishlist-icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="product-info">
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
                <p>Sold: <span>30/62</span></p>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                {/* <button className="hover-up">
                  <span>ADD TO CART</span>
                </button> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product-card">
              <div className="product-image">
                <Image
                  alt="nutritrix"
                  src="/grassPC.jpg"
                  width={230}
                  height={230}
                  priority
                />
                <FavoriteBorderOutlinedIcon
                  className="wishlist-icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="product-info">
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
                <p>Sold: <span>30/62</span></p>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                {/* <button className="hover-up">
                  <span>ADD TO CART</span>
                </button> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product-card">
              <div className="product-image">
                <Image
                  alt="nutritrix"
                  src="/maxPC.jpg"
                  width={230}
                  height={230}
                  priority
                />
                <FavoriteBorderOutlinedIcon
                  className="wishlist-icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="product-info">
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
                <p>Sold: <span>30/62</span></p>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                {/* <button className="hover-up">
                  <span>ADD TO CART</span>
                </button> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product-card">
              <div className="product-image">
                <Image
                  alt="nutritrix"
                  src="/naturePC.jpg"
                  width={230}
                  height={230}
                  priority
                />
                <FavoriteBorderOutlinedIcon
                  className="wishlist-icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="product-info">
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
                <p>Sold: <span>30/62</span></p>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                {/* <button className="hover-up">
                  <span>ADD TO CART</span>
                </button> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product-card">
              <div className="product-image">
                <Image
                  alt="nutritrix"
                  src="/nitroPC.jpg"
                  width={230}
                  height={230}
                  priority
                />
                <FavoriteBorderOutlinedIcon
                  className="wishlist-icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="product-info">
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
                <p>Sold: <span>30/62</span></p>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                {/* <button className="hover-up">
                  <span>ADD TO CART</span>
                </button> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product-card">
              <div className="product-image">
                <Image
                  alt="nutritrix"
                  src="/standPC.jpg"
                  width={230}
                  height={230}
                  priority
                />
                <FavoriteBorderOutlinedIcon
                  className="wishlist-icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="product-info">
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
                <p>Sold: <span>30/62</span></p>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                {/* <button className="hover-up">
                  <span>ADD TO CART</span>
                </button> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product-card">
              <div className="product-image">
                <Image
                  alt="nutritrix"
                  src="/workPC.jpg"
                  width={230}
                  height={230}
                  priority
                />
                <FavoriteBorderOutlinedIcon
                  className="wishlist-icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="product-info">
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
                <p>Sold: <span>30/62</span></p>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                {/* <button className="hover-up">
                  <span>ADD TO CART</span>
                </button> */}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default LatestDeals;
