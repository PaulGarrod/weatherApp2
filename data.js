let cityURL = 'wellington'
let weatherURL = `api.openweathermap.org/data/2.5/weather?q=${cityURL}&appid=a961fdb45b164f313ff1cfdc95b4c5fa`

const getData = async () => {
    const response = await fetch (weatherURL, {})
    if(response.status === 200 || response.status === 204){
        const data = await response.json()
        console.log(data)
        return data
    } else {
        throw new Error ('Data could not be found!')
    }
}

getData();