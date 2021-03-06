import React, { useEffect, useState, useContext } from "react";
import { get7Weather } from "../../api";
import Context from "../../api/context";
import { IContext } from "../../types";
import moment from "moment";
import getWeatherImg from "../../components/getWeatherImg";

/**
 * 一周天气
 * @constructor
 */
export default function Week() {
  const { rectangle, night } = useContext(Context) as IContext;
  const [data, upData] = useState<
    Array<{
      fxDate: number;
      textDay: string;
      tempMax: number;
      tempMin: number;
    }>
  >([]);

  useEffect(() => {
    if (rectangle) {
      get7Weather(rectangle).then((data: { daily: [] }) => {
        upData(data.daily);
      });
    }
  }, [rectangle]);

  moment.locale("zh-cn");
  return (
    <dl className="week">
      {data.map((itm) => {
        return (
          <dd key={itm.fxDate}>
            <span>{moment(itm.fxDate).format("周dd")}</span>
            {getWeatherImg(itm.textDay, night)}
            <label>
              {itm.tempMax}
              <sup>℃</sup>
              <em>
                {itm.tempMin}
                <sup>℃</sup>
              </em>
            </label>
          </dd>
        );
      })}
    </dl>
  );
}
