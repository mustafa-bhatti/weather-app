export class WeatherReport {
  constructor(location, desc, temp, time, feelsLike, rainProb) {
    this.location = location;
    this.desc = desc;
    this.temp = temp;
    this.time = time;
    this.feelsLike = feelsLike;
    this.rainProb = rainProb;
  }
}
