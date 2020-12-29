import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";

import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useMutation, useReactiveVar } from "@apollo/client";
import { cartItemsVar, wishlistItemsVar } from "../../authReactive";
import { addToCart } from "./cartHelper";
import { deleteAllFromWishlist, deleteFromWishlist } from "./wishlistHelper";
import { REMOVE_ALL_WISHLIST, REMOVE_WISHLIST } from "./graphql";
import Loading from "react-loading";

const Wishlist = ({ location }) => {
  const { addToast } = useToasts();
  const { pathname } = location;

  const cartItems = useReactiveVar(cartItemsVar);
  const wishlistItems = useReactiveVar(wishlistItemsVar);
  let [
    removeAllWishlist,
    { loading: allLoading, error: allError, data: allData },
  ] = useMutation(REMOVE_ALL_WISHLIST);
  let [
    removeWishlist,
    { loading: rLoading, error: rError, data: rData },
  ] = useMutation(REMOVE_WISHLIST);

  console.log("Remove", rData);

  if (removeAllWishlist) return <Loading />;

  return (
    <Fragment>
      <MetaTags>
        <title>Shop In AR | Wishlist</title>
        <meta
          name="description"
          content="Wishlist page of Shop In AR react minimalist eCommerce template."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Wishlist
      </BreadcrumbsItem>

      {/* breadcrumb */}
      <Breadcrumb />
      <div className="cart-main-area pt-90 pb-100">
        <div className="container">
          {wishlistItems && wishlistItems.length >= 1 ? (
            <Fragment>
              <h3 className="cart-page-title">Your wishlist items</h3>
              <div className="row">
                <div className="col-12">
                  <div className="table-content table-responsive cart-table-content">
                    <table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Name</th>
                          <th>Unit Price</th>
                          <th>Add To Cart</th>
                          <th>action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishlistItems.map((wishlistItem, key) => {
                          const finalProductPrice = wishlistItem.price.toFixed(
                            2
                          );

                          const cartItem = cartItems.filter(
                            (item) => item.id === wishlistItem.id
                          )[0];
                          return (
                            <tr key={key}>
                              <td className="product-thumbnail">
                                <Link
                                  to={
                                    process.env.PUBLIC_URL +
                                    "/product/" +
                                    wishlistItem.id
                                  }
                                >
                                  <img
                                    className="img-fluid"
                                    src={
                                      process.env.PUBLIC_URL +
                                      wishlistItem.images[0]
                                    }
                                    alt=""
                                  />
                                </Link>
                              </td>

                              <td className="product-name text-center">
                                <Link
                                  to={
                                    process.env.PUBLIC_URL +
                                    "/product/" +
                                    wishlistItem.id
                                  }
                                >
                                  {wishlistItem.name}
                                </Link>
                              </td>

                              <td className="product-price-cart">
                                <span className="amount">
                                  {"$" + finalProductPrice}
                                </span>
                              </td>

                              <td className="product-wishlist-cart">
                                {wishlistItem.affiliateLink ? (
                                  <a
                                    href={wishlistItem.affiliateLink}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    {" "}
                                    Buy now{" "}
                                  </a>
                                ) : wishlistItem.variation &&
                                  wishlistItem.variation.length >= 1 ? (
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/product/${wishlistItem.id}`}
                                  >
                                    Select option
                                  </Link>
                                ) : wishlistItem.quantity &&
                                  wishlistItem.quantity > 0 ? (
                                  <button
                                    onClick={() =>
                                      addToCart(wishlistItem, addToast)
                                    }
                                    className={
                                      cartItem !== undefined &&
                                      cartItem.quantity > 0
                                        ? "active"
                                        : ""
                                    }
                                    disabled={
                                      cartItem !== undefined &&
                                      cartItem.quantity > 0
                                    }
                                    title={
                                      wishlistItem !== undefined
                                        ? "Added to cart"
                                        : "Add to cart"
                                    }
                                  >
                                    {cartItem !== undefined &&
                                    cartItem.quantity > 0
                                      ? "Added"
                                      : "Add to cart"}
                                  </button>
                                ) : (
                                  <button disabled className="active">
                                    Out of stock
                                  </button>
                                )}
                              </td>

                              <td className="product-remove">
                                <button
                                  onClick={() =>
                                    deleteFromWishlist(
                                      wishlistItem,
                                      addToast,
                                      removeWishlist
                                    )
                                  }
                                >
                                  <i className="fa fa-times"></i>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="cart-shiping-update-wrapper">
                    <div className="cart-shiping-update">
                      <Link to={process.env.PUBLIC_URL + "/shop"}>
                        Continue Shopping
                      </Link>
                    </div>
                    <div className="cart-clear">
                      <button
                        onClick={() =>
                          deleteAllFromWishlist(addToast, removeAllWishlist)
                        }
                      >
                        Clear Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon mb-30">
                    <i className="pe-7s-like"></i>
                  </div>
                  <div className="item-empty-area__text">
                    No items found in wishlist <br />{" "}
                    <Link to={process.env.PUBLIC_URL + "/shop"}>Add Items</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

Wishlist.propTypes = {
  addToCart: PropTypes.func,
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object,
  deleteAllFromWishlist: PropTypes.func,
  deleteFromWishlist: PropTypes.func,
  wishlistItems: PropTypes.array,
};

export default Wishlist;
