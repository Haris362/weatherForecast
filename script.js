const key = `64383eaff8a68d22420b853da5794636`;
const button = document.getElementById("submit");
const weatherImg = document.getElementById("weather-image");
const temp = document.getElementById("temp");
const wind = document.getElementById("windSpeed");
const humidity = document.getElementById("humidityQuantity");
const feelsLike = document.getElementById("feelsLikeTemp");
const clouds = document.getElementById("cloudsQuantity");
const windAngle = document.getElementById("angle");
const input = document.getElementById("city");
const date = document.getElementById("date");
const angleIcon = document.getElementById("windAngleImg");
const hourlyForecast = document.getElementById("hourly-forecast");
const weatherForecast = document.getElementById("weather-forecast");
const settingsIcon = document.getElementById("settings-icon");
const settings = document.getElementById("settings");
const aheadDays = document.getElementById("aheadDays-detail")
const weatherImage = document.getElementById("indexImg");
settingsIcon.addEventListener("click", () => {
    settings.classList.toggle("settingsActive");
});
document.body.addEventListener("click", () => {
    if (settings.style.display === 'block') {
        settings.style.display = 'none';
    }
});

// Weather Codes
const weatherCodesArr = [
    { code: 0, icon: 'bx bxs-sun', icon2: 'bx bxs-moon', text: 'Clear sky', style: 'color: #FFD700; font-size: 2.5rem; text-shadow: 0 0 10px rgba(255,215,0,0.7);' },
    { code: 1, icon: 'bx bx-sun', icon2: 'bx bxs-moon', text: 'Mainly clear', style: 'color: #FFEC8B; font-size: 2.5rem; text-shadow: 0 0 8px rgba(255,236,139,0.6);' },
    { code: 2, icon: 'bx bx-cloud', text: 'Partly cloudy', style: 'color: #B0C4DE; font-size: 2.5rem; text-shadow: 0 0 6px rgba(176,196,222,0.6);' },
    { code: 3, icon: 'bx bxs-cloud', text: 'Overcast', style: 'color: #A9A9A9; font-size: 2.5rem; text-shadow: 0 0 5px rgba(169,169,169,0.5);' },
    { code: 45, icon: 'bx bx-cloud-fog', text: 'Fog', style: 'color: #D3D3D3; font-size: 2.5rem; text-shadow: 0 0 12px rgba(211,211,211,0.7);' },
    { code: 48, icon: 'bx bx-cloud-fog', text: 'Depositing rime fog', style: 'color: #E8E8E8; font-size: 2.5rem; text-shadow: 0 0 12px rgba(232,232,232,0.8);' },
    { code: 51, icon: 'bx bx-cloud-drizzle', text: 'Light drizzle', style: 'color: #87CEFA; font-size: 2.5rem; text-shadow: 0 0 8px rgba(135,206,250,0.6);' },
    { code: 53, icon: 'bx bx-cloud-drizzle', text: 'Moderate drizzle', style: 'color: #5DADE2; font-size: 2.5rem; text-shadow: 0 0 8px rgba(93,173,226,0.6);' },
    { code: 55, icon: 'bx bx-cloud-drizzle', text: 'Dense drizzle', style: 'color: #4682B4; font-size: 2.5rem; text-shadow: 0 0 8px rgba(70,130,180,0.6);' },
    { code: 56, icon: 'bx bx-cloud-drizzle', text: 'Light freezing drizzle', style: 'color: #B0E0E6; font-size: 2.5rem; text-shadow: 0 0 8px rgba(176,224,230,0.7);' },
    { code: 57, icon: 'bx bx-cloud-drizzle', text: 'Dense freezing drizzle', style: 'color: #AFEEEE; font-size: 2.5rem; text-shadow: 0 0 8px rgba(175,238,238,0.7);' },
    { code: 61, icon: 'bx bx-cloud-rain', text: 'Slight rain', style: 'color: #00BFFF; font-size: 2.5rem; text-shadow: 0 0 10px rgba(0,191,255,0.6);' },
    { code: 63, icon: 'bx bx-cloud-rain', text: 'Moderate rain', style: 'color: #1E90FF; font-size: 2.5rem; text-shadow: 0 0 10px rgba(30,144,255,0.6);' },
    { code: 65, icon: 'bx bx-cloud-rain', text: 'Heavy rain', style: 'color: #0000CD; font-size: 2.5rem; text-shadow: 0 0 10px rgba(0,0,205,0.6);' },
    { code: 66, icon: 'bx bx-cloud-rain', text: 'Light freezing rain', style: 'color: #87CEEB; font-size: 2.5rem; text-shadow: 0 0 8px rgba(135,206,235,0.6);' },
    { code: 67, icon: 'bx bx-cloud-rain', text: 'Heavy freezing rain', style: 'color: #4682B4; font-size: 2.5rem; text-shadow: 0 0 8px rgba(70,130,180,0.6);' },
    { code: 71, icon: 'bx bx-cloud-snow', text: 'Slight snow fall', style: 'color: #F0F8FF; font-size: 2.5rem; text-shadow: 0 0 10px rgba(240,248,255,0.8);' },
    { code: 73, icon: 'bx bx-cloud-snow', text: 'Moderate snow fall', style: 'color: #E0FFFF; font-size: 2.5rem; text-shadow: 0 0 10px rgba(224,255,255,0.8);' },
    { code: 75, icon: 'bx bx-cloud-snow', text: 'Heavy snow fall', style: 'color: #B0E0E6; font-size: 2.5rem; text-shadow: 0 0 10px rgba(176,224,230,0.8);' },
    { code: 77, icon: 'bx bx-cloud-snow', text: 'Snow grains', style: 'color: #ADD8E6; font-size: 2.5rem; text-shadow: 0 0 8px rgba(173,216,230,0.8);' },
    { code: 80, icon: 'bx bx-cloud-drizzle', text: 'Slight rain showers', style: 'color: #87CEFA; font-size: 2.5rem; text-shadow: 0 0 8px rgba(135,206,250,0.6);' },
    { code: 81, icon: 'bx bx-cloud-drizzle', text: 'Moderate rain showers', style: 'color: #1E90FF; font-size: 2.5rem; text-shadow: 0 0 8px rgba(30,144,255,0.6);' },
    { code: 82, icon: 'bx bx-cloud-drizzle', text: 'Violent rain showers', style: 'color: #0000CD; font-size: 2.5rem; text-shadow: 0 0 8px rgba(0,0,205,0.6);' },
    { code: 85, icon: 'bx bx-cloud-snow', text: 'Slight snow showers', style: 'color: #E0FFFF; font-size: 2.5rem; text-shadow: 0 0 8px rgba(224,255,255,0.8);' },
    { code: 86, icon: 'bx bx-cloud-snow', text: 'Heavy snow showers', style: 'color: #B0E0E6; font-size: 2.5rem; text-shadow: 0 0 8px rgba(176,224,230,0.8);' },
    { code: 95, icon: 'bx bx-cloud-lightning', text: 'Thunderstorm', style: 'color: #FFD700; font-size: 2.5rem; text-shadow: 0 0 15px rgba(255,215,0,0.8);' },
    { code: 96, icon: 'bx bx-cloud-lightning', text: 'Thunderstorm with slight hail', style: 'color: #FFEC8B; font-size: 2.5rem; text-shadow: 0 0 15px rgba(255,236,139,0.8);' },
    { code: 99, icon: 'bx bx-cloud-lightning', text: 'Thunderstorm with heavy hail', style: 'color: #FFA500; font-size: 2.5rem; text-shadow: 0 0 15px rgba(255,165,0,0.8);' }
];

