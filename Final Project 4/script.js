// const searchButton = document.querySelector('#button-addon2');
// searchButton.addEventListener('click', async () => {
//     // // mengambil nilai yang diinputkan user di id inputUser ke variabel userInput
//     // const userInput = document.getElementById('inputUser').value
//     // // mengubah nilai dari id country dengan nilai yang diinputkan user
//     // document.querySelector('#city').innerHTML = userInput 

    
//     const inputKeyword = document.querySelector('.input-keyword');

//     // mengambil data dari API

//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputKeyword}&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric`)
//     const dataJson = await response.json()

//     if (dataJson.results != 0) {
//         // jika negara yang diinputkan user ada di data API
//         const data = dataJson.response[0]
//         document.querySelector('#condition').innerText = data.weather.description
//         document.querySelector('#temperature').innerText = data.main.temp
//         document.querySelector('#windSpeed').innerText = data.wind.speed
//     }else {
//         // jika negara yang diinputkan user tidak ada di data API
//         alert("No Data Covid-19 in " + userInput)
//         document.querySelector('#temperature').innerText = 0
//         document.querySelector('#windSpeed').innerText = 0
//     }
// })




const searchButton = document.querySelector('#button-addon2');
const inputKeyword = document.querySelector('.input-keyword');
document.body.style.backgroundImage = 'url(img/sky.jpg)'

searchButton.addEventListener('click', function() {

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputKeyword.value+"&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric")
        .then(response => response.json())
        .then(response => {
            let result = document.querySelector('.result')

            result.innerHTML = `<h2 style="margin-bottom: 15px;">${response.name}, ${response.sys.country}</h2>
                                <h5><span class="temp">${response.main.temp}°С</span> <span class="temp">${response.weather[0].description}</span></h5>
                                <p style="margin-bottom: 17px;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
                                <h5>Wind Speed : ${response.wind.speed} m/s</h5>
                                <h5 style="margin-bottom: 17px;">Clouds : ${response.clouds.all}%</h5>
                                <h4 style="color: #012443;">Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</h4>` 
        })
    inputKeyword.value = null;

})