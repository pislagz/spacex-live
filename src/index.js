import React from "react";
import ReactDOM from "react-dom";
import { Root } from "./app/Root";
import { Provider } from "react-redux";
import { store } from "app/redux/store";
import { ModalProvider } from "styled-react-modal";
import { BrowserRouter as Router } from "react-router-dom";
import "app/styles/fonts.css";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ModalProvider>
        <Root />
      </ModalProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
