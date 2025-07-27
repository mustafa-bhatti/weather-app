export class WeatherReport {
  constructor(location, desc, temp, min, max, icon) {
    this.location = location;
    this.desc = desc;
    this.temp = temp;
    this.min = min;
    this.max = max;
    this.icon = icon;
  }
}
