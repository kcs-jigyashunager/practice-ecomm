import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'

const Slider = () => {
  return (
    <>
    <div className="main-slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={1000}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={ true }
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="hero-image">
            <Image
              className="slider-image"
              alt="nutritrix"
              src="/gymcover1.jpg"
              width={1440}
              height={400}
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-image">
            <Image
              className="slider-image"
              alt="nutritrix"
              src="/gymcover1.jpg"
              width={1440}
              height={400}
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-image">
            <Image
              className="slider-image"
              alt="nutritrix"
              src="/gymcover1.jpg"
              width={1440}
              height={400}
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-image">
            <Image
              className="slider-image"
              alt="nutritrix"
              src="/gymcover1.jpg"
              width={1440}
              height={400}
              priority
            />
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};

export default Slider;
