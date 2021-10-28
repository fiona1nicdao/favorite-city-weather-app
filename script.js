/*
link js file to html
get access to the input field 
get access to button 
create funtion to fetch API data when button is clicked 
Render weather data to page

temp in F or C - high and low
city name
barometric pressure
description
2. Clear the input field when the user clicks the button
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
            console.log(weatherData.main.temp)
            var KtempMin = weatherData.main.temp_min
            var FtempMin = (KtempMin-273.15)*9/5 + 32
            console.log(FtempMin)

            var KtempMax = weatherData.main.temp_max
            var FtempMax = (KtempMax-273.15)*9/5 + 32
            console.log(FtempMax)

            

            var maxTempTitle = document.createElement('h2')
            maxTempTitle.textContent = "High Temp"
            document.body.appendChild(maxTempTitle)
            var maxTemp = document.createElement('p')
            maxTemp.textContent = FtempMax
            maxTempTitle.appendChild(maxTemp)


            var minTempTitle = document.createElement('h2')
            minTempTitle.textContent = "Low Temp"
            document.body.appendChild(minTempTitle)
            var minTemp = document.createElement('p')
            minTemp.textContent = FtempMin
            minTempTitle.appendChild(minTemp)

            var cityTitle = document.createElement('h2')
            cityTitle.textContent = "City Name"
            document.body.appendChild(cityTitle)
            var city = document.createElement('p')
            city.textContent = weatherData.name
            cityTitle.appendChild(city)


            var descriptionTitle = document.createElement('h2')
            descriptionTitle.textContent = "Description"
            document.body.appendChild(descriptionTitle)
            var description = document.createElement('p')
            console.log(weatherData.weather[0].description)
            description.textContent = weatherData.weather[0].description
            descriptionTitle.appendChild(description)

            var baroPressureTitle = document.createElement('h2')
            baroPressureTitle.textContent = "barometric pressure"
            document.body.appendChild(baroPressureTitle)
            var baroPressure = document.createElement('p')
            baroPressure.textContent = weatherData.main.pressure
            baroPressureTitle.appendChild(baroPressure)



        })
}

button.addEventListener('click',fetchData)
