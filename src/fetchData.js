const API_KEY = 'UAYRENEC6VAUGWXLMJYH9NZJ5';

export const fetchData = async function (location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${API_KEY}&contentType=json`
  );
  const weatherData =await response.json()
  return weatherData
};

