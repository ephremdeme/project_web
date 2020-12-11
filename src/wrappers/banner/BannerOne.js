import PropTypes from "prop-types";
import React from "react";
import BannerOneSingle from "../../component/banner/BannerOneSingle.js";

const AppBanner = ({ spaceTopClass, spaceBottomClass }) => {
  const bannerData = [
    {
      id: 1,
      image: "/assets/img/banner/banner-1.jpg",
      title: "Watches",
      subtitle: "Starting at",
      price: "$99.00",
      link: "/shop",
    },
    {
      id: 2,
      image: "/assets/img/banner/banner-2.jpg",
      title: "Plo Bag",
      subtitle: "Starting at",
      price: "$79.00",
      link: "/shop",
    },
    {
      id: 3,
      image: "/assets/img/banner/banner-3.jpg",
      title: "Sunglass",
      subtitle: "Starting at",
      price: "$29.00",
      link: "/shop",
    },
  ];

  return (
    <div
      className={`banner-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerOneSingle
                  data={single}
                  key={key}
                  spaceBottomClass="mb-30"
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

AppBanner.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default AppBanner;
