import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { StateProvider } from "./context/StateProvider";
import reducer from "./context/reducer";
import { initialState } from "./context/initialState";

ReactDOM.render(
  <Router>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </Router>,
  document.getElementById("root")
);
