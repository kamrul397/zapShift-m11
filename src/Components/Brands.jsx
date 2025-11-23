import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import amazon from "../../src/assets/brands/amazon.png";
import casio from "../../src/assets/brands/casio.png";
import moonstar from "../../src/assets/brands/moonstar.png";
import randstad from "../../src/assets/brands/randstad.png";
import star from "../../src/assets/brands/star.png";
import start_people from "../../src/assets/brands/start_people.png";
import amazon_vector from "../../src/assets/brands/amazon_vector.png";

const brandsLogos = [
  amazon,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
  amazon_vector,
];

const Brands = () => {
  return (
    <Swiper
      spaceBetween={4}
      centeredSlides={true}
      grabCursor={true}
      slidesPerView={5}
      loop={true}
      autoplay={{ delay: 1000 }}
      modules={[Autoplay]}
    >
      {brandsLogos.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;
