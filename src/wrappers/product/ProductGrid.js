import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import React, { Suspense, useEffect, useState } from "react";
import ProductGridSingle from "../../component/product/ProductGridSingle";
import { GET_PRODUCTS } from "./graphql";

const ProductGrid = ({
  products,
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItems,
  wishlistItems,
  compareItems,
  sliderClassName,
  spaceBottomClass,
}) => {
  const { error, loading, data } = useQuery(GET_PRODUCTS);

  if (error) return <h2>{" An Error has occurred:  " + error.message}</h2>;
  return (
    <Suspense fallback={<h1> Loading Products </h1>}>
      {data?.products?.map((item) => {
        let product = Object.assign({}, item);
        product.discount = 10;
        product.new = true;
        product.variation = [
          {
            color: "white",
            image:
              "http://10.240.72.53:5001/products/" +
              product.id +
              "/images/" +
              product.images[0].filename,
            size: [
              {
                name: "x",
                stock: 3,
              },
              {
                name: "m",
                stock: 2,
              },
              {
                name: "xl",
                stock: 5,
              },
            ],
          },
          {
            color: "black",
            image: "/assets/img/product/fashion/8.jpg",
            size: [
              {
                name: "x",
                stock: 4,
              },
              {
                name: "m",
                stock: 7,
              },
              {
                name: "xl",
                stock: 9,
              },
              {
                name: "xxl",
                stock: 1,
              },
            ],
          },
          {
            color: "brown",
            image: "/assets/img/product/fashion/3.jpg",
            size: [
              {
                name: "x",
                stock: 1,
              },
              {
                name: "m",
                stock: 2,
              },
              {
                name: "xl",
                stock: 4,
              },
              {
                name: "xxl",
                stock: 0,
              },
            ],
          },
        ];
        product.shortDescription = `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
          nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in 
          ea voluptate velit esse quam nihil molestiae consequatur.`;
        product.fullDescription = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
          beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`;
        product.image = product?.images?.map(
          (image) =>
            "http://10.240.72.53:5001/products/" +
            product.id +
            "/images/" +
            image.filename
        );

        return (
          <ProductGridSingle
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            product={product}
            currency={currency}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            addToCompare={addToCompare}
            // cartItem={
            //   cartItems.filter((cartItem) => cartItem.id === product.id)[0]
            // }
            // wishlistItem={
            //   wishlistItems.filter(
            //     (wishlistItem) => wishlistItem.id === product.id
            //   )[0]
            // }
            // compareItem={
            //   compareItems.filter(
            //     (compareItem) => compareItem.id === product.id
            //   )[0]
            // }
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
  cartItems: PropTypes.array,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItems: PropTypes.array,
};

export default ProductGrid;
