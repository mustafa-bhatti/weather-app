/* eslint-disable no-unused-vars */
const location = document.querySelector('.location');
const desc = document.querySelector('.desc');
const icon = document.querySelector('.icon');
const temp = document.querySelector('.temp');
const min = document.querySelector('.min');
const max = document.querySelector('.max');
const mainCard = document.querySelector('.card');
const forcastDaysDiv = document.querySelector('.forecastDays');

const renderWeather = function (weatherObject) {
  console.log(weatherObject.location);
  location.textContent = weatherObject.location;
  desc.textContent = weatherObject.desc;
  temp.textContent = weatherObject.temp;
  min.textContent = weatherObject.min;
  max.textContent = weatherObject.max;
  import(`./images/${weatherObject.icon}.png`).then((response) => {
    icon.src = response.default;
  });
};
const renderForcast = function (forcastArray) {
  forcastDaysDiv.innerHTML = '';
  for (let key of forcastArray) {
    const day = key.day;
    const icon = key.icon;
    const temp = key.temp;
    const dayCard = createForcastCard(day, icon, temp);
    forcastDaysDiv.appendChild(dayCard);
  }
};
const createForcastCard = function (day, icon, temp) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'day-card';

  const dateP = document.createElement('p');
  dateP.textContent = day;

  const iconImg = document.createElement('img');
  import(`./images/${icon}.png`).then((response) => {
    iconImg.src = response.default;
  });
  iconImg.className = 'icon';

  const tempP = document.createElement('p');
  tempP.textContent = `${temp}°`;

  cardDiv.appendChild(dateP);
  cardDiv.appendChild(iconImg);
  cardDiv.appendChild(tempP);
  return cardDiv;
};
export { renderWeather, renderForcast };
