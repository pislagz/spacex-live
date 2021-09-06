import React from "react";
import ReactDOM from "react-dom";
import { Root } from "./app/Root";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "app/theme";
import { Provider } from "react-redux";
import { store } from "app/redux/store";
import { ModalProvider } from "styled-react-modal";
import "./fonts.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ModalProvider>
          <Root />
        </ModalProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
