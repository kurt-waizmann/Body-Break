import React from "react";
import ReactDOM from "react-dom";
import { AllItemsProvider } from "./components/AllItemsContext";
import { BrandContextProvider } from "./components/BrandContext";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <AllItemsProvider>
      <BrandContextProvider>
      <App />
      </BrandContextProvider>
    </AllItemsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
