import React, { ReactNode, useMemo, useState } from "react";
import DaySun from "../images/DaySun.png";
export default function useGetWeatherImg(
  initType
): [ReactNode, (t: string) => void] {
  const [type, upType] = useState(initType);
  const Image = useMemo(() => {
    let src = "";
    switch (type) {
      case "晴":
        src = DaySun;
        break;
    }
    return <img src={src} alt="" />;
  }, [type]);

  function update(newType) {
    upType(newType);
  }
  return [Image, update];
}
