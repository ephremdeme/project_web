import React, { useState, useEffect } from "react";

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
import { UPLOAD_IMAGE, ADD_PRODUCT, GET_CATEGORY } from "./graphql";
import { MDBSelect } from "mdbreact";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    categoryId: "",
    image: ""
  });

  const [options, setOptions] = useState([]);

  const { error: cErr, loading: cLoading, data: cData } = useQuery(
    GET_CATEGORY
  );

  useEffect(() => {
    let data = [];
    if (cData) {
      cData.categories.map(item => {
        data.push({
          text: item.category,
          value: item.id.toString()
        });
      });
      setOptions(data);
    }
    console.log("updated");
  }, [cData]);

  const [AddProduct, { error, loading, data: mdata }] = useMutation(
    ADD_PRODUCT
  );

  const handleChange = e => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleCategoryChange = e => {
    setValues({ ...values, categoryId: e[0] });
  };

  const handleFileChange = e => {
    const file = e[0];
    setValues({
      ...values,
      image: file
    });
  };

  const submit = e => {
    values.price = parseFloat(values.price);
    values.quantity = parseInt(values.quantity);
    values.categoryId = parseInt(values.categoryId);
    AddProduct({
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
              <MDBSelect
                options={options}
                selected="Choose Category"
                color="primary"
                getValue={handleCategoryChange}
                label="Select Category"
              />
              <MDBFileInput getValue={handleFileChange} />

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
