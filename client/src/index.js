import React from "react";
import ReactDOM from "react-dom";
import { AllItemsProvider } from "./components/AllItemsContext";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <AllItemsProvider>
      <App />
    </AllItemsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
