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
          borderRadius: "3xl",
          backgroundColor: "#d7282f",
          h: "46px",
        },
        outline: {
          color: "rgb(107, 70, 193)",
          borderColor: "rgb(107, 70, 193)",
        },
        ghost: {
          color: "rgb(74, 85, 104)",
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
