import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppNavbar from "./layout/AppNavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./component/Auth/Login";
import RegisterPage from "./component/Auth/Register";
import EcommercePage from "./component/product/listCatogory";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="flexible-content">
          <AppNavbar />
          <main className="my-5">
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/" exact component={EcommercePage} />
          </main>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
