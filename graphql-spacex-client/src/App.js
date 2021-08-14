import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./App.css";
import logo from "./logo.png";
import Launches from "./components/Launches";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: 500, display: "block", margin: "auto" }}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
