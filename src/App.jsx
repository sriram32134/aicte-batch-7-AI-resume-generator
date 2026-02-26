import React, { useState } from "react";
import "./index.css";
import { HomePage } from "./pages/HomePage.jsx";
import { BuilderPage } from "./pages/BuilderPage.jsx";

function App() {
  const [view, setView] = useState("home"); // "home" | "builder"

  return (
    <div className="page-root">
      <style id="app-styles">{`
        ${""}
      `}</style>

      {view === "home" ? (
        <HomePage onStart={() => setView("builder")} />
      ) : (
        <BuilderPage />
      )}
    </div>
  );
}

export default App;
