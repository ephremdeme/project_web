import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import Loading from "react-loading";
import SectionTitle from "../../helpers/SectionTitle";
import { GET_CATEGORY_PRODUCTS } from "./graphql";
import ProductGrid from "./ProductGrid";

const RelatedProductSlider = ({ spaceBottomClass, category }) => {
  const { error, loading, data } = useQuery(GET_CATEGORY_PRODUCTS, {
    variables: { id: parseInt(category) },
  });
  const settings = {
    loop: false,
    slidesPerView: 4,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  if (loading)
    return (
      <div className="shop-area pt-95 pb-100">
        <div className="container">
          <Loading className="container" color="#000" type="bars" />
        </div>
      </div>
    );

  return (
    <div
      className={`related-product-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <SectionTitle
          titleText="Related Products"
          positionClass="text-center"
          spaceClass="mb-50"
        />
        <div className="row">
          <Swiper {...settings}>
            <ProductGrid
              category={category}
              limit={6}
              products={data?.category.products}
              sliderClassName="swiper-slide"
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

RelatedProductSlider.propTypes = {
  category: PropTypes.any,
  spaceBottomClass: PropTypes.string,
};

export default RelatedProductSlider;
