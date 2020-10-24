
let apiKey = 93a5c0229caf5a1464914b8a94a50328

let searchBtn = $(".searchBtn");
let searchInput = $(".searchInput");
let cityNameEl = $(".cityName");
let weatherIconEl = $(".weatherIcon");
let searchHistoryEl = $(".historyItems");
let tempEl = $(".temp");
let humidityEl = $(".humidity");
let windSpeedEl = $(".windSpeed");
let uvIndexEl = $(".uvIndex");

//get moment working? how to get to current day


//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

input.addEventListener("click", function (event) {
    event.preventDefault();
    var searchCity = document.getElementById('cityName').value;
    localStorage.setItem('cityName', searchCity);
 })

function getWeather(searchCity) {
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" +APIKey;
                $.ajax({
                url: queryURL,
                method: "GET"
              })
              .then(function (weatherData) {
            //console.log(response);
            let cityObj = {
                cityName: weatherData.name,
                currentTemp: weatherData.main.temp,
                currentHumidity: weatherData.main.humidity,
                currentWind: weatherData.wind.speed,
                cityUVIndex: weatherData.coord,
                cityPic: weatherData.weather[0].icon
            }
