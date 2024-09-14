document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = document.getElementById('city-input').value;
    const apiKey = 'a67ad4688a2344d990080412241409'; // todo: add env here 
    const weatherInfoDiv = document.getElementById('weather-info');
    const errorMessageDiv = document.getElementById('error-message');

    // Clear previous data
    weatherInfoDiv.innerHTML = '';
    errorMessageDiv.textContent = '';

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        if (!response.ok) throw new Error('Weather data could not be fetched');

        const data = await response.json();
          console.log(data);
       
        const weatherHTML = `
            <h2>Weather in ${data.location.name}</h2>
            <image src="${data.current.condition.icon}" class="image"></image>
            <p><strong>Temperature:</strong> ${data.current.temp_c} °C</p>
            <p><strong>Condition:</strong> ${data.current.condition.text}</p>
            <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
           
            <p><strong>Wind Speed:</strong> ${data.current.wind_kph} kph</p>
        `;
        weatherInfoDiv.innerHTML = weatherHTML;
    } catch (error) {
        errorMessageDiv.textContent = error.message;
    }
});

//possible TODO: Header w Loosely Logo with Github repo Link 
