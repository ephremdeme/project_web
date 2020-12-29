import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import Paginator from "react-hooks-paginator";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import ShopProducts from "../../wrappers/shop/ShopProducts";
import ShopSide from "../../wrappers/shop/ShopSidebar";

import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ShopTopAction from "../../wrappers/shop/ShopTopAction";
import { useQuery } from "@apollo/client";
import {
  GET_ALL_PRODUCTS,
  GET_CATEGORY_PRODUCTS,
} from "../../wrappers/product/graphql";
import Loading from "react-loading";

const ShopGridStandard = ({ location }) => {
  const [layout, setLayout] = useState("grid three-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("All");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const { loading, data, error } = useQuery(GET_CATEGORY_PRODUCTS, {
    variables: { id: sortValue === "All" ? 0 : sortValue },
  });

  const { loading: pLoading, data: allProducts, error: pError } = useQuery(
    GET_ALL_PRODUCTS,
    {
      variables: { limit: 15 },
    }
  );

  useEffect(() => {
    if (sortValue === "All") {
      setProducts(allProducts?.products.products);
      setCurrentData(allProducts?.products.products);
    } else {
      setProducts(data?.category.products);
      setCurrentData(data?.category.products);
    }
  }, [allProducts, data, sortValue]);

  const [products, setProducts] = useState([]);

  const pageLimit = 15;
  const { pathname } = location;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  //   useEffect(() => {
  //     let sortedProducts = getSortedProducts(products, sortType, sortValue);
  //     const filterSortedProducts = getSortedProducts(
  //       sortedProducts,
  //       filterSortType,
  //       filterSortValue
  //     );
  //     sortedProducts = filterSortedProducts;
  //     setSortedProducts(sortedProducts);
  //     setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  //   }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  if (pLoading || loading)
    return (
      <div className="shop-area pt-95 pb-100">
        <div className="container">
          <Loading className="container" color="#000" type="bars" />
        </div>
      </div>
    );

  return (
    <Fragment>
      <MetaTags>
        <title>Shop In AR | Shop Page</title>
        <meta
          name="description"
          content="Shop page of Shop In AR react minimalist eCommerce template."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Shop
      </BreadcrumbsItem>

      {/* breadcrumb */}
      <Breadcrumb />

      <div className="shop-area pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              {/* shop sidebar */}
              <ShopSide
                // products={products}
                getSortParams={getSortParams}
                sideSpaceClass="mr-30"
              />
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              {/* shop topbar default */}
              <ShopTopAction
                getLayout={getLayout}
                getFilterSortParams={getFilterSortParams}
                productCount={products?.length}
                sortedProductCount={currentData?.length}
              />

              {/* shop page content default */}
              <ShopProducts layout={layout} products={currentData} />

              {/* shop product pagination */}
              <div className="pro-pagination-style text-center mt-30">
                <Paginator
                  totalRecords={sortedProducts.length}
                  pageLimit={pageLimit}
                  pageNeighbours={2}
                  setOffset={setOffset}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageContainerClass="mb-0 mt-0"
                  pagePrevText="«"
                  pageNextText="»"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ShopGridStandard.propTypes = {
  location: PropTypes.object,
  products: PropTypes.array,
};

export default ShopGridStandard;
