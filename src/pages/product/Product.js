import PropTypes from "prop-types";
import React, { Fragment, Suspense, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../wrappers/product/graphql";
import Skeleton from "react-loading";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import { PHOTO_LINK } from "../../config";

const Product = ({ location, match }) => {
  const { pathname } = location;

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: {
      id: parseInt(match.params.id),
    },
  });

  const [view, setView] = useState(false);

  useEffect(() => {
    if (data) {
      let product = Object.assign({}, data?.product);
      product.discount = 10;
      product.new = true;

      product.shortDescription = `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
          nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in 
          ea voluptate velit esse quam nihil molestiae consequatur.`;
      product.fullDescription = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
          beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`;
      product.image = product?.images?.map(
        (image) => PHOTO_LINK + product.id + "/images/" + image.filename
      );

      setView(<LoadProduct product={product} />);
    }
  }, [data]);

  return (
    <Fragment>
      <MetaTags>
        <title>Shop In AR | Product Page</title>
        <meta
          name="description"
          content="Product page of Shop In AR react minimalist eCommerce template."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Shop Product
      </BreadcrumbsItem>

      {/* breadcrumb */}
      <Breadcrumb />
      <Suspense fallback={<Skeleton row={5} width={2050} />}>
        {data && view}
      </Suspense>
    </Fragment>
  );
};

const LoadProduct = ({ product }) => {
  console.log(product);
  return (
    <React.Fragment>
      {/* product description with image */}
      <ProductImageDescription
        spaceTopClass="pt-100"
        spaceBottomClass="pb-100"
        product={product}
      />

      {/* product description tab */}
      <ProductDescriptionTab
        spaceBottomClass="pb-90"
        reviewCount={product.rating.count}
        productFullDesc={product.fullDescription}
      />

      {/* related product slider */}
      <RelatedProductSlider
        spaceBottomClass="pb-95"
        category={product?.category?.id}
      />
    </React.Fragment>
  );
};

Product.propTypes = {
  location: PropTypes.object,
  product: PropTypes.object,
};

export default Product;
