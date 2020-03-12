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
import { REGISTER_USER } from "../Auth/graphql";

import { Loading } from "mutation-cache-update";
import { MDBFileInput } from "mdbreact";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    category:"",
    image:""
  });

  const [addUser, { error, loading, data: mdata }] = useMutation(REGISTER_USER);
  if (error) console.log(error);
  if (mdata) console.log(mdata);

  const handleChange = e => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleFileChange = e => {
    const file = e[0];
    setValues({
      ...values,
      image: file
    });
  };

  const submit = e => {
    addUser({
      variables: values
    });
  };
  if (loading) return <Loading />;
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol md="6" className="justify-content-center">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Add Product</strong>
                </h3>
              </div>
              <MDBInput
                label="Product Name"
                group
                type="text"
                name="name"
                validate
                error="wrong"
                onChange={handleChange}
                success="right"
              />
              <MDBInput
                label="Product Price"
                group
                type="number"
                name="price"
                validate
                error="wrong"
                onChange={handleChange}
                success="right"
              />
              <MDBInput
                label="Quantity"
                group
                type="number"
                name="quantity"
                validate
                error="wrong"
                onChange={handleChange}
                success="right"
              />
              <MDBFileInput getValue={handleFileChange}/>

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
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AddProduct;
