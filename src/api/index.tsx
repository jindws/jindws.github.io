const gaoDeKey = "b5dc101510c3172849a4fd74a4db8508";
export function getLocation(): Promise<{ rectangle: string }> {
  return new Promise((resolve) => {
    fetch(`https://restapi.amap.com/v3/ip?key=${gaoDeKey}`)
      .then((data) => data.json())
      .then((data) => {
        resolve(data);
        localStorage.location = JSON.stringify(data);
      })
      .catch(() => resolve(JSON.parse(localStorage.location || "{}")));
  });
}

export async function getWeather(location: string): Promise<{
  now: {
    temp: string;
    precip: string;
    humidity: string;
    windSpeed: string;
    text: string;
    windDir: string;
  };
  updateTime: string;
}> {
  return new Promise((resolve) => {
    fetch(
      `https://devapi.qweather.com/v7/weather/now?location=${location}&key=ae9136fb06a04934bdd38d87b35ea563`
    )
      .then((data) => data.json())
      .then(resolve);
  });
}

export async function get7Weather(location: string) {
  return new Promise((resolve) => {
    fetch(
      `https://devapi.qweather.com/v7/weather/3d?location=${location}&key=ae9136fb06a04934bdd38d87b35ea563`
    )
      .then((data) => data.json())
      .then(resolve);
  });
}
