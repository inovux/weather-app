import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import Home from './home';
import Forecast from './forecast';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null
    };
  }

  onSubmitCity = city => {
    this.setState({
      city
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Header onSubmitCity={this.onSubmitCity} />
          <Route exact path='/' render={
            () => {
              return <Home onSubmitCity={this.onSubmitCity} />;
            }}
          />
          <Route path='/forecast' component={Forecast} />
        </div>
      </BrowserRouter>
    );
  }
};
