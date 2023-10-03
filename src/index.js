import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import ResetStyle from "./resetStyles";
import { store } from "./redux/store";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/NftMarket">
      <React.StrictMode>
        <GlobalStyle />
        <ResetStyle />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
