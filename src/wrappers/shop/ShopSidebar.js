import PropTypes from "prop-types";
import React from "react";

import ShopSearch from "./ShopSearch";

// import ShopColor from "./ShopColor";
// import ShopSize from "./ShopSize";
// import ShopTag from "./ShopTag";
import ShopCategories from "./ShopCategories";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY } from "../product/graphql";

const ShopSidebar = ({ products, getSortParams, sideSpaceClass }) => {
  const { loading, error, data } = useQuery(GET_CATEGORY);

  const uniqueCategories = [];

  return (
    <div className={`sidebar-style ${sideSpaceClass ? sideSpaceClass : ""}`}>
      {/* shop search */}
      <ShopSearch />

      {/* filter by categories */}
      <ShopCategories
        categories={data?.categories}
        getSortParams={getSortParams}
      />

      {/* filter by color
      <ShopColor colors={uniqueColors} getSortParams={getSortParams} />

      {/* filter by size */}
      {/* <ShopSize sizes={uniqueSizes} getSortParams={getSortParams} /> */}

      {/* filter by tag */}
      {/* <ShopTag tags={uniqueTags} getSortParams={getSortParams} /> */}
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
  sideSpaceClass: PropTypes.string,
};

export default ShopSidebar;
