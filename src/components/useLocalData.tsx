import { useEffect, useState } from "react";

export default function useLocalData(
  key: string,
  base: string | boolean | Record<string, string>
) {
  const [data, setData] = useState(
    localStorage[key] ? JSON.parse(localStorage[key]) : base
  );
  useEffect(() => {
    localStorage[key] = JSON.stringify(data);
  }, [data]);
  return [data, setData];
}
