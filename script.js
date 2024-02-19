const apiKey = "4e0c900cf3c7b3699dca12a3db8ea366";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.getElementById('weatherIcon');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  console.log(data);
  
  const weatherCondition = data.weather[0].main;
  weatherIcon.src = `assets/${weatherCondition.toLowerCase()}.png`;
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
