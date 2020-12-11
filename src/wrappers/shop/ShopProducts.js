import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { PHOTO_LINK } from "../../config";
import ProductgridList from "../product/ProductgridList";

const ShopProducts = ({ products, layout }) => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    setAllProducts(
      products?.map((product) => {
        let pr = Object.assign({}, product);
        pr.images = product?.images?.map(
          (image) =>
            PHOTO_LINK +
            product.id +
            "/images/" +
            image.filename
        );

        return pr;
      })
    );
  }, [products]);
  return (
    <div className="shop-bottom-area mt-35">
      <div className={`row ${layout ? layout : ""}`}>
        <ProductgridList products={allProducts} spaceBottomClass="mb-25" />
      </div>
    </div>
  );
};

ShopProducts.propTypes = {
  layout: PropTypes.string,
  products: PropTypes.array,
};

export default ShopProducts;
