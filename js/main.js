const apiKey = "7b52e8b830ec24dca7ee93a7173d74c7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city = "gembu"){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        
        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "./images/clouds.png";
            break;
    
            case "clear":
                weatherIcon.src = "./images/clear.png";
            break;
    
            case "Rain":
                weatherIcon.src = "./images/rain.png";
            break;
    
            case "Drizzle":
                weatherIcon.src = "./images/drizzle.png";
            break;
    
            case "Mist":
                weatherIcon.src = "./images/mist.png";
            break;
        
            default:
                weatherIcon.src = "./images/clouds.png";
            break;
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}


checkWeather();
searchBtn.onclick = ()=>{
    checkWeather(searchBox.value);
}