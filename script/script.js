// api key = 5e76dd14e71e926bca8d06afe98954bf
const apiKey = "5e76dd14e71e926bca8d06afe98954bf";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Gazipur&appid=${apiKey}&units=metric`;
console.log(apiKey);

// check weather
const checkWeather = async () => {
  const res = await fetch(apiUrl);
  const data = await res.json();

  document.querySelector(".city").innerHTML = data.name;
  // temperature as celsius with full value
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`;
  console.log(data);
  showWeather(data);
};

checkWeather();
