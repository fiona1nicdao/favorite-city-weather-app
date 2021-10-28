/*
link js file to html
get access to the input field 
get access to button 
create funtion to fetch API data when button is clicked 

*/ 

var inputField = document.querySelector("#city")
var button = document.querySelector("#getWeather")
// var requestUrl = 'https//api.openweathermap.org/data/2.5/weather?q={city name}&appi={API key}'
function fetchData() {
    console.log(inputField.value)
    var cityName =inputField.value
    var apiKey = 'b1d3856bac61869cb925c991abf62e2c'
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
    console.log(requestUrl)

    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(weatherData) {
            console.log(weatherData)
        })
}

button.addEventListener('click',fetchData)
