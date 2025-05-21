// components/CustomSwiper.js

import { Swiper } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function CustomSwiper({ children, swiperProps = {}, className = '' }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      // slidesPerView={'auto'}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
        ...(swiperProps.autoplay || {}),
      }}
      pagination={{ clickable: true, ...(swiperProps.pagination || {}) }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className={`mySwiper  ${className}`}
      {...swiperProps}
      
    >
      {children}
    </Swiper>
  );
}
