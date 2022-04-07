import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <div>init ok!</div>;
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
