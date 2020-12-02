import React, { Suspense, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ToastProvider } from "react-toast-notifications";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import ScrollToTop from "./helpers/scroll-top";
import AppHeader from "./layout/AppHeader";
import Login from "./pages/auths/LogIn";
import AppRegister from "./pages/auths/Register";
import { GET_USER } from "./pages/auths/graphql";
import { useQuery, useReactiveVar } from "@apollo/client";
import { authDataVar } from "./authReactive";
import AppHome from "./pages/home/AppHome";
import AppFooter from "./layout/AppFooter";
import Product from "./pages/product/Product";

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
