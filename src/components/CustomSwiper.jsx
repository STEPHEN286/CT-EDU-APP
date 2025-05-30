
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
// import Swiper from "swiper"
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper } from "swiper/react";

export default function CustomSwiper({ children, swiperProps = {}, className = "" }) {
  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      // spaceBetween={20}
      // breakpoints={{
      //   0: {
      //     slidesPerView: 1,
      //   },
      //   1024: {
      //     slidesPerView: 2,
      //   },
      //   1280: {
      //     slidesPerView: 2,
      //   },
      // }}
      autoplay={{
        delay: 9500,
        disableOnInteraction: false,
        ...(swiperProps.autoplay || {}),
      }}
      pagination={{ clickable: true, ...(swiperProps.pagination || {}) }}
      navigation={swiperProps.navigation}
      modules={[Autoplay, Pagination, Navigation]}
      className={`testimonial-swiper ${className}`}
      {...swiperProps}
    >
      {children}
    </Swiper>
  )
}