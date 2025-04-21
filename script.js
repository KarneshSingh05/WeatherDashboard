const WeatherData = {
  "new york": {
    temp: 18,
    condition: "Partly Cloudy",
  },
  delhi: {
    temp: 15,
    condition: "Hot",
  },
  mumbai: {
    temp: 22,
    condition: "Sunny",
  },
  mp: {
    temp: 20,
    condition: "Clear",
  },
  dharamshala: {
    temp: 25,
    condition: "Sunny",
  },
  shimla: {
    temp: 38,
    condition: "Rainy",
  },
  punjab: {
    temp: 5,
    condition: "Cloudy",
  },
  haryana: {
    temp: 12,
    condition: "Light Rain",
  },
  hp: {
    temp: 12,
    condition: "Light Rain",
  },
};

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherDisplay = document.getElementById("weather-display");
const locationEl = document.getElementById("location");
const temperatureEl = document.getElementById("temperature");
const conditionEl = document.getElementById("condition");
const loader = document.getElementById("loader");

searchBtn.addEventListener("click", getWeatherData);

cityInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getWeatherData();
  }
});

function getWeatherData() {
  const city = cityInput.value.toLowerCase();

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  loader.style.display = "block";
  weatherDisplay.style.display = "none";

  loader.style.display = "none";

  if (WeatherData[city]) {
    const data = WeatherData[city];

    locationEl.textContent = cityInput.value;
    temperatureEl.textContent = `${data.temp}°C`;
    conditionEl.textContent = data.condition;

    weatherDisplay.style.display = "block";
  } else {
    alert("City not found. Try somthing else.,For eg:HP,Delhi,Shimla,Punjab");
  }
}
