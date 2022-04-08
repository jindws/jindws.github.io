import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Index from "./pages/index/index";
import { getLocation } from "./api";
function App() {
  // const [data, upData] = useState(JSON.parse(localStorage.forecasts || "{}"));
  const [rectangle, upRectangle] = useState('');
  const [locations, upLocations] = useState(
    JSON.parse(localStorage.locations || "{}")
  );
  useEffect(() => {
    getLocation().then((data) => {
      upLocations(data);
      localStorage.locations = JSON.stringify(data);
      upRectangle(data.rectangle.split(";")[0])
    });
  }, []);
  // useEffect(() => {
  //   getWeather(rectangle).then(upData);
  // }, [rectangle]);
  // console.log(data);
  // getWeather()
  // useEffect(() => {
  //   fetch(
  //     "https://restapi.amap.com/v3/weather/weatherInfo?city=110101&key=b5dc101510c3172849a4fd74a4db8508&extensions=all"
  //   )
  //     .then((data) => data.json())
  //     .then((data) => {
  //       if (+data.status === 1) {
  //         localStorage.forecasts = JSON.stringify(data.forecasts);
  //         upData(data.forecasts);
  //       }
  //     });
  // }, []);
  return <Index locations={locations} rectangle={rectangle} />;
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
