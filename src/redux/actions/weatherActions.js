import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '5c4a2ddec5b7356f3170117fa865ebb9';

export const fetchWeatherData = createAsyncThunk(
    'weather/fetchWeatherData',
    async (location) => {
    try {
        const response = await axios.get(
   `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`
      );
        return response.data
    }catch (error) {
        throw new Error("Nothing fetched");
    }
    }
);