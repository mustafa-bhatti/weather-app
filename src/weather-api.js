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
export { fetchData, processData };
