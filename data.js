let cityURL = 'wellington'
let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityURL}&units=metric&appid=a961fdb45b164f313ff1cfdc95b4c5fa`

const getData = async () => {
    const response = await fetch (weatherURL, {})
    if(response.status === 200 || response.status === 204){
        const data = await response.json()
        // console.log(data);
        // console.log(data.name);
        // console.log(data.sys.country);
        // console.log(data.main.temp);
        // console.log(data.main.feels_like);
        // console.log(data.weather[0].main);
        // console.log(data.weather[0].description);
        // console.log(`Wind Speed: ${data.wind.speed}`);
        return data
    } else {
        throw new Error ('Data could not be found!')
    }
}
