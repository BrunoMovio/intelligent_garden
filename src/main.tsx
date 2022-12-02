import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PlantProvider } from "./contexts/plant";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
    <PlantProvider>
      <App />
    </PlantProvider>
  </React.StrictMode>
);
