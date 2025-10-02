import { ForecastReport, WeatherReport } from './weatherClass';
const API_KEY = 'UAYRENEC6VAUGWXLMJYH9NZJ5';

const fetchData = async function (location, units = 'metric') {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${units}&key=${API_KEY}&contentType=json`
  );

  return response.json();
};

/**
|--------------------------------------------------
|  weatherReport constructor(location, desc, temp,min,max,icon)
|--------------------------------------------------
*/

const processData = function (weatherData) {
  const location = weatherData.resolvedAddress;
  const desc = weatherData.days[0].conditions;
  const temp = weatherData.currentConditions.temp;
  const minTemp = weatherData.days[0].tempmin;
  const maxTemp = weatherData.days[0].tempmax;
  const icon = weatherData.days[0].icon;
  // console.log(location,desc,temp,feelsLike,rainProb)
  const toadyWeather = new WeatherReport(
    location,
    desc,
    temp,
    minTemp,
    maxTemp,
    icon
  );
  return toadyWeather;
};
const forecastData = function (weatherData) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const date = new Date(weatherData.datetime);

  let currDay = days[date.getDay()];
  const temp = weatherData.temp;
  const icon = weatherData.icon;
  const forcastWeather = new ForecastReport(currDay, temp, icon);

  return forcastWeather;
};
export { fetchData, processData, forecastData };
