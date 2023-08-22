/**
 * App.js에서 생성한 컴포넌트와 웹 브라우저를
 * 연결하는 파일
 */

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
