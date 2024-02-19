const apiKey = "4e0c900cf3c7b3699dca12a3db8ea366";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.getElementById("weatherIcon");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please enter a valid city name.');
      } else {
        throw new Error('Failed to fetch weather data. Please try again later.');
      }
    }

    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    const weatherCondition = data.weather[0].main;
    weatherIcon.src = `assets/${weatherCondition.toLowerCase()}.png`;

    document.querySelector(".weather-info").style.display = "block";
  } catch (error) {
    console.error('Error fetching weather data:', error);
    
    alert(error.message);
  }

  function displayErrorMessage(message) {
    console.error('Error fetching weather data:', error);
    displayErrorMessage(error.message);
  }
  
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
