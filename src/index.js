import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import { MainContext } from "./contexts/mainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainContext>
    <App />
  </MainContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
