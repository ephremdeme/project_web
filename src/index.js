import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "@apollo/react-hooks";

import  { gql } from "apollo-boost";
import {  ApolloClient} from "apollo-client";
import { InMemoryCache } from 'apollo-cache-inmemory'

import { createUploadLink } from "apollo-upload-client";

// const client = new ApolloClient({
//    uri: "http://10.240.72.104:5000/api"
// });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: "http://10.240.72.40:5000/api"
  })
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
