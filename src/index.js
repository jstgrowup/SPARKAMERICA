import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
const themes = extendTheme({
  components: {
    Button: {
      variants: {
        solid: {
          color: "white",
          borderRadius: "2xl",
          backgroundColor: "#d7282f",
          h: "46px",
          _hover: "green.400",
        },
        outline: {
          color: "white",
          backgroundColor: "#0076be",
          borderRadius: "md",
          _hover: "green.400",
        },
        ghost: {
          color: "white",
          backgroundColor: "#006DA8",
          borderRadius: "3xl",
        },
        icono: {
          color: "#6C757D",

          // borderRadius: "3xl",
        },
      },
    },

    // Other components go here
  },

  Text: {
    variants: {
      base: {
        color: "#222222",
        color: "red",
        fontWeight: "thin",
        fontFamliy: "sans-serif",
      },
    },
  },
});
// color: "white",
// borderRadius: "3xl",
// backgroundColor: "#d7282f",
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={themes}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
