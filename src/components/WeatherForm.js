import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './WeatherForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../redux/actions/weatherActions';


const WeatherForm = ({ onSubmit }) => {
const [location, setLocation] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log('Location:', location);
        onSubmit({location});
    }


  return (
  <div className='weather-form'>
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
        required
      />
      <button type="submit">Fetch Weather</button>
    </form>
    </div>
  );
};

export default WeatherForm;