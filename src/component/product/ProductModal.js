import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import { Modal } from "react-bootstrap";
import Rating from "react-rating";

function ProductModal(props) {
  const { product } = props;

  const { discountedprice } = props;
  const { finalproductprice } = props;
  const { finaldiscountedprice } = props;

  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(product.quantity);
  const [quantityCount, setQuantityCount] = useState(1);

  const wishlistItem = props.wishlistitem;

  const addToCart = props.addtocart;
  const addToWishlist = props.addtowishlist;
  const addToWishlistServer = props.addToWishlistServer;

  const addToast = props.addtoast;

  const productCartQty = 0;

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    loopedSlides: 4,
    loop: true,
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
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
    <Fragment>
      <Modal
        show={props.show}
        onHide={props.onHide}
        className="product-quickview-modal-wrapper"
      >
        <Modal.Header closeButton></Modal.Header>

        <div className="modal-body">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="product-large-image-wrapper">
                <Swiper {...gallerySwiperParams}>
                  {product.images &&
                    product.images.map((single, key) => {
                      return (
                        <div key={key}>
                          <div className="single-image">
                            <img
                              src={process.env.PUBLIC_URL + single}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      );
                    })}
                </Swiper>
              </div>
              <div className="product-small-image-wrapper mt-15">
                <Swiper {...thumbnailSwiperParams}>
                  {product.images &&
                    product.images.map((single, key) => {
                      return (
                        <div key={key}>
                          <div className="single-image">
                            <img
                              src={process.env.PUBLIC_URL + single}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      );
                    })}
                </Swiper>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="product-details-content quickview-content">
                <h2>{product.name}</h2>
                <div className="product-details-price">
                  {discountedprice !== null ? (
                    <Fragment>
                      <span>{"$" + finaldiscountedprice}</span>{" "}
                      <span className="old">{"$" + finalproductprice}</span>
                    </Fragment>
                  ) : (
                    <span>{"$" + finalproductprice} </span>
                  )}
                </div>
                {product.rating.rating && product.rating.rating > 0 ? (
                  <div className="pro-details-rating-wrap">
                    <div
                      style={{ color: "#ffa900" }}
                      className="pro-details-rating"
                    >
                      <Rating
                        fractions={2}
                        readonly={true}
                        initialRating={product.rating.rating}
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                      />
                    </div>
                    <div style={{ fontSize: "1.6em", height: "30px" }}>
                      {" "}
                      ( {product.rating.count} ){" "}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="pro-details-list">
                  <p>{product.shortDescription}</p>
                </div>

                {product.affiliateLink ? (
                  <div className="pro-details-quality">
                    <div className="pro-details-cart btn-hover">
                      <a
                        href={product.affiliateLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="pro-details-quality">
                    <div className="cart-plus-minus">
                      <button
                        onClick={() =>
                          setQuantityCount(
                            quantityCount > 1 ? quantityCount - 1 : 1
                          )
                        }
                        className="dec qtybutton"
                      >
                        -
                      </button>
                      <input
                        className="cart-plus-minus-box"
                        type="text"
                        value={quantityCount}
                        readOnly
                      />
                      <button
                        onClick={() =>
                          setQuantityCount(
                            quantityCount < productStock - productCartQty
                              ? quantityCount + 1
                              : quantityCount
                          )
                        }
                        className="inc qtybutton"
                      >
                        +
                      </button>
                    </div>
                    <div className="pro-details-cart btn-hover">
                      {productStock && productStock > 0 ? (
                        <button
                          onClick={() =>
                            addToCart(
                              product,
                              addToast,
                              quantityCount,
                              selectedProductColor,
                              selectedProductSize
                            )
                          }
                          title={
                            props.cartitem !== undefined
                              ? "Added to cart"
                              : "Add to cart"
                          }
                          disabled={productCartQty >= productStock}
                        >
                          {" "}
                          Add To Cart{" "}
                        </button>
                      ) : (
                        <button disabled>Out of Stock</button>
                      )}
                    </div>
                    <div className="pro-details-wishlist">
                      <button
                        className={wishlistItem !== undefined ? "active" : ""}
                        disabled={wishlistItem !== undefined}
                        title={
                          wishlistItem !== undefined
                            ? "Added to wishlist"
                            : "Add to wishlist"
                        }
                        onClick={() =>
                          addToWishlist(product, addToast, addToWishlistServer)
                        }
                      >
                        <i className="pe-7s-like" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}

ProductModal.propTypes = {
  addtoast: PropTypes.func,
  addtocart: PropTypes.func,
  addtowishlist: PropTypes.func,
  addToWishlistServer: PropTypes.func,
  cartitems: PropTypes.array,
  compareitem: PropTypes.object,
  currency: PropTypes.object,
  discountedprice: PropTypes.number,
  finaldiscountedprice: PropTypes.number,
  finalproductprice: PropTypes.number,
  onHide: PropTypes.func,
  product: PropTypes.object,
  show: PropTypes.bool,
  wishlistitem: PropTypes.object,
};

export default ProductModal;
