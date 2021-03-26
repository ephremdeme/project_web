import { useReactiveVar } from "@apollo/client";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { authDataVar } from "../../authReactive";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  const authData = useReactiveVar(authDataVar);
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/shop"}>Shop</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              Pages <i className="fa fa-angle-down" />{" "}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/cart"}>Cart</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/checkout"}>CheckOut</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/wishlist"}>Wishlist</Link>
              </li>
              {authData.username && authData.id ? (
                <li>
                  <Link to={process.env.PUBLIC_URL + "/my-account"}>
                    My Account
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/login"}>LogIn</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/register"}>
                      Register
                    </Link>
                  </li>
                </>
              )}
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
          {/* <li >
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
            <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/about"}>About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object,
};

export default NavMenu;
