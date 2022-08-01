import React from "react";
import ReactDOM from "react-dom";
import { AllItemsProvider } from "./components/AllItemsContext";
import { BrandContextProvider } from "./components/BrandContext";
import App from "./components/App";
import { CardProvider } from "./components/CardContext";

ReactDOM.render(
  <React.StrictMode>
    <CardProvider>
    <AllItemsProvider>
      <BrandContextProvider>
      <App />
      </BrandContextProvider>
    </AllItemsProvider>
    </CardProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
