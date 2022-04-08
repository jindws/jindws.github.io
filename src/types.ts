export interface IContext {
  locations: {
    province: string;
    city: string;
  };
  rectangle: string;
  now: {
    temp: string;
    precip: string;
    windSpeed: string;
    humidity: string;
    text: string;
    obsTime: string;
  };
  night: boolean;
}
