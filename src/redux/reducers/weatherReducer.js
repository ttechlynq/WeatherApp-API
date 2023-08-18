import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeatherData } from '../actions/weatherActions';

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weatherData: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.weatherData = action.payload;
            })
            .addCase(fetchWeatherData.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    },
});

export default weatherSlice.reducer;