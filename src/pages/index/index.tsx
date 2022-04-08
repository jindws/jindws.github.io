import React, { useEffect, useState } from "react";
import "./index.scss";
import W from "./w";
import useGetWeatherImg from "../../components/useGetWeatherImg";
import Home from "../../images/home";

interface IProps {
  province: string;
  city: string;
}

export default function Index(props: IProps) {
  console.log(props);
  const [WeatherImg, upWeatherImg] = useGetWeatherImg(1);

  return (
    <section id="index">
      <W />
      <div className="main">
        <div className="main__weather">{WeatherImg}</div>
        <div className="main__city">
          {props.city}, {props.province}
        </div>
        <dl>
          <dt>
            <div className="main__num">15</div>
          </dt>
          <dd></dd>
        </dl>
        <a href="javascript:">详情</a>
      </div>
      <div className="home">
        <div className="home__data">
          <Home />
          <div>Home</div>
        </div>
      </div>
    </section>
  );
}
