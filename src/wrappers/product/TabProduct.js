import PropTypes from "prop-types";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SectionTitle from "../../helpers/SectionTitle";
import ProductGrid from "./ProductGrid";
import { useQuery } from "@apollo/client";
import { GET_POPULAR_PRODUCTS, GET_ALL_PRODUCTS } from "./graphql";
import Loading from "react-loading";
const TabProduct = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass,
  category,
}) => {
  return (
    <div
      className={`product-area my-5 ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${bgColorClass ? bgColorClass : ""}`}
    >
      <div className="container">
        <SectionTitle
          titleText="DAILY DEALS!"
          positionClass="mt-5 text-center"
        />
        <Tab.Container defaultActiveKey="newArrival">
          <Nav
            variant="pills"
            className="product-tab-list pt-30 pb-55 text-center"
          >
            <Nav.Item>
              <Nav.Link eventKey="newArrival">
                <h4>New Arrivals</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bestSeller">
                <h4>Best Sellers</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="mostViewed">
                <h4>Most Viewed</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <NewArrivedProducts />
            <MostViewedProducts />
            <BestSellerProducts />
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

const BestSellerProducts = () => {
  const { loading, data, error } = useQuery(GET_ALL_PRODUCTS, {
    variables: { limit: 10 },
  });
  if (loading)
    return (
      <Tab.Pane eventKey="bestSeller">
        <div className="row">
          <Loading className="container" color="#000" type="bars" />
        </div>
      </Tab.Pane>
    );
  return (
    <React.Fragment>
      <Tab.Pane eventKey="bestSeller">
        <div className="row">
          <ProductGrid
            products={data?.products.products}
            type="bestSeller"
            limit={8}
            spaceBottomClass="mb-25"
          />
        </div>
      </Tab.Pane>
    </React.Fragment>
  );
};

const MostViewedProducts = () => {
  const { loading, data, error } = useQuery(GET_POPULAR_PRODUCTS, {
    variables: { limit: 10 },
  });

  if (loading)
    return (
      <Tab.Pane eventKey="mostViewed">
        <div className="row">
          <Loading className="container" color="#000" type="bars" />
        </div>
      </Tab.Pane>
    );
  return (
    <React.Fragment>
      <Tab.Pane eventKey="mostViewed">
        <div className="row">
          <ProductGrid
            products={data?.popularProducts.products}
            type="bestSeller"
            limit={8}
            spaceBottomClass="mb-25"
          />
        </div>
      </Tab.Pane>
    </React.Fragment>
  );
};
const NewArrivedProducts = () => {
  const { loading, data, error } = useQuery(GET_ALL_PRODUCTS, {
    variables: { limit: 10 },
  });
  if (loading)
    return (
      <Tab.Pane eventKey="newArrival">
        <div className="row">
          <Loading className="container" color="#000" type="bars" />
        </div>
      </Tab.Pane>
    );
  return (
    <React.Fragment>
      <Tab.Pane eventKey="newArrival">
        <div className="row">
          <ProductGrid
            products={data?.products.products}
            type="bestSeller"
            limit={8}
            spaceBottomClass="mb-25"
          />
        </div>
      </Tab.Pane>
    </React.Fragment>
  );
};

TabProduct.propTypes = {
  bgColorClass: PropTypes.string,
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default TabProduct;
