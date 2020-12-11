import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { addToCart, increaseQuantity } from "../../pages/other/cartHelper";
import { addToWishlist } from "../../pages/other/wishlistHelper";

const ProductDescriptionInfo = ({
  product,
  discountedPrice,
  currency,
  finalDiscountedPrice,
  finalProductPrice,
  wishlistItem,
  addToWishlistServer
}) => {
  const { addToast } = useToasts();

  const [productStock, setProductStock] = useState(product.quantity);
  const [quantityCount, setQuantityCount] = useState(1);

  return (
    <div className="product-details-content ml-70">
      <h2>{product.name}</h2>
      <div className="product-details-price">
        {discountedPrice !== null ? (
          <Fragment>
            <span>{"$" + finalDiscountedPrice}</span>{" "}
            <span className="old">{"$" + finalProductPrice}</span>g
          </Fragment>
        ) : (
          <span>{"$" + finalProductPrice} </span>
        )}
      </div>
      {product.rating.rating && product.rating.rating > 0 ? (
        <div className="pro-details-rating-wrap">
          <div style={{ color: "#ffa900" }} className="pro-details-rating">
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

      <div className="pro-details-quality">
        <div className="cart-plus-minus">
          <button
            onClick={() =>
              setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
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
                quantityCount < productStock - 1
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
              onClick={() => addToCart(product, addToast, quantityCount)}
              disabled={1 >= productStock}
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
            onClick={() => addToWishlist(product, addToast, addToWishlistServer)}
          >
            <i className="pe-7s-like" />
          </button>
        </div>
      </div>
      {product.category ? (
        <div className="pro-details-meta">
          <span>Categories :</span>
          <Link to={process.env.PUBLIC_URL + "/shop"}>
            {product.category.category}
          </Link>
          <Link to={process.env.PUBLIC_URL + "/shop"}>
            {", " + product.subCategory?.category}
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  addToWishlistServer: PropTypes.func,
  addToast: PropTypes.func,
  cartItems: PropTypes.array,
  compareItem: PropTypes.array,
  currency: PropTypes.object,
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.object,
  wishlistItem: PropTypes.object,
};

export default ProductDescriptionInfo;
