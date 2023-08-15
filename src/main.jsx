import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Dots from "./Dots-2.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Provider
  <React.StrictMode>
    {/* children */}
    <Dots />
  </React.StrictMode>
);
