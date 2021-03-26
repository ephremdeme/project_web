import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";

import NavMenu from "../component/header/NavMenu";
import IconGroup from "../component/header/IconGroup";
import Logo from "../component/header/Logo";
import MobileMenu from "../component/header/MobileMenu";

const Header = ({
  layout,
  top,
  borderStyle,
  headerPaddingClass,
  headerPositionClass,
  headerBgClass,
}) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`header-area clearfix ${headerBgClass ? headerBgClass : ""} ${
        headerPositionClass ? headerPositionClass : ""
      }`}
    >
      <div
        className={`${headerPaddingClass ? headerPaddingClass : ""} ${
          top === "visible" ? "d-none d-lg-block" : "d-none"
        } header-top-area ${
          borderStyle === "fluid-border" ? "border-none" : ""
        }`}
      ></div>

      <div
        className={` ${
          headerPaddingClass ? headerPaddingClass : ""
        } sticky-bar header-res-padding clearfix ${
          scroll > headerTop ? "stick" : ""
        }`}
      >
        <div className={layout === "container-fluid" ? layout : "container"}>
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              {/* header logo */}
              {/* <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" /> */}
              <a href="/">
                <h1
                  style={{ height: "26px", fontWeight: "lighter" }}
                  className="logo dark-grey-text font-weight-bold"
                >
                  AR Shop
                </h1>
              </a>
            </div>
            <div className="col-xl-8 col-lg-8 d-none d-lg-block">
              {/* Nav menu */}
              <NavMenu />
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-8">
              {/* Icon group */}
              <IconGroup />
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

Header.propTypes = {
  borderStyle: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  layout: PropTypes.string,
  top: PropTypes.string,
};

const AppHeader = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Shop In AR | Home</title>
      </MetaTags>
      <Header layout="container-fluid" headerPaddingClass="header-padding-1" />
    </React.Fragment>
  );
};

export default AppHeader;
