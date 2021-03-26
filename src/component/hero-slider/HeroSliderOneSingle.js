import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const HeroSliderOneSingle = ({ data, sliderClassName }) => {
  return (
    <div
      className={`single-slider image-slider slider-height-1 bg-light-gray ${
        sliderClassName ? sliderClassName : ""
      }`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-content slider-animated-1 text-center animation-text">
              <h1 className="animated font-weight-bold  dark-grey-text">
                {data.title}
              </h1>
              <h3 className="animated ">{data.subtitle}</h3>
              <div className="slider-btn btn-hover mt-4">
                <Link
                  className="animated font-weight-bold"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
            <div className=" slider-animated-1">
              <img
                className="animated img-fluid mb-2 rounded z-depth-2"
                src={process.env.PUBLIC_URL + data.image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderOneSingle.propTypes = {
  data: PropTypes.object,
  sliderClassName: PropTypes.string,
};

export default HeroSliderOneSingle;
