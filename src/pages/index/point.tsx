import React, { useEffect, useRef, useState } from "react";
import usePoint from "../../components/usePoint";

/**
 * 随机生成的白色点背景
 * @constructor
 */
export default function Point() {
  const point = useRef(null);

  const [num, addPoint] = usePoint(point, 6) as [number, (arg: number) => void];

  return <div className="point" onClick={addPoint.bind(this, 1)} ref={point} />;
}
