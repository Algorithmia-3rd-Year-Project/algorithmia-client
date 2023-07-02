import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SessionContextProvider } from "./context/SessionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SessionContextProvider>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);
