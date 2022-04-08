import React, { useEffect, useRef, useState } from "react";

export default function Point() {
  const point: any = useRef();
  const [time, upTime] = useState(0);
  const _time = useRef(time);

  useEffect(() => {
    const t = setInterval(() => {
      upTime(_time.current + 1);
      if (_time.current === 6) clearInterval(t);
    }, 300);
  }, []);
  useEffect(() => {
    const dom: HTMLElement = document.createElement("i");
    const left = Math.random() * 90 + 1;
    const top = Math.random() * 90 + 1;
    const width = Math.random();
    dom.setAttribute(
      "style",
      `left:${left}%;top:${top}%;width:${width}rem;height:${width}rem`
    );
    point.current.append(dom);
    _time.current = time;
  }, [time]);
  return <div className="point" ref={point} />;
}
