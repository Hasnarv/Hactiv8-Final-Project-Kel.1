document.getElementById('buttonClick').addEventListener('click', async () => {
    // mengambil nilai yang diinputkan user di id inputUser ke variabel userInput
    const userInput = document.getElementById('inputUser').value
    // mengubah nilai dari id country dengan nilai yang diinputkan user
    document.querySelector('#country').innerHTML = userInput 

    // mengambil data dari API
    const options = {
        method: 'GET',
	    headers: {
		'X-RapidAPI-Key':'3e8e82d6f8mshe3fe81fb48532bcp10b092jsnc3df82a20718',
	}
    };
    const response = await fetch(`https://covid-193.p.rapidapi.com/history?country=${userInput}`, options)
    const dataJson = await response.json()

    if (dataJson.results != 0) {
        // jika negara yang diinputkan user ada di data API
        const data = dataJson.response[0]
        document.querySelector('#active').innerText = data.cases.active
        document.querySelector('#newCases').innerText = data.cases.new
        document.querySelector('#recoveredCases').innerText = data.cases.recovered
        document.querySelector('#totalCases').innerText = data.cases.total
        document.querySelector('#totalDeath').innerText =data.deaths.total
        document.querySelector('#totalTest').innerText = data.tests.total
    }else {
        // jika negara yang diinputkan user tidak ada di data API
        alert("No Data Covid-19 in " + userInput)
        document.querySelector('#active').innerText = 0
        document.querySelector('#newCases').innerText = 0
        document.querySelector('#recoveredCases').innerText = 0
        document.querySelector('#totalCases').innerText = 0
        document.querySelector('#totalDeath').innerText = 0
        document.querySelector('#totalTest').innerText = 0
    }
})