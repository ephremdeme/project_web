import React from "react";
import Swiper from "react-id-swiper";
import HeroSliderOneSingle from "../component/hero-slider/HeroSliderOneSingle";

const HeroSliderOne = () => {
  const heroSliderData =  [
    {
      "id": 1,
      "title": "Smart Products",
      "subtitle": "Winter Offer 2020 Collection",
      "image": "/assets/img/slider/single-slide-hm1-2.png",
      "url": "/shop-grid-standard"
    },
    {
      "id": 2,
      "title": "Smart Products",
      "subtitle": "Summer Offer 2020 Collection",
      "image": "/assets/img/slider/single-slide-1.png",
      "url": "/shop-grid-standard"
    }
  ]
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };

  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <Swiper {...params}>
          {heroSliderData &&
            heroSliderData.map((single, key) => {
              return (
                <HeroSliderOneSingle
                  sliderClassName="swiper-slide"
                  data={single}
                  key={key}
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderOne;
