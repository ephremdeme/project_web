import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter
} from "mdbreact";
import { MDBLink } from "mdbreact";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo";
import { REGISTER_USER } from "./graphql";

import { Loading } from "mutation-cache-update";
const RegisterPage = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  });

  const [addUser, { error, loading, data : mdata}] = useMutation(REGISTER_USER);
  if (error) console.log(error);
  if (mdata) console.log(mdata);

  const handleChange = e => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submit = e => {
    addUser({
      variables: values
    });
  };
  if(loading) return <Loading/>
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol md="6" className="justify-content-center">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign Up</strong>
                </h3>
              </div>
              <MDBInput
                label="Your First Name"
                group
                type="text"
                name="first_name"
                validate
                error="wrong"
                onChange={handleChange}
                success="right"
              />
              <MDBInput
                label="Your Last Name"
                group
                type="text"
                name="last_name"
                validate
                error="wrong"
                onChange={handleChange}
                success="right"
              />
              <MDBInput
                label="Your email"
                group
                type="email"
                name="email"
                validate
                error="wrong"
                onChange={handleChange}
                success="right"
              />
              <MDBInput
                label="Your Phone Number"
                group
                type="tel"
                name="phone"
                validate
                error="wrong"
                onChange={handleChange}
                success="right"
              />
              <MDBInput
                label="Your password"
                group
                name="password"
                type="password"
                onChange={handleChange}
                validate
                containerClass="mb-0"
              />

              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={submit}
                >
                  Register
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon
                    fab
                    icon="facebook-f"
                    className="blue-text text-center"
                  />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a mx-2"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Already a member?
                <Link to="/login" className="blue-text ml-1">
                  Sign In
                </Link>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default RegisterPage;
