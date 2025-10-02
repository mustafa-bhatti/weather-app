class WeatherReport {
  constructor(location, desc, temp, min, max, icon) {
    this.location = location;
    this.desc = desc;
    this.temp = temp;
    this.min = min;
    this.max = max;
    this.icon = icon;
  }
}
class ForecastReport {
  constructor(day, temp, icon) {
    this.day = day;
    this.temp = temp;
    this.icon = icon;
  }
}
export { WeatherReport, ForecastReport };
