function formatDate(timestamp) {
  let date = new Date(timestamp);
  console.log(date);
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
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(result.data.dt * 1000);
}

let apiKey = "6a119ce5ad60b9883a83a56308bcd89c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);
