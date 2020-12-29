import React, { lazy, Suspense, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ToastProvider } from "react-toast-notifications";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

import { GET_USER } from "./pages/auths/graphql";
import { useQuery, useReactiveVar } from "@apollo/client";
import { authDataVar } from "./authReactive";
import ScrollToTop from "./helpers/scroll-top";

import AppFooter from "./layout/AppFooter";
import AppHeader from "./layout/AppHeader";

import AppHome from "./pages/home/AppHome";

const Login = lazy(() => import("./pages/auths/LogIn"));
const AppRegister = lazy(() => import("./pages/auths/Register"));

const Product = lazy(() => import("./pages/product/Product"));

const Checkout = lazy(() => import("./pages/other/Checkout"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Cart = lazy(() => import("./pages/other/Cart"));
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));

function App() {
  const { error, loading, data } = useQuery(GET_USER);
  const ss = useReactiveVar(authDataVar);
  useEffect(() => {
    if (data) {
      authDataVar({
        ...ss,
        id: data?.getUser?.id,
        username: data?.getUser?.username,
      });
    }
  }, [data]);

  return (
    <React.Fragment>
      <ToastProvider placement="bottom-left">
        <BreadcrumbsProvider>
          <Router>
            <ScrollToTop>
              <Suspense
                fallback={
                  <div className="flone-preloader-wrapper">
                    <div className="flone-preloader">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                }
              >
                <AppHeader />
                <Switch>
                  <Route exact path="/" component={AppHome} />
                  {/* Authentication */}
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={AppRegister} />

                  {/* Product*/}

                  <Route
                    path="/product/:id"
                    render={(routerProps) => (
                      <Product
                        {...routerProps}
                        key={routerProps.match.params.id}
                      />
                    )}
                  />

                  {/* Shop pages */}
                  <Route
                    path={process.env.PUBLIC_URL + "/shop"}
                    component={ShopGridStandard}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/cart"}
                    component={Cart}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/checkout"}
                    component={Checkout}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/wishlist"}
                    component={Wishlist}
                  />
                </Switch>
                <AppFooter
                  backgroundColorClass="bg-gray"
                  spaceTopClass="pt-100"
                  spaceBottomClass="pb-70"
                />
              </Suspense>
            </ScrollToTop>
          </Router>
        </BreadcrumbsProvider>
      </ToastProvider>
    </React.Fragment>
  );
}

export default App;
