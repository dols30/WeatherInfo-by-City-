//api key management
const apiKey = "95be2a659698afbecfff8af81cb73a67";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=95be2a659698afbecfff8af81cb73a67&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

//fetching api 
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "clouds.png";
  }
  else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "clear.png";
  }
  else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "rain.png";
  }
  else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "drizzle.png";
  }
  else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "mist.png";
  }
  else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "snow.png";
  }
  else if (data.weather[0].main == "wind") {
    weatherIcon.src = "wind.png";
  }




  document.querySelector(".weather").style.display=block;

}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})


