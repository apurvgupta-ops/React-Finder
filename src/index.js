import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StateContextProvider } from "./context/Api";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);

root.render(
  <StateContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateContextProvider>
);
