import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Index from "./pages/index/index"; // 主页
import Main from "./pages/main/index"; // 详情页
import { getLocation, getWeather } from "./api";
import { HashRouter, Routes, Route } from "react-router-dom";
import Context from "./api/context";
import "./index.scss";
import moment from "moment";
import { INowWeather } from "./types";
import "./sw";

function App() {
  const [rectangle, upRectangle] = useState("");
  const [night, upNight] = useState(false);
  const [now, upNow] = useState({
    temp: "-",
    precip: "-",
    windSpeed: "-",
    humidity: "-",
    text: "",
    obsTime: "",
  });
  const [locations, upLocations] = useState(
    JSON.parse(localStorage.locations || "{}")
  );
  useEffect(() => {
    getLocation().then((data: { rectangle: string }) => {
      upLocations(data);
      localStorage.locations = JSON.stringify(data);
      upRectangle(data.rectangle.split(";")[0]);
    });
  }, []);

  useEffect(() => {
    function getData() {
      if (rectangle) {
        getWeather(rectangle).then((data: INowWeather) => {
          upNow(data.now);
          const hour = moment(data.now.obsTime).format("H");
          if (+hour >= 18 || +hour <= 6) upNight(true);
        });
      }
    }
    getData();
    /**
     * 每5min自动更新一次最新的天气
     */
    const si = setInterval(getData, 5 * 60 * 1000);
    return () => clearInterval(si);
  }, [rectangle]);

  return (
    <Context.Provider value={{ locations, rectangle, now, night }}>
      <HashRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path="main" element={<Main />} />
        </Routes>
      </HashRouter>
    </Context.Provider>
  );
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
