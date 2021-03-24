const city = document.querySelector('#city');
const weather = document.querySelector('#weather');
const weatherDescription = document.querySelector('#weatherDescription');
const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');
const visability = document.querySelector('#visability');
const container = document.querySelector('.container');

const weatherImages = {
    clear: 'https://images.unsplash.com/photo-1558482623-d1507c001b57?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHdlbGxpbmd0b24lMjBueiUyMHJhaW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    clouds: 'https://images.unsplash.com/photo-1566010503302-2564ae0d47b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHdlbGxpbmd0b24lMjBjbG91ZHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rain: 'https://images.unsplash.com/photo-1559234599-4119a32377d6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fHJhaW5pbmclMjB1bWJyZWxsYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    thunderstorm: 'https://images.unsplash.com/photo-1510936723039-063b76afd29e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODJ8fHRodW5kZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    snow: 'https://images.unsplash.com/photo-1552426106-891da94e1cf1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fHNub3d8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    mist: 'https://images.unsplash.com/photo-1510596713412-56030de252c8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
}

const whiteOverlay = "linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4))"

const setImg = () => {
    getData().then((data) => {
        if (data.weather[0].main.toLowerCase() === 'clear'){
            container.style.backgroundImage = `${whiteOverlay}, url('${weatherImages.clear}')`;
        } else if (data.weather[0].main.toLowerCase() == 'clouds'){
            container.style.backgroundImage = `${whiteOverlay}, url('${weatherImages.clouds}')`;
        } else if (data.weather[0].main.toLowerCase() === 'rain' || data.weather[0].main === 'drizzle'){
            container.style.backgroundImage = `${whiteOverlay}, url('${weatherImages.rain}')`;
        } else if (data.weather[0].main.toLowerCase() === 'thunderstorm'){
            container.style.backgroundImage = `${whiteOverlay}, url('${weatherImages.thunderstorm}')`;
        } else if (data.weather[0].main.toLowerCase() === 'snow'){
            container.style.backgroundImage = `${whiteOverlay}, url('${weatherImages.snow}')`;
        } else if (data.weather[0].main.toLowerCase() === 'mist'){
            container.style.backgroundImage = `${whiteOverlay}, url('${weatherImages.mist}')`;
        } else {
            container.style.backgroundImage = `${whiteOverlay}, url('${weatherImages.clear}')`;
        } 
    })
}

const renderData = () => {
    getData().then((data) => {
        city.innerText = `${data.name}, ${data.sys.country}: ${data.weather[0].main}`;
        weatherDescription.innerText = `Description: ${data.weather[0].description}`;
        temp.innerText = `Temperature (Celsius): ${data.main.temp}`;
        tempFeels.innerText = `Feels like: ${data.main.feels_like}`;
        wind.innerText = `Wind Speed (mps): ${data.wind.speed}`;
        console.log(data.weather[0].main);
        setImg();
    });
}
