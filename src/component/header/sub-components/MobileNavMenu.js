import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop"}>Shop</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop"}>Collection</Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>Pages</Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/cart"}>Cart</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/checkout"}>CheckOut</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/wishlist"}>Wishlist</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/my-account"}>
                My Account
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                LogIn / Register
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/about"}>About Us</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/contact"}>Contact Us</Link>
            </li>
            {/* <li>
              <Link to={process.env.PUBLIC_URL + "/not-found"}>
                {strings["404_page"]}
              </Link>
            </li> */}
          </ul>
        </li>
        {/* <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
            {strings["blog"]}
          </Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                {strings["blog_standard"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-no-sidebar"}>
                {strings["blog_no_sidebar"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-right-sidebar"}>
                {strings["blog_right_sidebar"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                {strings["blog_details_standard"]}
              </Link>
            </li>
          </ul>
        </li> */}
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object,
};

export default MobileNavMenu;
