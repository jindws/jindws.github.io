import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import W from "../../images/w";
import Home from "../../images/home";
import { getWeather } from "../../api";
import Rain from "../../images/rain";
import Humidity from "../../images/humidity";
import WindSpeed from "../../images/windSpeed";
import moment from "moment";
import { Link } from "react-router-dom";
import Context from "../../api/context";
import { IContext } from "../../types";
import getWeatherImg from "../../components/getWeatherImg";
import Point from "../../components/point";

export default function Index() {
  const { locations, rectangle,night } = useContext(Context) as IContext;
  const [data, upData] = useState({
    temp: "- -",
    precip: "-",
    humidity: "-",
    windSpeed: "-",
    text: "",
    windDir: "",
  });

  const [time, upTime] = useState({ week: "", aft: "" });

  useEffect(() => {
    if (rectangle)
      getWeather(rectangle).then((data) => {
        upData(data.now);
        moment.locale("zh-cn");
        const week = moment(data.updateTime).format("周dd");
        moment.locale("en-us");
        const aft = moment(data.updateTime).format("h a");
        upTime({
          week,
          aft,
        });
      });
  }, [rectangle]);
  return (
    <section id="index">
      <W />
      <div className="index">
        <div className="index__weather">{getWeatherImg(data.text,!!night)}</div>
        <div className="index__city">
          {locations.city}, {locations.province}
        </div>
        <dl className="index__data">
          <dt>
            <div>{data.temp}</div>
            <label>
              {time.week},{time.aft}
            </label>
          </dt>
          <dd>
            <span className="index__data__wind">{data.windDir}</span>
            <span className="index__data__text">{data.text}</span>
          </dd>
        </dl>
        <Link to="main">详情</Link>
      </div>
      <dl className="data">
        <dd>
          <span>
            <Rain />
            降水量
          </span>
          <span>{data.precip}毫米</span>
        </dd>
        <dd>
          <span>
            <Humidity />
            湿度
          </span>
          <span>{data.humidity}%</span>
        </dd>
        <dd>
          <span>
            <WindSpeed />
            风速
          </span>
          <span>{data.windSpeed}km/h</span>
        </dd>
      </dl>
      <section className="footer">
        <div className="home">
          <div className="home__data">
            <Home />
            <div>Home</div>
          </div>
        </div>
      </section>
      <Point/>
    </section>
  );
}
