const apiKey = '86469fb40636fb08b5b59eb9cce4bb69';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  // Show data from API to web page

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});

// inputEl.addEventListener('keyup', (e) => {
//   if (e.target.value && e.key === 'Enter') fetchAPI(e.target.value);
// });
