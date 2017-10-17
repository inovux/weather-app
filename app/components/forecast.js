import React, { Component } from 'react';
import queryString from 'query-string';
import Api from '../utils/api';
import ForecastItem from './forecast-item';

export default class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: null
    };
  }

  componentDidMount() {
    const currentCity = queryString.parse(this.props.location.search).city;

    Api.getWeather(currentCity)
    .then((data) => {
      this.setState({
        forecast: data
      });
    }
  }

  render() {
    if(!this.state.forecast) {
      return (
        <div className="forecast-details">
          <h2>Loading</h2>
        </div>
      );
    }
    return (
      <div className="forecast-details">
        <h2>{this.state.forecast.city.name}</h2>
        <ul className="forecast-list">
          {this.state.forecast.list.map(item => {
            return (
              <ForecastItem key={item.dt} forecast={item} />
            );
          })}
        </ul>
      </div>
    );
  }
};
