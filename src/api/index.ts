import { Get } from "./fetch";
const gaoDeKey = "b5dc101510c3172849a4fd74a4db8508";
const qWeather = "https://devapi.qWeather.com/v7/weather";
const qKey = "ae9136fb06a04934bdd38d87b35ea563";
export async function getLocation() {
  return Get(`https://restapi.amap.com/v3/ip?key=${gaoDeKey}`);
}

export async function getWeather(location: string): Promise<unknown> {
  return Get(`${qWeather}/now?location=${location}&key=${qKey}`);
}

export async function get7Weather(location: string): Promise<unknown> {
  return Get(`${qWeather}/7d?location=${location}&key=${qKey}`);
}

export async function get24hWeather(location: string): Promise<unknown> {
  return Get(`${qWeather}/24h?location=${location}&key=${qKey}`);
}
