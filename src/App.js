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

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="flexible-content">
          <AppNavbar />
          <main className="my-5">
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/products" exact component={ProductPage} />
            <Route path="/products/add" component={AddProduct} />
            <Route path="/" exact component={FeaturesPage} />
          </main>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
