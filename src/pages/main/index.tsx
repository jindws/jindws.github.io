import React, { useContext } from "react";
import "./main.scss";
import Context from "../../api/context";
import { IContext } from "../../types";
import Rain from "../../images/rain";
import Humidity from "../../images/humidity";
import WindSpeed from "../../images/windSpeed";
import Week from "./week";
import getWeatherImg from "../../components/getWeatherImg";
import Back from "../../images/back";
import { Link } from "react-router-dom";
import Chart from "./chart";

/**
 * 详情页
 * @constructor
 */
export default function Index() {
  const { locations, now, night } = useContext(Context) as IContext;

  return (
    <section className="main">
      <Link className="main__back" to="/">
        <Back />
      </Link>
      <div className="main__city">
        {locations.city},<br />
        {locations.province}
      </div>
      <div className="main__weather">{getWeatherImg(now.text, !!night)}</div>
      <label className="main__temp">
        {now.temp}
        <sup>℃</sup>
      </label>
      <ul>
        <li>
          <Rain color="#658ED9" />
          <span>{now.precip}毫米</span>
        </li>
        <li>
          <Humidity color="#D86191" />
          {now.humidity}%
        </li>
        <li>
          <WindSpeed color="#5E4FC1" />
          {now.windSpeed}km/h
        </li>
      </ul>
      <span className="main__today">Today</span>
      <Chart />
      <Week />
    </section>
  );
}
