// Import necessary modules
import React from "react";
import ReactDOM from "react-dom/client";

// Import the main App component
import App from "./App";

// Import the main CSS file
import "./index.css";

// Use ReactDOM.createRoot() to create a root node for rendering the application
// and immediately render the App component inside it.
// ReactDOM.createRoot() is used for Concurrent Mode in React.
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap the App component with <React.StrictMode> to enable React's strict mode.
  // Strict mode helps catch potential problems and warnings early in development.
  // It helps developers write better React code.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
