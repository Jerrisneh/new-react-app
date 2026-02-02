import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/Counter.css";
import "./styles/TodoList.css";
import "./styles/UserData.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
