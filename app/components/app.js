import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import Home from './home';
import Forecast from './forecast';

const App = props => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/forecast' component={Forecast} />
      </div>
    </BrowserRouter>
  );
};

export default App;
