import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import OnAuthStateC from "./Components/OnAuthStateC.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <OnAuthStateC>
        <App />
      </OnAuthStateC>
    </BrowserRouter>
  </StrictMode>
);
