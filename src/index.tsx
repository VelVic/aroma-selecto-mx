import './index.css';
import './styles/backgroundPattern.css';
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("root");

if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App /> {/* ← SIN BrowserRouter aquí */}
  </React.StrictMode>
);