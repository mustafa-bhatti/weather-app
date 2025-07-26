import { WeatherReport } from './weatherClass';
const API_KEY = 'UAYRENEC6VAUGWXLMJYH9NZJ5';

const fetchData = async function (location, units = 'metric') {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${units}&key=${API_KEY}&contentType=json`
  );
  return response.json();
};

/**
|--------------------------------------------------
|  weatherReport constructor(location, desc, temp, time, feelsLike, rainProb)
|--------------------------------------------------
*/

const processData = function (weatherData) {
  //   console.log(weatherData);
  const location = weatherData.resolvedAddress;
  const desc = weatherData.days[0].description;
  const temp = weatherData.currentConditions.temp;
  const time = weatherData.currentConditions.datetime;
  const feelsLike = weatherData.currentConditions.feelslike;
  const rainProb = weatherData.days[0].precipprob;
  // console.log(location,desc,temp,feelsLike,rainProb)
  const toadyWeather = new WeatherReport(
    location,
    desc,
    temp,
    time,
    feelsLike,
    rainProb
  );
  return toadyWeather;
};
export { fetchData, processData };
