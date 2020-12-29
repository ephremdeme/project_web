import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import BrandLogoOneSingle from "../../component/banner/BrandLogoOneSingle";

const BrandLogoSliderOne = ({ spaceBottomClass, spaceTopClass }) => {
  const settings = {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      640: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
  };

  const brandLogoData = [
    {
      id: "1",
      image: "/assets/img/brand-logo/brand-logo-1.png",
    },
    {
      id: "2",
      image: "/assets/img/brand-logo/brand-logo-2.png",
    },
    {
      id: "3",
      image: "/assets/img/brand-logo/brand-logo-3.png",
    },
    {
      id: "4",
      image: "/assets/img/brand-logo/brand-logo-4.png",
    },
    {
      id: "5",
      image: "/assets/img/brand-logo/brand-logo-5.png",
    },
  ];

  return (
    <div
      className={`brand-logo-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }  ${spaceTopClass ? spaceTopClass : ""}`}
    >
      <div className="container">
        <div className="brand-logo-active">
          <Swiper {...settings}>
            {brandLogoData &&
              brandLogoData.map((single, key) => {
                return (
                  <BrandLogoOneSingle
                    data={single}
                    key={key}
                    sliderClassName="swiper-slide"
                    spaceBottomClass="mb-30"
                  />
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

BrandLogoSliderOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default BrandLogoSliderOne;
