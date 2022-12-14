// memanggil button dengan id button
const searchButton = document.querySelector('#button');
// memanggil input dengan id input-keyword
const inputKeyword = document.querySelector('.input-keyword');

// ketika button search di klik
searchButton.addEventListener('click', function() {
    // API Weather Forecast
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputKeyword.value+"&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric")
        .then(response => response.json())
        .then(response => {
            // show content weather
            document.querySelector('#city').innerText = response.name + ", " + response.sys.country;
            document.querySelector('.geo').innerText = "Geo Coordinates : " + response.coord.lat + ", " + response.coord.lon;
            document.querySelector('#condition').innerHTML = "<b>" + response.weather[0].description + "</b>";
            document.querySelector('#temperature').innerHTML = "<b>" + response.main.temp + " °С</b>";
            document.querySelector('#windSpeed').innerHTML = "<b>" + response.wind.speed + " m/s</b>";
        })
    inputKeyword.value = null;

})