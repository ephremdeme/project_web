import React from "react";
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
  MDBBtn
} from "mdbreact";
import { AppTooltip } from "../../util";
import { MDBRating } from "mdbreact";

const handleValue=props=>{
  console.log(props)
}

const EcommercePage = () => {
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
              <div className="rating">
                <MDBRating feedback getValue={handleValue} tag="li"> </MDBRating>
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
        </MDBCol>

        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/4.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Outwear</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Brown coat</a>
                </strong>
              </MDBCardTitle>
              <ul className="rating">
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon far icon="star-half" />
                </li>
              </ul>
              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>59$</strong>
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
        </MDBCol>

        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/3.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Blouses</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Shirt</a>
                </strong>
              </MDBCardTitle>
              <ul className="rating">
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon far icon="star" />
                </li>
              </ul>
              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>119$</strong>
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
        </MDBCol>

        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/2.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Shoes</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">High heels</a>
                </strong>
              </MDBCardTitle>
              <ul className="rating">
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
              </ul>
              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>89$</strong>
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
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default EcommercePage;