function eventHandler() {
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            getWeather();
        }
    });
    document.addEventListener("keydown", (event) => {
        if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "k") {
            input.focus();
        } else if (event.key.toLowerCase() === "escape") {
            input.blur();
        }
    });
}
eventHandler();

button.addEventListener("click", async () => {
    getWeather();
});

async function getWeather() {
    const cities = document.getElementById("city").value.trim();
    const city = cities.toLowerCase();
    const userLocation_text = document.getElementById("location");
    if (city === ""){
        alert("Please search any city.")
    }

    async function currentWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
        const data = await response.json();
        console.log(data);

        try {
            const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            weatherImg.src = iconUrl;

            temp.innerHTML = Math.ceil(data["main"]["temp"]) + '°C';
            wind.innerHTML = Math.ceil(data["wind"]["speed"] * 3.6) + 'Km/h';
            humidity.innerHTML = data["main"]["humidity"] + '%';
            feelsLike.innerHTML = Math.round(data["main"]["feels_like"]) + '°C';
            clouds.innerHTML = data["clouds"]["all"] + '%';
            const windDeg = Math.ceil(data["wind"]["deg"]);
            windAngle.innerHTML = windDeg + '°';
            const localTime = new Date((data.dt) * 1000);
            
            date.innerHTML = localTime.toDateString();
            userLocation_text.innerHTML = data.name;
            angleIcon.style.transform = `rotate(-${windDeg}deg)`;
            const lat = data["coord"]["lat"];
            const lon = data["coord"]["lon"];
            const sunSet = data["sys"]["sunset"];
            const sunRise = data["sys"]["sunrise"];
            
            function backgroundChanger() {
                const weather = data.weather[0].main.toLowerCase();
                const hour = localTime.getHours();
                const isNight = hour < 7 || hour > 19;
                
                if (weather.includes("clear")) {
                    document.body.style.background = isNight
                    ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
                    : "linear-gradient(135deg, #fceabb, #f8b500)";
                } else if (weather.includes("cloud")) {
                    document.body.style.background = isNight
                    ? "linear-gradient(135deg, #232526, #414345)"
                    : "linear-gradient(135deg, #bdc3c7, #2c3e50)";
                } else if (weather.includes("rain")) {
                    document.body.style.background = isNight
                    ? "linear-gradient(135deg, #141e30, #243b55)"
                    : "linear-gradient(135deg, #4b79a1, #283e51)";
                } else if (weather.includes("thunderstorm")) {
                    document.body.style.background = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";
                } else if (weather.includes("snow")) {
                    document.body.style.background = "linear-gradient(135deg, #e6dada, #274046)";
                } else if (weather.includes("mist") || weather.includes("fog") || weather.includes("haze")) {
                    document.body.style.background = "linear-gradient(135deg, #757f9a, #d7dde8)";
                } else {
                    document.body.style.background = isNight
                    ? "linear-gradient(135deg, #283048, #859398)"
                    : "linear-gradient(135deg, #89f7fe, #66a6ff)";
                }
            }
            backgroundChanger();
            forecastHours(lat, lon, sunRise, sunSet);
            aheadDay(lat,lon)
            weatherImage.style.display = 'none'
            
        } catch (error) {
            alert("No city found please seacrh correct city name.")
        }
    }
    currentWeather();
    async function forecastHours(lat, lon, sunRise, sunSet) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation,cloudcover,weathercode&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&forecast_days=7&timezone=auto`;
        const response = await fetch(url);
        const data = await response.json();

        const hourlyForecast_Date = data.hourly.time;
        const hourlyForecast_Temp = data.hourly.temperature_2m;
        const weatherCode = data.hourly.weathercode;

        const sunriseHour = new Date(sunRise * 1000).getHours();
        const sunsetHour = new Date(sunSet * 1000).getHours();

        hourlyForecast.innerHTML = "";

        try {
            const slicedDates = hourlyForecast_Date.slice(0, 25);
            const slicedTemps = hourlyForecast_Temp.slice(0, 25);
            const slicedWeatherCode = weatherCode.slice(0, 25);

            slicedDates.forEach((timeStr, i) => {
                let code = slicedWeatherCode[i];
                let result = weatherCodesArr.find(x => x.code === code);

                const apiTime = new Date(timeStr);
                const hour = apiTime.getHours();
                const filteredHours = apiTime.toLocaleTimeString([], { hour: 'numeric' });

                const isNight = hour < sunriseHour || hour >= sunsetHour;

                const hourlyForecast_Card = document.createElement("div");
                hourlyForecast_Card.className = 'hourlyForecast_Cards';

                const hourlyHrs = document.createElement("h3");
                hourlyHrs.innerHTML = `${filteredHours}`;

                const hourlyIcon = document.createElement("i");
                hourlyIcon.className = result?.icon;
                hourlyIcon.style = result?.style;

                const tempEl = document.createElement("p");
                tempEl.textContent = `${Math.round(slicedTemps[i])}°C`;

                hourlyForecast_Card.appendChild(hourlyHrs);
                hourlyForecast_Card.appendChild(hourlyIcon);
                hourlyForecast_Card.appendChild(tempEl);
                hourlyForecast.appendChild(hourlyForecast_Card);
            });
        } catch (error) {
            console.log(error);
        } finally {
            weatherForecast.style.display = 'flex';
        }
    }

    async function aheadDay(lat,lon) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation,cloudcover,weathercode&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&forecast_days=7&timezone=auto`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        try {
            const reqTime = data["daily"]["time"];
            // MonthsArray 
            let monthArr = ['Jan', "Feb", 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let daysArr = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const aheadForecast_WeatherCode = data["daily"]["weathercode"]
            console.log(aheadForecast_WeatherCode);
            
            aheadDays.innerHTML = ''
            for (let i = 0; i < reqTime.length; i++) {
                const element = reqTime[i];
                // Ahead forecast card
                const aheadDay_Card = document.createElement("div");
                aheadDay_Card.className = `aheadDay_Card`;
                aheadDays.appendChild(aheadDay_Card);
                
                // Ahead Forecast Month
                const months = new Date(element).getMonth();
                let day = new Date(element).getDay();
                // Ahead forecast temprature
                const minTemp = data["daily"]["temperature_2m_min"]
                const maxTemp = data["daily"]["temperature_2m_max"]
                let code = aheadForecast_WeatherCode[i];
                let result = weatherCodesArr.find(x => x.code === code);
        
                aheadDay_Card.innerHTML =
                `
                <div class = aheadForecast_DateDay>
                <h2 class = 'date'>${new Date(element).getDate()},${monthArr[months]}</h2>
                <span class = 'day'> ${daysArr[day]}</span>
                </div>
                <div class="weather">
                    <i class = "${result.icon}" style="${result.style}" id="aheadForecastIcon"></i>
                    <span class="weatherDesc">${result.text}</span>
                </div>
                <div class="aheadTemprature">
                        <span class="ahead_Min_Max_Temp">${Math.round(maxTemp[i])}°/${Math.round(minTemp[i])}°</span>
                </div>
                `
            }
        } catch (error) {
            console.log(error);
        }
    }   
}
