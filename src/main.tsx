import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PlantProvider } from './contexts/plant';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PlantProvider>
    <App />
    </PlantProvider>
  </React.StrictMode>
);
