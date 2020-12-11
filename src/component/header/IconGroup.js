import { useQuery, useReactiveVar } from "@apollo/client";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { authDataVar, cartItemsVar, wishlistItemsVar } from "../../authReactive";
import { GET_USER } from "../../pages/auths/graphql";
import { deleteFromCart} from "../../pages/other/cartHelper";
import MenuCart from "./sub-components/MenuCart";



const IconGroup = ({
  currency,
  iconWhiteClass,
  ...props
}) => {
  const authData = useReactiveVar(authDataVar);
  const cartData = useReactiveVar(cartItemsVar);
  const wishlistData = useReactiveVar(wishlistItemsVar);
  const hist = useHistory();

  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

  return (
    <div
      className={`header-right-wrap ${iconWhiteClass ? iconWhiteClass : ""}`}
    >
      <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-search" />
        </button>
        <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button className="button-search">
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="same-style account-setting d-none d-lg-block">
        <button
          className="account-setting-active"
          onClick={(e) => handleClick(e)}
        >
          <i className="pe-7s-user-female" />
        </button>
        <div className="account-dropdown">
          <ul>
            {authData.username && authData.id ? (
              <React.Fragment>
                <li>
                  <h3>{authData.username}</h3>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/my-account"}>
                    my account
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/logout"}
                    onClick={(e) => {
                      e.preventDefault();
                      localStorage.setItem("token", null);
                      authDataVar({});
                      hist.push("/");
                    }}
                  >
                    Log Out
                  </Link>
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/login"}>Login</Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/register"}>
                    Register
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
      
      <div className="same-style header-wishlist">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" />
          <span className="count-style">
            {wishlistData && wishlistData.length ? wishlistData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span>
        </button>
        {/* menu cart */}
        <MenuCart
          cartData={cartData}
          currency={currency}
          deleteFromCart={deleteFromCart}
        />
      </div>
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  cartData: PropTypes.array,
  compareData: PropTypes.array,
  currency: PropTypes.object,
  iconWhiteClass: PropTypes.string,
  deleteFromCart: PropTypes.func,
  wishlistData: PropTypes.array,
};

export default IconGroup;
