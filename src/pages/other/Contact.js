import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useMutation } from "@apollo/client";
import { ADD_CONTACT } from "./graphql";
import { useToasts } from "react-toast-notifications";
import { Toast } from "bootstrap";

const Contact = ({ location }) => {
  const { pathname } = location;
  const { addToast } = useToasts();

  const [addContact, { loading, error, data }] = useMutation(ADD_CONTACT);

  const [values, setValues] = useState({
    email: "",
    subject: "",
    message: "",
    name: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  console.log(data, error, loading);

  const handleSubmit = (e) => {
    console.log("Handle submit");
    if (values.email !== "") {
      addContact({
        variables: values,
      });
    }
  };

  useEffect(() => {
    if (error)
      addToast("There is an Error" + error.message, {
        appearance: "error",
        autoDismiss: true,
      });
  }, [error, addToast]);

  useEffect(() => {
    if (data) {
      addToast("Successfully sent, Thank You!", {
        appearance: "success",
        autoDismiss: true,
      });
    }
  }, [data, addToast]);
  return (
    <Fragment>
      <MetaTags>
        <title>AR Shop | About us</title>
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Contact
      </BreadcrumbsItem>
      {/* breadcrumb */}
      <Breadcrumb />
      <div className="contact-area pt-100 pb-100">
        <div className="container">
          <div className="custom-row-2">
            <div className="col-lg-4 col-md-5">
              <div className="contact-info-wrap">
                <div className="single-contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="contact-info-dec">
                    <p>+251938909646</p>
                    <p>+251920565749</p>
                  </div>
                </div>
                <div className="single-contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-globe" />
                  </div>
                  <div className="contact-info-dec">
                    <p>
                      <a href="mailto:demelashephrem@gmail.com">
                        demelashephrem@gmail.com
                      </a>
                    </p>
                    {/* <p>
                      <a href="//urwebsitenaem.com">urwebsitenaem.com</a>
                    </p> */}
                  </div>
                </div>
                <div className="single-contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-map-marker" />
                  </div>
                  <div className="contact-info-dec">
                    <p>Address goes here, </p>
                    <p>street, Crossroad 123.</p>
                  </div>
                </div>
                <div className="contact-social text-center">
                  <h3>Follow Us</h3>
                  <ul>
                    <li>
                      <a href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="//pinterest.com">
                        <i className="fa fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="//thumblr.com">
                        <i className="fa fa-tumblr" />
                      </a>
                    </li>
                    <li>
                      <a href="//vimeo.com">
                        <i className="fa fa-vimeo" />
                      </a>
                    </li>
                    <li>
                      <a href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="contact-form">
                <div className="contact-title mb-30">
                  <h2>Get In Touch</h2>
                </div>
                <form
                  className="contact-form-style"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        onChange={handleChange}
                        name="name"
                        required
                        placeholder="Name*"
                        type="text"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        required
                        onChange={handleChange}
                        name="email"
                        placeholder="Email*"
                        type="email"
                      />
                    </div>
                    <div className="col-lg-12">
                      <input
                        required
                        onChange={handleChange}
                        name="subject"
                        placeholder="Subject*"
                        type="text"
                      />
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        required
                        onChange={handleChange}
                        name="message"
                        placeholder="Your Message*"
                        defaultValue={""}
                      />
                      <button
                        className="submit"
                        type="submit"
                        disabled={loading}
                      >
                        SEND
                      </button>
                    </div>
                  </div>
                </form>
                <p className="form-messege" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object,
};

export default Contact;
