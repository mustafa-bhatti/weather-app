import './styles.css';
import { renderWeather } from './render';
import { fetchData, processData } from './weather-api';

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
renderWeather(processedData)
