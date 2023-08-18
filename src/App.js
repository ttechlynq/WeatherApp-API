import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import { fetchWeatherData } from './redux/actions/weatherActions';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const weatherData = useSelector((state) => state.weather.weatherData);

    const onSubmit = ({ location }) => {
        dispatch(fetchWeatherData(location));
    };
  return (

    <div className="App">
        <h1>Weather Data</h1>

        <WeatherForm onSubmit={onSubmit} />
        {weatherData && <WeatherInfo weatherData={weatherData} />}
    </div>

  );
}

export default App;

