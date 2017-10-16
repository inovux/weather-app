import React from 'react';
import WeatherForm from './weather-form';

const Home = props => {
  return (
    <main className='home'>
      <section className="weather-selection">
        <h2>Enter a City and State</h2>
        <WeatherForm />
      </section>
    </main>
  );
};

export default Home;
