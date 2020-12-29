import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import PropTypes from "prop-types";
import React, { Suspense, useEffect, useState } from "react";
import { cartItemsVar, wishlistItemsVar } from "../../authReactive";
import ProductGridSingle from "../../component/product/ProductGridSingle";
import { PHOTO_LINK } from "../../config";
import { addToCart } from "../../pages/other/cartHelper";
import { ADD_TO_WISHLIST } from "../../pages/other/graphql";
import { addToWishlist } from "../../pages/other/wishlistHelper";

const ProductGrid = ({
  category,
  products,
  sliderClassName,
  spaceBottomClass,
}) => {
  let cartItems = useReactiveVar(cartItemsVar);
  let wishlistItems = useReactiveVar(wishlistItemsVar);
  let [addToWishlistServer, { loading, error, data }] = useMutation(
    ADD_TO_WISHLIST
  );
  return (
    <Suspense fallback={<h1> Loading Products </h1>}>
      {products?.map((item) => {
        let product = Object.assign({}, item);
        // product.discount = 10;
        // product.new = true;
        product.shortDescription = `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
          nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in 
          ea voluptate velit esse quam nihil molestiae consequatur.`;
        product.fullDescription = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
          beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`;
        product.images = product?.images?.map(
          (image) => PHOTO_LINK + product.id + "/images/" + image.filename
        );

        return (
          <ProductGridSingle
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
    </Suspense>
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
