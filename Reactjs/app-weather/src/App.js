// App.js

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './SearchForm';
import WeatherCard from './WeatherCard';


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'YOUR_API_KEY';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const getWeatherData = async (location) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}?q=${location}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      setError('An error occurred while fetching weather data. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Weather App</h1>
      <SearchForm onSearch={getWeatherData} />
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
