import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Index from "./pages/index/index";
import Main from "./pages/main/index";
import { getLocation } from "./api";
import { HashRouter,Routes,Route } from "react-router-dom";

function App() {
  const [rectangle, upRectangle] = useState("");
  const [locations, upLocations] = useState(
    JSON.parse(localStorage.locations || "{}")
  );
  useEffect(() => {
    getLocation().then((data) => {
      upLocations(data);
      localStorage.locations = JSON.stringify(data);
      upRectangle(data.rectangle.split(";")[0]);
    });
  }, []);
  return <HashRouter>
    <Routes>
      <Route index element={<Index locations={locations} rectangle={rectangle} />} />
      <Route path='main' element={<Main />} />
    </Routes>
  </HashRouter>;
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
