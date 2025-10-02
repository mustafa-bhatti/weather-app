/* eslint-disable no-unused-vars */
import './styles.css';
import { renderWeather } from './render';
import { fetchData, processData, forecastData } from './weather-api';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search');

// console.log(data)
form.addEventListener('submit', async function (event) {
  event.preventDefault();
  const searchQuery = input.value;
  const data = await fetchData(searchQuery);

  const processedData = processData(data);
  console.log(processedData);
  renderWeather(processedData);
});
//TODO: Implement Rendring of weather Report
const data = await fetchData('Lahore');
const processedData = processData(data);
renderWeather(processedData);

const getForcaseData = function () {
  const forcastArray = [];
  for (let i = 1; i < 6; i++) {
    const currentDateForecast = forecastData(data.days[i]);
    forcastArray.push(currentDateForecast);
  }
  console.log(forcastArray);
};
getForcaseData();
