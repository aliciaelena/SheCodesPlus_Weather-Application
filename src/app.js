function formatDate(timestamp) {
  let date = new Date(timestamp);
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}, ${hours}:${minutes}`;
}

function showTemperature(result) {
  celciusDegrees = result.data.main.temp;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celciusDegrees);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = result.data.name;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(result.data.wind.speed);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = result.data.main.humidity;
  let description = document.querySelector("#description");
  description.innerHTML = result.data.weather[0].description;
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(result.data.dt * 1000);
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${result.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", result.data.weather[0].description);
}

function search(input) {
  let apiKey = "6a119ce5ad60b9883a83a56308bcd89c";
  let city = input;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  search(cityInput.value);
}

function showFahrenheitTemp(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round((celciusDegrees * 9) / 5 + 32);
  celciusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
}

function showCelciusTemp(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(celciusDegrees);
  celciusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", handleSubmit);

let celciusDegrees = null;

let celciusLink = document.querySelector("#celcius-link");
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);
celciusLink.addEventListener("click", showCelciusTemp);

search("Vienna");
