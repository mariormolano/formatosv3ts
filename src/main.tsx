import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom/client";
//import { Provider } from "react-redux";
//import { store } from "./modules/store";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root");

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
