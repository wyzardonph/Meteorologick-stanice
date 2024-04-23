const cities = [
    { name: 'Praha', temperature: 18, description: 'Slunečno', humidity: 50, windSpeed: 10 },
    { name: 'Brno', temperature: 16, description: 'Oblačno', humidity: 60, windSpeed: 15 },
    { name: 'Ostrava', temperature: 15, description: 'Deštivo', humidity: 70, windSpeed: 8 },
    { name: 'Žatec', temperature: 10, description: 'Oblačno', humidity: 88, windSpeed: 15 },
    { name: 'Rakovník', temperature: 12, description: 'Slunečno', humidity: 80, windSpeed: 9 },
    { name: 'Kadan', temperature: 13, description: 'Deštivo', humidity: 100, windSpeed: 21 },
    { name: 'Louny', temperature: 10, description: 'Oblačno', humidity: 91, windSpeed: 11 },
    { name: 'Podbořany', temperature: 16, description: 'Slunečno', humidity: 62, windSpeed: 4 },
    { name: 'Chomutov', temperature: 14, description: 'Oblačno', humidity: 55, windSpeed: 8 },
    { name: 'Kralovice', temperature: 18, description: 'Slunečno', humidity: 49, windSpeed: 13 },
    ];
    
    const citySelect = document.getElementById('city-select');
    const weatherInfo = document.getElementById('weather-info');
    
    cities.forEach(city => {
      const option = document.createElement('option');
      option.value = city.name;
      option.textContent = city.name;
      citySelect.appendChild(option);
    });
    
    citySelect.addEventListener('change', () => {
      const selectedCity = citySelect.value;
      const cityData = cities.find(city => city.name === selectedCity);
      displayWeather(cityData);
    });
    
    function displayWeather(city) {
      weatherInfo.innerHTML = `
        <h2>${city.name}</h2>
        <p>Teplota: ${city.temperature}°C</p>
        <p>Popis: ${city.description}</p>
        <p>Vlhkost: ${city.humidity}%</p>
        <p>Rychlost větru: ${city.windSpeed} km/h</p>
      `;
    }
    
    displayWeather(cities[0]);
    