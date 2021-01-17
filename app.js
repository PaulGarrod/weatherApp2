const city = document.querySelector('#city');
const icon = document.querySelector('#icon');
const weather = document.querySelector('#weather');
const weatherDescription = document.querySelector('#weatherDescription');
const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');
const visability = document.querySelector('#visability');

const weatherDataMain = getData().then ((data) => {
    return data.weather.main
});
const weatherDataDescription = getData().then ((data) => {
    return data.weather.description
});

weather.innerText = `${weatherDataMain}`;
weatherDescription.innerText = `${weatherDataDescription}`;