import React from "react";
import ReactDOM from "react-dom";
import { AllItemsProvider } from "./components/AllItemsContext";
import App from "./components/App";
import { CardProvider } from "./components/CardContext";

ReactDOM.render(
  <React.StrictMode>
    <CardProvider>
    <AllItemsProvider>
      <App />
    </AllItemsProvider>
    </CardProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
