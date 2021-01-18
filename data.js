let cityURL = 'wellington'

const getData = async () => {
    const response = await fetch (weatherURL, {})
    if(response.status === 200 || response.status === 204){
        const data = await response.json()
        return data
    } else {
        // alert('Oops, seems we cant find that city!');
        throw new Error ('Data could not be found!')
    }
}

const newData = function(chosenCity){
    weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&units=metric&appid=a961fdb45b164f313ff1cfdc95b4c5fa`
    getData();
}

const setCity = document.querySelector('#setCity');
setCity.addEventListener('change', () => {
    newData(setCity.value);
    renderData();
    setCity.value = '';
});

newData(cityURL)

renderData();