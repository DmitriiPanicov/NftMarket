import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import ResetStyle from "./resetStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/NftMarket">
    <React.StrictMode>
      <GlobalStyle />
      <ResetStyle/>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
