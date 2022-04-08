import React, {ReactNode, useMemo, useState} from "react";
import DaySun from "../images/DaySun.png";
export default function useGetWeatherImg(initType):[ReactNode,(t:string)=>void] {
  const [type, upType] = useState(initType);
  const Image = useMemo(() => {
    return <img src={DaySun} alt="" />;
  }, [type]);

  function update(newType) {
    upType(newType);
  }
  return [Image, update];
}
