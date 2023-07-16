import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Web3ContextProvider } from "./context/Web3Context.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Web3ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Web3ContextProvider>
);
