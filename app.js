const city = document.querySelector('#city');
const icon = document.querySelector('#icon');
const weather = document.querySelector('#weather');
const weatherDescription = document.querySelector('#weatherDescription');
const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');
const visability = document.querySelector('#visability');

//convert temp to oC

//convert wind speed?

//convert

const renderWeatherData = getData().then((data) => {
    city.innerText = `${data.name}, ${data.sys.country}`;
    weather.innerText = `Current Weather: ${data.weather[0].main}`;
    weatherDescription.innerText = `Description: ${data.weather[0].description}`;
    temp.innerText = `Temperature (Celsius): ${data.main.temp}`;
    wind.innerText = `Wind Speed (meter/second): ${data.wind.speed}`;
});

