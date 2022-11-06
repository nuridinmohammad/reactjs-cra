import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodoHooks from "./todo-hooks/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoHooks />
  </React.StrictMode>
);
