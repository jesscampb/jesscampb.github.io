// Weather API

const apiKey = "211ebcacbe72f8271cad90e28195cf46";
const weatherCard = document.querySelector(".weather-card");

getWeatherData();

// Fetch weather data
async function getWeatherData(){
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=${apiKey}`;
    
    try{
        const response = await fetch(apiUrl);

        if(!response.ok){
            throw new Error("Could not fetch weather data."); //displayError()??
        }

        const data = await response.json();
        displayWeatherInfo(data);
    }
    catch(error){
        console.error(error);
    }
}


// Display fetched weather data
function displayWeatherInfo(data){
    const {name: city, 
           main: {temp, feels_like}, 
           weather: [{description, id}]} = data;

    weatherCard.textContent = "";
    //weatherCard.style.display = "flex";

    const cityDisplay = document.createElement("h2");
    const tempDisplay = document.createElement("p");
    const feelsLikeDisplay = document.createElement("p");
    const descriptionDisplay = document.createElement("p");
    const weatherIcon = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp).toFixed()}°C`;
    feelsLikeDisplay.textContent = `Känns som: ${(feels_like).toFixed()}°C`;
    descriptionDisplay.textContent = description;
    weatherIcon.textContent = getWeatherIcon();

    cityDisplay.classList.add("city-display");
    tempDisplay.classList.add("temp-display");
    feelsLikeDisplay.classList.add("feels-like-display");
    descriptionDisplay.classList.add("description-display");
    weatherIcon.classList.add("weather-icon");

    weatherCard.appendChild(cityDisplay);
    weatherCard.appendChild(tempDisplay);
    weatherCard.appendChild(feelsLikeDisplay);
    weatherCard.appendChild(descriptionDisplay);
    weatherCard.appendChild(weatherIcon);
}

// Get icon based on weather ID
function getWeatherIcon(weatherId){

}


function displayError(message){
    
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    // hämtar .errorDisplay CSS - kommentera bort när css är kodat
    //errorDisplay.classList.add("errorDisplay");
    
}