import React from "react";
import DaySun from "../images/DaySun.png";
import DayCloud from "../images/DayCloud.png";
import DayRain from "../images/DayRain.png";
import NightMoon from "../images/NightMoon.png";
import NightCloud from "../images/NightCloud.png";
import NightRain from "../images/NightRain.png";
import './getWeatherImg.scss'
export default function getWeatherImg(type, night = false) {
  let src = [];
  if (type.includes("雨")) {
    src = [DayRain, NightRain];
  } else {
    switch (type) {
      case "晴":
        src = [DaySun, NightMoon];
        break;
      case "阴":
        src = [DayCloud, NightCloud];
        break;
    }
  }

  const url = src[night ? 1 : 0];

  return <img className='weather_pic' src={url} alt="" />;
}
