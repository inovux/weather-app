import React from 'react';
import WeatherForm from './weather-form';

const Header = props => {
  return (
    <header className='header'>
      <h1>Weather App</h1>
      <WeatherForm />
    </header>
  );
}

export default Header;
