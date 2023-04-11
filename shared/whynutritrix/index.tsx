import React from 'react'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const WhyNutritrix = () => {
    return (
        <>
        <div className='main-why-nutritrix'>
            <div>
        <div className='headings-why-nutritrix'>
           <h6>Everything you need to Build Your Strength</h6>
           <h2>EXPERIENCE THE NUTRITX DIFFERENCE</h2> 
        </div>
        <div className='pointers-why-nutritrix'>
            <div className='inside-headings'>
                <h5>Heritage of Quality</h5>
                <p>Selection of products with exceptional formulations that come from the hand of the best specialists.</p>
            </div>
            <div className='inside-headings'>
                <h5>Nutrition Experts</h5>
                <p>For people who have made a healthy existence their philosophy of life, includes nutritional supplements</p>
            </div>
            <div className='inside-headings'>
                <h5>Truth in Labeling</h5>
                <p>Reflecting our practical sense, its made up of products that are simple, mostly single-ingredient</p>
            </div>
            <div className='inside-headings'>
                <h5>Unique Formulation</h5>
                <p>Organic products and organic foods, especially for those with a strong preference for natural</p>
            </div>
            <div>
                <button>LEARN MORE</button>
            </div>
        </div>
        </div>
        <div className='reviews-main'>
        <div className="main-slider-offer">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
            <div className='review'>
                <h5>Excellent Service</h5>
                <h6>Karan Arora/</h6>
                <span>Gym Mod</span>
                <p>
                You guys rock! Not able to tell you how happy I am with shop nutrition. Shop nutrition is exactly what our business has been lacking. I love your system. I would be lost without shop nutrition. I do not know what else to say. Wow what great service!
                </p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='review'>
                <h5>Excellent Service</h5>
                <h6>Karan Arora/</h6>
                <span>Gym Mod</span>
                <p>
                You guys rock! Not able to tell you how happy I am with shop nutrition. Shop nutrition is exactly what our business has been lacking. I love your system. I would be lost without shop nutrition. I do not know what else to say. Wow what great service!
                </p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='review'>
                <h5>Excellent Service</h5>
                <h6>Karan Arora/</h6>
                <span>Gym Mod</span>
                <p>
                You guys rock! Not able to tell you how happy I am with shop nutrition. Shop nutrition is exactly what our business has been lacking. I love your system. I would be lost without shop nutrition. I do not know what else to say. Wow what great service!
                </p>
            </div>
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
        </div>
        </>
    )
}

export default WhyNutritrix
