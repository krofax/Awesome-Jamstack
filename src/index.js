import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  uri: "<YOUR_8BASE_URI>",
});

ReactDOM.render(
    <ApolloHooksProvider client={client}>
      <App />
   </ApolloHooksProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
