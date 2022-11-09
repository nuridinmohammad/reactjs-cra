import React, { memo } from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import "./App.scss";
import Root from "./routes/root";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </div>
  );
};

export default memo(App);
