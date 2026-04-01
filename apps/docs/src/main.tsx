import "@fontsource-variable/fraunces";
import "@fontsource-variable/manrope";
import "@usememos/mui/theme.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app";
import "./site.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
