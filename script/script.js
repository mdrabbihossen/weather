// api key = 5e76dd14e71e926bca8d06afe98954bf
const apiKey = "5e76dd14e71e926bca8d06afe98954bf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
console.log(apiKey);

// check weather
const checkWeather = async (city) => {
  try {
    // fetch the api data
    const res = await fetch(`${apiUrl}${city}&units=metric&appid=${apiKey}`);
    const data = await res.json();
    // if the city name is not found
    if (data.name == undefined) {
      alert("Please enter a city name");
      // remove the search box data
      searchBox.value = "";
    } else {
      document.querySelector(".city").innerHTML = data.name;
    }
    document.querySelector(".temp").innerHTML = `${Math.round(
      data.main.temp
    )}°C`;

    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`;
    // show the weather icon according to the weather condition
    switch (data.weather[0].main) {
      case "Clear":
        weatherIcon.src = "images/clear.png";
        break;
      case "Clouds":
        weatherIcon.src = "images/clouds.png";
        break;
      case "Rain":
        weatherIcon.src = "images/rain.png";
        break;
      case "Snow":
        weatherIcon.src = "images/snow.png";
        break;
      case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";

    // console.log(data);

    showWeather(data);
  } catch (error) {
    console.log(error);
  }
};

// show weather
searchBtn.addEventListener("click", () => {
  const cityName = searchBox.value;
  checkWeather(cityName);
});
