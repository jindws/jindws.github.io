import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import W from "../../images/w";
import Home from "../../images/home";
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
  const { locations, night, now } = useContext(Context) as IContext;

  const [time, upTime] = useState({ week: "", aft: "" });

  useEffect(() => {
    if (now.obsTime) {
      moment.locale("zh-cn");
      const week = moment(now.obsTime).format("周dd");
      moment.locale("en-us");
      const aft = moment(now.obsTime).format("h a");
      upTime({
        week,
        aft,
      });
    }
  }, [now.obsTime]);
  return (
    <section id="index">
      <W />
      <div className="index">
        <div className="index__weather">{getWeatherImg(now.text, !!night)}</div>
        <div className="index__city">
          {locations.city}, {locations.province}
        </div>
        <dl className="index__data">
          <dt>
            <div>{now.temp}</div>
            <label>
              {time.week},{time.aft}
            </label>
          </dt>
          <dd>
            <span className="index__data__wind">{now.windDir}</span>
            <span className="index__data__text">{now.text}</span>
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
          <span>{now.precip}毫米</span>
        </dd>
        <dd>
          <span>
            <Humidity />
            湿度
          </span>
          <span>{now.humidity}%</span>
        </dd>
        <dd>
          <span>
            <WindSpeed />
            风速
          </span>
          <span>{now.windSpeed}km/h</span>
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
      <Point />
    </section>
  );
}
