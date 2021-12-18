function showTemperature(result) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(result.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = result.data.name;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(result.data.wind.speed);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = result.data.main.humidity;
  let description = document.querySelector("#description");
  description.innerHTML = result.data.weather[0].description;
}

let apiKey = "6a119ce5ad60b9883a83a56308bcd89c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);
