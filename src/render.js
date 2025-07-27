import clearDay from "./images/clear-day.png"
import partlyCloudyDay from "./images/partly-cloudy-day.png"
const location = document.querySelector('.location');
const desc = document.querySelector('.desc');
const icon = document.querySelector('.icon');
const temp = document.querySelector('.temp');
const min = document.querySelector('.min');
const max = document.querySelector('.max');

export const renderWeather = function (weatherObject) {
  console.log(weatherObject.location);
  location.textContent = weatherObject.location;
  desc.textContent = weatherObject.desc;
  temp.textContent = weatherObject.temp
  min.textContent = weatherObject.min
  max.textContent = weatherObject.max
  import (`./images/${weatherObject.icon}.png`).then(response => {
    icon.src = response.default
  })
};
