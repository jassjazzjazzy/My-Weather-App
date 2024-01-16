function UpdateWeatherData(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current
let cityElement = document.querySelector("#weather-app-city");
let descriptionElement = document.querySelector("#des");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let timeElement = document.querySelector("#time");
let date = new Date(response.data.time * 1000);

timeElement.innerHTML = formatDate(date);
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windElement.innerHTML = `${response.data.wind.speed}m/h`;
cityElement.innerHTML = response.data.city;
descriptionElement.innerHTML= response.data.condition.description;
 temperatureElement.innerHTML = Math.round(temperature);

}

function formatDate(date) {

let minutes = date.getMinutes();
let hours = date.getHours();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 
   let day = days[date.getDay()]; 
   if (minutes < 10) {
    minutes = `0${minutes}`;
   }

   return  `${day} ${hours}:${minutes}`;
}


function searchCity(city) {
let apiKey = "t6483ea502089504eb2ccb3fob3003f0";
let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(UpdateWeatherData);
}



function handleSearchSubmit(event) {
    event.preventDefault();
let searchInput = document.querySelector("#search-form-input");

searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Houston");