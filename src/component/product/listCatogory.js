import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon } from "mdbreact";
import { Title } from "../../util";
import { MDBCarouselInner } from "mdbreact";
import { MDBCarousel } from "mdbreact";
import { MDBCarouselItem } from "mdbreact";

const Catagory = () => {
  return (
    <section className=" my-5 mx-3">
      <Title title="Browse Catagory" />
      <MDBCarousel
        activeItem={1}
        length={3}
        slide={true}
        showControls={false}
        showIndicators={true}
        multiItem
      >
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard collection className="z-depth-1-half">
                  <div className="view zoom">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          Electronics <MDBIcon icon="angle-right" />
                        </p>
                      </a>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard collection className="z-depth-1-half">
                  <div className="view zoom">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          Sweatshirt <MDBIcon icon="angle-right" />
                        </p>
                      </a>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard collection className="z-depth-1-half">
                  <div className="view zoom">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          Accessories <MDBIcon icon="angle-right" />
                        </p>
                      </a>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard collection className="z-depth-1-half">
                  <div className="view zoom">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          Sweatshirt <MDBIcon icon="angle-right" />
                        </p>
                      </a>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          
            <MDBCarouselItem itemId="2">
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard collection className="z-depth-1-half">
                  <div className="view zoom">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          Electronics <MDBIcon icon="angle-right" />
                        </p>
                      </a>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard collection className="z-depth-1-half">
                  <div className="view zoom">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          Sweatshirt <MDBIcon icon="angle-right" />
                        </p>
                      </a>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard collection className="z-depth-1-half">
                  <div className="view zoom">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          Accessories <MDBIcon icon="angle-right" />
                        </p>
                      </a>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard collection className="z-depth-1-half">
                  <div className="view zoom">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          Sweatshirt <MDBIcon icon="angle-right" />
                        </p>
                      </a>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          
            <MDBCarouselItem itemId="3">
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard collection className="z-depth-1-half">
                  <div className="view zoom">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          Electronics <MDBIcon icon="angle-right" />
                        </p>
                      </a>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard collection className="z-depth-1-half">
                  <div className="view zoom">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          Sweatshirt <MDBIcon icon="angle-right" />
                        </p>
                      </a>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard collection className="z-depth-1-half">
                  <div className="view zoom">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          Accessories <MDBIcon icon="angle-right" />
                        </p>
                      </a>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard collection className="z-depth-1-half">
                  <div className="view zoom">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          Sweatshirt <MDBIcon icon="angle-right" />
                        </p>
                      </a>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </section>
  );
};

export default Catagory;
