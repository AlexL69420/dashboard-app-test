import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DashboardProvider } from "./Contexts/DashboardContext.tsx";

createRoot(document.getElementById("root")!).render(
  <DashboardProvider>
    <App />
  </DashboardProvider>,
);
