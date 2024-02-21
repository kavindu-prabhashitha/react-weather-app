import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = (lat, lon) => {
    //const apiKey = 'your_openweather_api_key';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=33c92b0552e0eea71460739025382726`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  return (
    <div className="container mt-5 ">
      <WeatherForm onFormSubmit={handleSubmit} />
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </div>
  );
}

export default App;