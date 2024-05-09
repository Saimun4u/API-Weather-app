const apiKey = '86469fb40636fb08b5b59eb9cce4bb69';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=toronto';
const inputEl = document.getElementById('input');

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
}

checkWeather();

// inputEl.addEventListener('keyup', (e) => {
//   if (e.target.value && e.key === 'Enter') fetchAPI(e.target.value);
// });
