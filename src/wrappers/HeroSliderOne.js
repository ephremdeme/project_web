import React from "react";
import Swiper from "react-id-swiper";
import HeroSliderOneSingle from "../component/hero-slider/HeroSliderOneSingle";

const HeroSliderOne = () => {
  const heroSliderData = [
    {
      id: 1,
      title: "Smart Shoping",
      subtitle: "Shoping In Augmented Reality",
      image: "/assets/img/slider/augmented-furniture.jpg",
      url: "/shop",
    },
    {
      id: 2,
      title: "Try Before You Buy",
      subtitle: "Shop at the comfort of your home. Design Your Home",
      image: "/assets/img/slider/ikea-app.jpg",
      url: "/shop",
    },
  ];
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
    ),
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
