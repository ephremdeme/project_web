import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppNavbar from "./layout/AppNavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./component/Auth/Login";
import RegisterPage from "./component/Auth/Register";
import FeaturesPage from "./layout/intro";
import ProductPage from "./component/product";
import AddProduct from "./component/product/add";
import ProductShow from "./component/product/show";
import TestRegister from "./component/Auth/test";
import ProductCheckout, { ProductCart } from "./component/product/cart";


function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="flexible-content">
          <AppNavbar />
          <main className="my-5">
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={TestRegister} />
            <Route path="/products" exact component={ProductPage} />
            <Route path="/products/cart" exact component={ProductCart} />
            <Route path="/products/checkout" exact component={ProductCheckout} />
            <Route path="/products/add" component={AddProduct} />
            <Route path="/products/:id" component={ProductShow} />
            <Route path="/" exact component={FeaturesPage} />
          </main>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
