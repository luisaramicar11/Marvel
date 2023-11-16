import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { StateProvider } from "./components/store/StateProvider.jsx";
import reducer, { initialState } from "./components/store/Reducer.jsx";
import { ThemeProvider } from "./components/context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </ThemeProvider>
  </React.StrictMode>
);
