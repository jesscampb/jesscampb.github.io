// Collapsable project details

function showDetails(projectId){
    const details = document.getElementById(projectId);

    if (details.style.display === "block"){
        details.style.display = "none";
    }
    else{
        details.style.display = "block";
    }
}


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
            throw new Error("Could not fetch weather data.");
        }

        const data = await response.json();
        displayWeatherInfo(data);
    }
    catch(error){
        console.error(error);
        displayError(error);
    }
}


// Display fetched weather data
function displayWeatherInfo(data){
    const {name: city, 
           main: {temp, feels_like}, 
           weather: [{description, id}]} = data;

    weatherCard.textContent = "";
    // weatherCard.style.display = "flex";

    const cityDisplay = document.createElement("h2");
    const tempDisplay = document.createElement("p");
    const feelsLikeDisplay = document.createElement("p");
    const descriptionDisplay = document.createElement("p");
    const weatherIcon = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp).toFixed()}°C`;
    feelsLikeDisplay.textContent = `Känns som: ${(feels_like).toFixed()}°C`;
    descriptionDisplay.textContent = description;
    weatherIcon.textContent = getWeatherIcon(id);

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

    // Ändra string returns till ikoner/bilder från images-mappen eller liknande
    switch (true){
        case (weatherId >= 200 && weatherId < 300):
            return "thunderstorm icon";
        case (weatherId >= 300 && weatherId < 400):
            return "drizzle icon";
        case (weatherId >= 500 && weatherId < 600):
            return "rain icon";
        case (weatherId >= 600 && weatherId < 700):
            return "snow icon";
        case (weatherId >= 700 && weatherId < 800):
            return "mist icon";
        case (weatherId === 800):
            return "clear sky/sun icon";
        case (weatherId >= 801 && weatherId < 810):
            return "clouds icon";
        default:
            return "unknown weather/ufo icon";
    }
}


function displayError(message){
    
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    
    weatherCard.textContent = "";
    // weatherCard.style.display = "flex";
    weatherCard.appendChild(errorDisplay);
}