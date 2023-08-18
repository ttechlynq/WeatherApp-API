import React from 'react';

 const WeatherInfo = ({ weatherData }) => {
    if (!weatherData) {
    console.log(weatherData)
    return <div>Loading...</div>;
  }
//Get utc time
  const utcTime = new Date(weatherData.list[0].dt * 1000);
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  const formatLocalTime = new Intl.DateTimeFormat('eng-GB', options);
  const localtime = formatLocalTime.format(utcTime);

    return (
        <div className='weather-info'>
            {weatherData && (
                <div>
                     <h2>Location Information</h2>
                     <p className='location'>
                     Location: {weatherData.city.name}, {weatherData.city.country}
                     </p>
                     <p className='time'>
                     Time: {localtime}
                     </p>
                     <p className='temperature'>
                     Temperature: {weatherData.list[0].main.temp}C
                     </p>
                     <p className='humidity'>
                     Humidity: {weatherData.list[0].main.humidity}%
                     </p>
                </div>
            )}
        </div>
    )
}

export default WeatherInfo