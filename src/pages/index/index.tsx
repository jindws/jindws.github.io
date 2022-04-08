import React, { useEffect, useState } from "react";
import "./index.scss";
import W from "../../images/w";
import useGetWeatherImg from "../../components/useGetWeatherImg";
import Home from "../../images/home";
import { getWeather } from "../../api";
import Rain from "../../images/rain";
import Humidity from "../../images/humidity";
import WindSpeed from "../../images/windSpeed";
import moment from "moment";
import { Link } from "react-router-dom";

interface IProps {
  locations: {
    province: string;
    city: string;
  };
  rectangle: string;
}

export default function Index(props: IProps) {
  const { locations, rectangle } = props;
  const [data, upData] = useState({
    temp: "- -",
    precip: "-",
    humidity: "-",
    windSpeed: "-",
    text: "",
    windDir: "",
  });

  const [WeatherImg, upWeatherImg] = useGetWeatherImg(data.text);

  useEffect(()=>{
    upWeatherImg(data.text)
  },[data.text])


  const [time, upTime] = useState({week:'',aft:''});

  useEffect(() => {
    if (rectangle)
      getWeather(rectangle).then((data) => {
        upData(data.now);
        moment.locale("zh-cn");
        const week = moment(data.updateTime).format("周dd");
        moment.locale('en-us');
        const aft = moment(data.updateTime).format("h a")
        upTime({
          week,
          aft,
        })
      });
  }, [rectangle]);
  return (
    <section id="index">
      <W />
      <div className="main">
        <div className="main__weather">{WeatherImg}</div>
        <div className="main__city">
          {locations.city}, {locations.province}
        </div>
        <dl className="main__data">
          <dt>
            <div>{data.temp}</div>
            <label>{time.week},{time.aft}</label>
          </dt>
          <dd>
            <span className="main__data__wind">{data.windDir}</span>
            <span className="main__data__text">{data.text}</span>
          </dd>
        </dl>
        {/* <a href="javascript:">详情</a> */}
        <Link to='main'>详情</Link>
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
    </section>
  );
}
