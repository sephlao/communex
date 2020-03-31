import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./index.css";

import Join from "./components/Join";
import Chat from "./components/Chat";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", Verdana, Geneva, Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: darkslateblue;
    font-size: 1em;
  }
`;

const App = () => (
  <Router>
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={Chat} />
  </Router>
);

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
