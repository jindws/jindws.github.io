import React, { useRef } from "react";
import usePoint from "../../components/usePoint";
import { MutableRefObject } from "_@types_react@18.0.1@@types/react";

/**
 * 随机生成的白色点背景
 * @constructor
 */
export default function Point() {
  const point: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const [num, addPoint] = usePoint(
    point as MutableRefObject<HTMLDivElement>,
    6
  ) as [number, (arg: number) => void];

  return <div className="point" onClick={addPoint.bind(null, 1)} ref={point} />;
}
