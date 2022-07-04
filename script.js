let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = ("0" + now.getHours()).slice(-2);
let minutes = ("0" + now.getMinutes()).slice(-2);
let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `Last updated ${day}, ${hour}:${minutes}`;
// day&time code ^^

function getLocation(event) {
  event.preventDefault();
  let apiKey = "e516dfecadf5c432cccddd97bb70e448";
  let cityInput = document.querySelector("#city-search").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getWeather);
}
// temperature code
function getWeather(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

let searchButton = document.querySelector("#search-engine");
searchButton.addEventListener("submit", getLocation);
