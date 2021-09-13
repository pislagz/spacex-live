import React from "react";
import ReactDOM from "react-dom";
import { Root } from "./app/Root";
import { Provider } from "react-redux";
import { store } from "app/redux/store";
import { ModalProvider } from "styled-react-modal";
import "app/styles/fonts.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <Root />
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
