import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/scss/style.scss";
import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

import { createUploadLink } from "apollo-upload-client";
import { authDataVar } from "./authReactive";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// const client = new ApolloClient({
//    uri: "http://10.240.72.104:5000/api"
// });

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = authDataVar().token;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const uploadLink = createHttpLink({
  uri: "http://localhost:5001/graphql",
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          authData: {
            read() {
              return authDataVar();
            },
          },
        },
      },
    },
  }),
  link: authLink.concat(uploadLink),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
