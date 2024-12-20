// Weather API

const apiKey = "211ebcacbe72f8271cad90e28195cf46";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=${apiKey}`;


async function getWeatherData() {
    
    try{
        const response = await fetch(weatherUrl);

        if(!response.ok){
            throw new Error("Could not fetch resource.");
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}