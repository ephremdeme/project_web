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
    subCategoryId: "",
    image: ""
  });

  const [options, setOptions] = useState({
    category: [],
    subCategory: [],
    option: {}
  });

  const { error: cErr, loading: cLoading, data: cData } = useQuery(
    GET_CATEGORY
  );

  useEffect(() => {
    let data = [];
    let subdata = {};
    if (cData) {
      cData.categories.map(item => {
        data.push({
          text: item.category,
          value: item.id.toString()
        });
        subdata[item.id.toString()] = [];
        item.SubCategory.map(sub => {
          
          subdata[item.id.toString()].push({
            text: sub.category,
            value: sub.id.toString()
          });
        });
      });
      setOptions({...options,
        category: data,
        option: subdata
      });
    }
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
    if(options.option[e[0]]){
      setOptions({...options, subCategory: options.option[e[0]]})}
      else{
        setOptions({...options, subCategory: []})
      }
  };

  const handleSubCategoryChange = e => {
    setValues({ ...values, subCategoryId: e[0] });
  }

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
    values.subCategoryId = parseInt(values.subCategoryId);
    console.log(values)
    AddProduct({
      variables: values
    });
  };
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
                options={options.category}
                selected="Choose Category"
                color="primary"
                getValue={handleCategoryChange}
                label="Select Category"
              />
              <MDBSelect
                options={options.subCategory}
                selected="Choose Sub Category"
                color="primary"
                getValue={handleSubCategoryChange}
                label="Select Sub Category"
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
