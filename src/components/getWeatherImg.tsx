import React from "react";
import DaySun from "../images/DaySun.png";
import DayCloud from "../images/DayCloud.png";
import DayRain from "../images/DayRain.png";
import NightMoon from "../images/NightMoon.png";
import NightCloud from "../images/NightCloud.png";
import NightRain from "../images/NightRain.png";
import NightStorm from "../images/NightStorm.png";
import DayStorm from "../images/DayStorm.png";
import "./getWeatherImg.scss";
export default function getWeatherImg(type: string, night = false) {
  let src: string[] = [];
  if (type.includes("雨")) {
    // 包含小雨中雨等
    src = [DayRain, NightRain];
  } else if (type.includes("雷")) {
    // 雷阵雨
    src = [DayStorm, NightStorm];
  } else {
    switch (type) {
      case "晴":
        src = [DaySun, NightMoon];
        break;
      case "阴":
      case "多云":
        src = [DayCloud, NightCloud];
        break;
    }
  }

  const url = src[night ? 1 : 0];

  return <img className="weather_pic" src={url} alt="" />;
}
