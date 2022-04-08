import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Index from './pages/index/index'
function App() {
  const [data, upData] = useState(JSON.parse(localStorage.forecasts || "{}"));
  useEffect(() => {
    fetch(
      "https://restapi.amap.com/v3/weather/weatherInfo?city=110101&key=b5dc101510c3172849a4fd74a4db8508&extensions=all"
    )
      .then((data) => data.json())
      .then((data) => {
        if (+data.status === 1) {
          localStorage.forecasts = JSON.stringify(data.forecasts);
          upData(data.forecasts);
        }
      });
  }, []);
  return <Index/>;
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
