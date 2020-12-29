import { useMutation, useReactiveVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Card, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { authDataVar } from "../../authReactive";
import { LOGIN_USER } from "./graphql";

const AppLogin = (props) => {
  let user = useReactiveVar(authDataVar);
  if (user?.username) {
    props.history.goBack();
  }

  const [values, setValues] = useState({
    phone: "",
    password: "",
  });

  const [loginUser, { error, data, loading }] = useMutation(LOGIN_USER);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", `${data?.login?.token}`);

      authDataVar({
        id: data?.login?.id,
        token: data?.login?.token,
        username: data?.login?.User?.username,
      });
      props.history.goBack();
    }
  }, [data]);

  const handleSubmit = () => {
    loginUser({
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
                      LOG IN
                    </h3>
                  </Row>
                </div>
                <Card.Body className="mx-4 my-5">
                  <Form.Group className="mt-5" controlId="username">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      aria-label="Your Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="phone"
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
                      disabled={loading}
                      onClick={handleSubmit}
                    >
                      Log in
                    </Button>
                  </div>

                  <p className="font-small grey-text d-flex justify-content-center">
                    Don't have an account?
                    <Link
                      to="/register"
                      className="dark-grey-text font-weight-bold ml-1"
                    >
                      Sign Up
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

export default AppLogin;
