import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  cartItemStock,
  deleteAllFromCart,
  increaseQuantity,
} from "./cartHelper";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useReactiveVar } from "@apollo/client";
import { cartItemsVar } from "../../authReactive";

const Cart = ({ location }) => {
  const [quantityCount, setQuantityCount] = useState(1);
  const { addToast } = useToasts();
  const { pathname } = location;
  let cartTotalPrice = 0;

  const cartItems = useReactiveVar(cartItemsVar);

  return (
    <Fragment>
      <MetaTags>
        <title>Shop In AR | Cart</title>
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Cart
      </BreadcrumbsItem>

      {/* breadcrumb */}
      <Breadcrumb />
      <div className="cart-main-area pt-90 pb-100">
        <div className="container">
          {cartItems && cartItems.length >= 1 ? (
            <Fragment>
              <h3 className="cart-page-title">Your cart items</h3>
              <div className="row">
                <div className="col-12">
                  <div className="table-content table-responsive cart-table-content">
                    <table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Name</th>
                          <th>Unit Price</th>
                          <th>Qty</th>
                          <th>Subtotal</th>
                          <th>action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((cartItem, key) => {
                          const finalProductPrice = cartItem.price.toFixed(2);

                          cartTotalPrice +=
                            finalProductPrice * cartItem.quantities;
                          return (
                            <tr key={key}>
                              <td className="product-thumbnail">
                                <Link
                                  to={
                                    process.env.PUBLIC_URL +
                                    "/product/" +
                                    cartItem.id
                                  }
                                >
                                  <img
                                    className="img-fluid"
                                    src={
                                      process.env.PUBLIC_URL +
                                      cartItem.images[0]
                                    }
                                    alt=""
                                  />
                                </Link>
                              </td>

                              <td className="product-name">
                                <Link
                                  to={
                                    process.env.PUBLIC_URL +
                                    "/product/" +
                                    cartItem.id
                                  }
                                >
                                  {cartItem.name}
                                </Link>
                              </td>

                              <td className="product-price-cart">
                                <span className="amount">
                                  {"$" + finalProductPrice}
                                </span>
                              </td>

                              <td className="product-quantity">
                                <div className="cart-plus-minus">
                                  <button
                                    className="dec qtybutton"
                                    onClick={() =>
                                      decreaseQuantity(cartItem, addToast)
                                    }
                                  >
                                    -
                                  </button>
                                  <input
                                    className="cart-plus-minus-box"
                                    type="text"
                                    value={cartItem.quantities}
                                    readOnly
                                  />
                                  <button
                                    className="inc qtybutton"
                                    onClick={() => {
                                      increaseQuantity(
                                        cartItem,
                                        addToast,
                                        quantityCount
                                      );
                                    }}
                                    disabled={
                                      cartItem.quantities &&
                                      cartItem.quantities >=
                                        cartItemStock(
                                          cartItem,
                                          cartItem.selectedProductColor,
                                          cartItem.selectedProductSize
                                        )
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="product-subtotal">
                                {"$" +
                                  (
                                    finalProductPrice * cartItem.quantities
                                  ).toFixed(2)}
                              </td>

                              <td className="product-remove">
                                <button
                                  onClick={() =>
                                    deleteFromCart(cartItem, addToast)
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
                      <button onClick={() => deleteAllFromCart(addToast)}>
                        Clear Shopping Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="cart-tax">
                    <div className="title-wrap">
                      <h4 className="cart-bottom-title section-bg-gray">
                        Estimate Shipping And Tax
                      </h4>
                    </div>
                    <div className="tax-wrapper">
                      <p>Enter your destination to get a shipping estimate.</p>
                      <div className="tax-select-wrapper">
                        <div className="tax-select">
                          <label>* Country</label>
                          <select className="email s-email s-wid">
                            <option>Bangladesh</option>
                            <option>Albania</option>
                            <option>Åland Islands</option>
                            <option>Afghanistan</option>
                            <option>Belgium</option>
                          </select>
                        </div>
                        <div className="tax-select">
                          <label>* Region / State</label>
                          <select className="email s-email s-wid">
                            <option>Bangladesh</option>
                            <option>Albania</option>
                            <option>Åland Islands</option>
                            <option>Afghanistan</option>
                            <option>Belgium</option>
                          </select>
                        </div>
                        <div className="tax-select">
                          <label>* Zip/Postal Code</label>
                          <input type="text" />
                        </div>
                        <button className="cart-btn-2" type="submit">
                          Get A Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12"></div>

                <div className="col-lg-4 col-md-12">
                  <div className="grand-totall">
                    <div className="title-wrap">
                      <h4 className="cart-bottom-title section-bg-gary-cart">
                        Cart Total
                      </h4>
                    </div>
                    <h5>
                      Total products{" "}
                      <span>{"$" + cartTotalPrice.toFixed(2)}</span>
                    </h5>

                    <h4 className="grand-totall-title">
                      Grand Total <span>{"$" + cartTotalPrice.toFixed(2)}</span>
                    </h4>
                    <Link to={process.env.PUBLIC_URL + "/checkout"}>
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon mb-30">
                    <i className="pe-7s-cart"></i>
                  </div>
                  <div className="item-empty-area__text">
                    No items found in cart <br />{" "}
                    <Link to={process.env.PUBLIC_URL + "/shop"}>Shop Now</Link>
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

Cart.propTypes = {
  addToCart: PropTypes.func,
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  decreaseQuantity: PropTypes.func,
  location: PropTypes.object,
  deleteAllFromCart: PropTypes.func,
  deleteFromCart: PropTypes.func,
};

export default Cart;
