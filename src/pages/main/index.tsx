import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import "./main.scss";
import Context from "../../api/context";
import { IContext } from "../../types";
import { get24hWeather, get7Weather } from "../../api";
import Rain from "../../images/rain";
import Humidity from "../../images/humidity";
import WindSpeed from "../../images/windSpeed";
import * as echarts from "echarts";
import moment from "moment";
import Week from "./week";
import getWeatherImg from "../../components/getWeatherImg";

export default function Index() {
  const { locations, rectangle, now,night } = useContext(Context) as IContext;
  const [days, upDays] = useState([]);
  const [today, upToday] = useState([]);
  const chart = useRef();

  useEffect(() => {
    if (rectangle) {
      get7Weather(rectangle).then((data) => {
        upDays(data.daily);
      });
      get24hWeather(rectangle).then((data) => {
        upToday(data.hourly);
      });
    }
  }, [rectangle]);

  const [xData, yData] = useMemo(() => {
    moment.locale("en-us");
    const xData = [];
    const yData = [];
    for (const itm of today) {
      xData.push(moment(itm.fxTime).format("h a"));
      yData.push(itm.temp);
    }
    return [xData, yData];
  }, [today]);

  useEffect(() => {
    xData.push("");
    const myChart = echarts.init(chart.current);
    myChart.setOption({
      xAxis: {
        type: "category",
        data: ["", ...xData, ""],
        axisLabel: { color: "rgba(51, 40, 33, 0.5)" },
        axisLine: { show: false },
        axisTick: { show: false },
      },
      yAxis: {
        type: "value",
        show: false,
        splitLine: {
          show: false,
        },
      },
      dataZoom: [
        {
          type: "inside",
          start: 0,
          end: 25,
        },
      ],
      grid: {
        left: -30,
        right: -30,
      },
      series: [
        {
          data: [yData[0], ...yData, yData.at(-1)],
          type: "line",
          smooth: true,
          areaStyle: {
            color: "rgba(233, 201, 57, 0.25)",
          },
          lineStyle: {
            color: "rgba(233, 201, 57, 1)",
            shadowColor: "rgba(233, 201, 57, 1)",
            shadowBlur: 2,
          },
          showSymbol: false,
        },
      ],
    });
  }, [xData, yData]);
  return (
    <section className="main">
      <div className="main__city">
        {locations.city},<br />
        {locations.province}
      </div>
      <div className="main__weather">{getWeatherImg(now.text,!!night)}</div>
      <label className="main__temp">{now.temp}</label>
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
      <div className="main__chart" ref={chart} />
      <dl className="main__card">
        {[0, 1, 2].map((itm) => (
          <dd key={itm}>
            <span>
              {yData[itm]}
              <sup>℃</sup>
            </span>
            <label>{xData[itm]}</label>
          </dd>
        ))}
      </dl>
      <Week />
    </section>
  );
}
