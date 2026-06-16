import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { sliderImages } from '../data/cars';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function HeroSlider() {
  return (
    <div className="slider">
      <Swiper
        className="swiper"
        modules={[EffectFade, Pagination, Autoplay]}
        effect="fade"
        pagination={{ el: '.swiper-pagination', clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {sliderImages.map((image) => (
          <SwiperSlide key={image} style={{ backgroundImage: `url(${image})` }} />
        ))}
        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
}
