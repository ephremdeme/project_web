import { useMutation, useReactiveVar } from "@apollo/client";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { cartItemsVar, wishlistItemsVar } from "../../authReactive";
import ProductGridListSingle from "../../component/product/ProductGridListSingle";
import { addToCart } from "../../pages/other/cartHelper";
import {
  ADD_TO_WISHLIST,
  REMOVE_ALL_WISHLIST,
  REMOVE_WISHLIST,
} from "../../pages/other/graphql";
import { addToWishlist } from "../../pages/other/wishlistHelper";

const ProductGrid = ({ products, sliderClassName, spaceBottomClass }) => {
  const cartItems = useReactiveVar(cartItemsVar);
  const wishlistItems = useReactiveVar(wishlistItemsVar);
  let [addToWishlistServer, { loading, error, data }] = useMutation(
    ADD_TO_WISHLIST
  );
  

  console.log("Data", data);
  return (
    <Fragment>
      {products?.map((product) => {
        return (
          <ProductGridListSingle
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            addToWishlistServer={addToWishlistServer}
            cartItem={
              cartItems.filter((cartItem) => cartItem.id === product.id)[0]
            }
            wishlistItem={
              wishlistItems.filter(
                (wishlistItem) => wishlistItem.id === product.id
              )[0]
            }
            key={product.id}
          />
        );
      })}
    </Fragment>
  );
};

ProductGrid.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  addToWishlistServer: PropTypes.func,
  cartItems: PropTypes.array,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItems: PropTypes.array,
};

export default ProductGrid;
