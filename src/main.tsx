import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Anleitung from "./sites/anleitung.tsx";
import First from "./sites/first.tsx";
import Gameover from "./sites/gameover.tsx";
import Terminal from "./sites/terminal.tsx";
import Einbruch from "./sites/einbruch.tsx";
import Ende from "./sites/ende.tsx";
import Cheat from "./sites/cheat.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/anleitung" element={<Anleitung />} />
        <Route path="/first" element={<First />} />
        <Route path="/gameover" element={<Gameover />} />
        <Route path="/terminal" element={<Terminal />} />
        <Route path="/einbruch" element={<Einbruch />} />
        <Route path="/ende" element={<Ende />} />
        <Route path="/cheat" element={<Cheat />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
