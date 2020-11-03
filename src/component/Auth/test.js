import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBStepper,
  MDBStep,
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput
} from "mdbreact";
import { SectionContainer } from "../../util";

class TestRegister extends Component {
  state = {
    formActivePanel1: 1,
    formActivePanel1Changed: false,
    formActivePanel2: 1,
    formActivePanel2Changed: false,
    formActivePanel3: 1,
    formActivePanel3Changed: false
  };

  swapFormActive = a => param => e => {
    this.setState({
      [`formActivePanel${a}`]: param,
      [`formActivePanel${a}Changed`]: true
    });
  };

  handleNextPrevClick = a => param => e => {
    this.setState({
      [`formActivePanel${a}`]: param,
      [`formActivePanel${a}Changed`]: true
    });
  };

  handleSubmission = () => {
    alert("Form submitted!");
  };

  calculateAutofocus = a => {
    if (this.state[`formActivePanel${a}Changed`]) {
      return true;
    }
  };
  render() {
    return (
      <MDBContainer>
        <SectionContainer header="Registration form with steps" noBorder>
          <MDBCard>
            <MDBCardBody>
              <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2">
                <strong>Registration form</strong>
              </h2>
              <MDBStepper icon>
                <MDBStep
                  icon="folder-open"
                  stepName="Basic Information"
                  onClick={this.swapFormActive(2)(1)}
                />
                <MDBStep
                  icon="pencil-alt"
                  stepName="Personal Data"
                  onClick={this.swapFormActive(2)(2)}
                />
                <MDBStep
                  icon="image"
                  stepName="Terms and Conditions"
                  onClick={this.swapFormActive(2)(3)}
                />
                <MDBStep
                  icon="check"
                  stepName="Finish"
                  onClick={this.swapFormActive(2)(4)}
                />
              </MDBStepper>

              <form action="" method="post">
                <MDBRow>
                  {this.state.formActivePanel2 === 1 && (
                    <MDBCol md="12">
                      <h3 className="font-weight-bold pl-0 my-4">
                        <strong>Basic Information</strong>
                      </h3>
                      <MDBInput
                        label="Email"
                        className="mt-4"
                        autoFocus={this.calculateAutofocus(2)}
                      />
                      <MDBInput label="Username" className="mt-4" />
                      <MDBInput label="Password" className="mt-4" />
                      <MDBInput label="Repeat Password" className="mt-4" />
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-right"
                        onClick={this.handleNextPrevClick(2)(2)}
                      >
                        next
                      </MDBBtn>
                    </MDBCol>
                  )}
                  {this.state.formActivePanel2 === 2 && (
                    <MDBCol md="12">
                      <h3 className="font-weight-bold pl-0 my-4">
                        <strong>Personal Data</strong>
                      </h3>
                      <MDBInput
                        label="First Name"
                        className="mt-3"
                        autoFocus={this.calculateAutofocus(2)}
                      />
                      <MDBInput label="Second Name" className="mt-3" />
                      <MDBInput label="Surname" className="mt-3" />
                      <MDBInput label="Address" type="textarea" rows="2" />
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-left"
                        onClick={this.handleNextPrevClick(2)(1)}
                      >
                        previous
                      </MDBBtn>
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-right"
                        onClick={this.handleNextPrevClick(2)(3)}
                      >
                        next
                      </MDBBtn>
                    </MDBCol>
                  )}
                  {this.state.formActivePanel2 === 3 && (
                    <MDBCol md="12">
                      <h3 className="font-weight-bold pl-0 my-4">
                        <strong>Terms and conditions</strong>
                      </h3>
                      <MDBInput
                        label="I agreee to the terms and conditions"
                        type="checkbox"
                        id="checkbox"
                        autoFocus={this.calculateAutofocus(2)}
                      />
                      <MDBInput
                        label="I want to receive newsletter"
                        type="checkbox"
                        id="checkbox2"
                      />
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-left"
                        onClick={this.handleNextPrevClick(2)(2)}
                      >
                        previous
                      </MDBBtn>
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-right"
                        onClick={this.handleNextPrevClick(2)(4)}
                      >
                        next
                      </MDBBtn>
                    </MDBCol>
                  )}

                  {this.state.formActivePanel2 === 4 && (
                    <MDBCol md="12">
                      <h3 className="font-weight-bold pl-0 my-4">
                        <strong>Finish</strong>
                      </h3>
                      <h2 className="text-center font-weight-bold my-4">
                        Registration completed!
                      </h2>
                      <MDBBtn
                        color="mdb-color"
                        rounded
                        className="float-left"
                        onClick={this.handleNextPrevClick(2)(3)}
                      >
                        previous
                      </MDBBtn>
                      <MDBBtn
                        color="success"
                        rounded
                        className="float-right"
                        onClick={this.handleSubmission}
                      >
                        submit
                      </MDBBtn>
                    </MDBCol>
                  )}
                </MDBRow>
              </form>
            </MDBCardBody>
          </MDBCard>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default TestRegister;

