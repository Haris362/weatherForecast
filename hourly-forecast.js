async function forecast() {
    const now = new Date()
    const url = `https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.127&hourly=temperature_2m,precipitation,cloudcover&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&forecast_days=7&timezone=auto`
    const response = await fetch(url)
    const data = await response.json();
    let hourlyForecast_Date = data["hourly"]["time"];

    const filteredTime = [];
    const filteredTemp = [];
    const isSameDay =
        now.getDate() === apiTime.getDate() &&
        now.getMonth() === apiTime.getMonth() &&
        now.getDay() === apiTime.getDay();
    
    if (isSameDay && apiTime.getHours() >= now.getHours()) {
        const fileteredDate = apiTime.getDate();
        const fileteredMonth = apiTime.getMonth() + 1;
        const fileteredYear = apiTime.getFullYear();
        const fileteredHours = apiTime.getHours();
        
        console.log(fileteredDate, fileteredMonth, fileteredYear);
        filteredTime.push(element)
        filteredTemp.push(hourlyForecast_Temp[i])
        // Hourly forecast card
        const hourlyForecast_Card = document.createElement("div");
        hourlyForecast.appendChild(hourlyForecast_Card);
        // Date and time of the forecast
        hourlyForecast_Card.innerHTML= `
            <h3 class = "hourlyTime">${fileteredDate}-${fileteredMonth}-${fileteredYear}-${fileteredHours}</h3>
        `
        // Temperature
        const hourlyForecast_TempEl = document.createElement("p");
        hourlyForecast_TempEl.innerHTML = `${hourlyForecast_Temp[i]}°C`;
        hourlyForecast_Card.appendChild(hourlyForecast_TempEl);
    }

    console.log(slicedForecast);
}
// forecast()

// let monthArr = ['Jan', "Feb", 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                // filteredMonth = monthArr[filteredMonth];
                // Date & time
                // const timeEl = document.createElement("span");
                // timeEl.className = "hourlyTime";
                // timeEl.textContent = `${filteredDate}/${filteredMonth}/${filteredYear}`;
                // const filteredDate = apiTime.getDate();
                // let filteredMonth = apiTime.getMonth();
                // const filteredYear = apiTime.getUTCFullYear();
async function dateTime(params) {
    
}