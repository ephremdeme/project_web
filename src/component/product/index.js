import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBIcon,
  MDBTooltip,
  MDBBadge,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBBtn,
} from "mdbreact";
import { AppTooltip } from "../../util";
import { MDBRating } from "mdbreact";
import { useQuery, useMutation } from "react-apollo";
import { GET_PRODUCTS, ADD_RATE } from "./graphql";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const cart = {};

const AddToCart = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    const data = props.data;
    cart[data.id] = data;
    console.log(cart, "clicked");
  };
  return (
    <React.Fragment>
      <AppTooltip text="Add to Cart" id="TooltipExample">
        <a id="TooltipExample" onClick={handleClick} href="#">
          <i className="fa fa-shopping-cart grey-text ml-3"></i>
        </a>
      </AppTooltip>
    </React.Fragment>
  );
};

const ProductItem = (props) => {
  const { id, name, price, category, images, rating } = props.product;

  const [basic, setBasic] = useState([
    {
      tooltip: "Very Bad",
    },
    {
      tooltip: "Poor",
    },
    {
      tooltip: "Okay",
    },
    {
      tooltip: "Good",
    },
    {
      tooltip: "Excellent",
    },
  ]);

  const [addRate, {}] = useMutation(ADD_RATE);
  const handleValue = (data) => {
    // const { title, value } = data;
    // if (value) {
    //   // addRate({
    //   //   variables: {
    //   //     ProductId: id,
    //   //     rating: value,
    //   //   }
    //   // });

    // }
    addRate({
      variables: {
        ProductId: id,
        rating: data,
      },
    });
    console.log(data);
  };
  return (
    <React.Fragment>
      <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
        <MDBCard cascade narrow ecommerce>
          <MDBCardImage
            cascade
            src={"http://127.0.0.1:5000/images/" + images[0].filename}
            top
            alt="sample photo"
            overlay="white-slight"
          />
          <MDBCardBody cascade className="text-center">
            <a href="#!" className="grey-text">
              <h5>{category.category}</h5>
            </a>
            <MDBCardTitle>
              <strong className="fas fa-star-o fa-2x">
                <a href="#!">{name}</a>
              </strong>
            </MDBCardTitle>
            <div className="d-flex justify-content-center">
              {/* <MDBRating  getValue={handleValue} tag="li" /> */}

              <Rating
                initialRating={rating.rating}
                fractions={2}
                onChange={handleValue}

                // onClick={(v)=>alert(v + "clicked")}
              />
            </div>
            <div>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              <Link
                className="black-text d-flex justify-content-end"
                to={"/products/" + id}
              >
                <h5>
                  Read more
                  <MDBIcon icon="angle-double-right" className="ml-2" />
                </h5>
              </Link>
            </div>

            <MDBCardFooter className="px-1">
              <span className="float-left font-weight-bold">
                <strong>{price}$</strong>
              </span>
              <span className="float-right">
                <AddToCart data={props.product} />

                <AppTooltip text="Share" id="TooltipExample1">
                  <a id="TooltipExample1" href="#!">
                    <i className="fa fa-share-alt grey-text ml-3"></i>
                  </a>
                </AppTooltip>
                <AppTooltip text="Added to watchlist" id="TooltipExample2">
                  <a id="TooltipExample2" href="#!">
                    <i className="fa fa-heart ml-3"></i>
                  </a>
                </AppTooltip>
              </span>
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </React.Fragment>
  );
};

const EcommercePage = () => {
  const { error, loading, data } = useQuery(GET_PRODUCTS);
  if (error) return <div>Error</div>;

  return (
    <section className="text-center my-5 mx-3">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our bestsellers
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        {data.products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
        {/*         
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Denim</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Denim trousers</a>
                </strong>
              </MDBCardTitle>
              <div className="d-flex justify-content-center">
                <MDBRating feedback getValue={handleValue} tag="li">
                  
                </MDBRating>
              </div>
              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>49$</strong>
                </span>
                <span className="float-right">
                  <AppTooltip text="Add to Cart" id="TooltipExample">
                    <a id="TooltipExample" href="#!">
                      <i className="fa fa-shopping-cart grey-text ml-3"></i>
                    </a>
                  </AppTooltip>
                  <AppTooltip text="Share" id="TooltipExample1">
                    <a id="TooltipExample1" href="#!">
                      <i className="fa fa-share-alt grey-text ml-3"></i>
                    </a>
                  </AppTooltip>
                  <AppTooltip text="Added to watchlist" id="TooltipExample2">
                    <a id="TooltipExample2" href="#!">
                      <i className="fa fa-heart ml-3"></i>
                    </a>
                  </AppTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol> */}
      </MDBRow>
    </section>
  );
};

export default EcommercePage;
// fcc83170066-99db-46b5-91a6-addbfe4a77c5