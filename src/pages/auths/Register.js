import { useMutation, useReactiveVar } from "@apollo/client";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Card, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { authDataVar } from "../../authReactive";
import { LOGIN_USER, REGISTER_USER } from "./graphql";

const AppRegister = (props) => {
  let user = useReactiveVar(authDataVar);
  if (user?.username) {
    props.history.goBack();
  }

  const [values, setValues] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
  });

  const [createUser, { error, data, loading }] = useMutation(REGISTER_USER);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setValues({
      ...values,
      [name]: value,
    });
  };

  if (data) {
    localStorage.setItem("token", `${data.createUser.token}`);
    authDataVar({
      id: data.createUser.id,
      token: data.createUser.token,
      username: data.createUser.User.username,
    });
    props.history.goBack();
  }

  const handleSubmit = () => {
    createUser({
      variables: values,
    });
  };

  return (
    <React.Fragment>
      <section className="d-flex justify-content-center mt-5">
        <Container>
          <Row className="justify-content-center mt-4">
            <Col md="6">
              <Card>
                <div className="header pt-3 grey lighten-2">
                  <Row className="d-flex justify-content-center">
                    <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                      REGISTER
                    </h3>
                  </Row>
                </div>
                <Card.Body className="mx-4 my-5">
                  <Form.Group className="mt-5" controlId="first_name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      aria-label="First Name"
                      name="first_name"
                      type="text"
                      placeholder="First Name"
                      onChange={(e) => handleChange(e)}
                    />
                  </Form.Group>
                  <Form.Group className="mt-5" controlId="last_name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      aria-label="Last Name"
                      name="last_name"
                      type="text"
                      placeholder="Last Name"
                      onChange={(e) => handleChange(e)}
                    />
                  </Form.Group>
                  <Form.Group className="mt-5" controlId="Phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      aria-label=" Phone Number"
                      name="phone"
                      type="text"
                      placeholder="Phone"
                      onChange={(e) => handleChange(e)}
                    />
                  </Form.Group>
                  <Form.Group className="mt-5" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      aria-label="Your Username"
                      name="username"
                      type="text"
                      placeholder="Username"
                      onChange={(e) => handleChange(e)}
                    />
                  </Form.Group>

                  <Form.Group className="my-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={(e) => handleChange(e)}
                    />
                  </Form.Group>

                  <div className="text-center my-4 pt-4">
                    <Button
                      variant="danger"
                      type="button"
                      className="btn-block z-depth-2"
                      onClick={handleSubmit}
                    >
                      Register
                    </Button>
                  </div>

                  <p className="font-small grey-text d-flex justify-content-center">
                    Already have an account?
                    <Link
                      to="/login"
                      className="dark-grey-text font-weight-bold ml-1"
                    >
                      login
                    </Link>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AppRegister;
