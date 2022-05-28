import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UseContextProvider } from "./StepContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UseContextProvider>
        <App />
      </UseContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
