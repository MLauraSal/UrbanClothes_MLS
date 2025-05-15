// src/components/Weather.jsx
import { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState('');
  const apiKey = '4d507bef141cf821e38f1f93c895e2ff';

  const fetchWeather = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
      );
      if (!response.ok) throw new Error('Ciudad no encontrada');
      const data = await response.json();
      const { name, main, weather } = data;
      setWeatherInfo(`${name}: ${main.temp} °C, ${weather[0].description}`);
    } catch (err) {
      setWeatherInfo(err.message);
    }
  };

  return (
    <form onSubmit={fetchWeather}>
      <input
        type="text"
        placeholder="Ingresa ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Consultar clima</button>
      <p>{weatherInfo}</p>
    </form>
  );
};

export default Weather;
