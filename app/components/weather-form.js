import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WeatherForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    };
  }

  onInputChange = e => {
    this.setState({
      city: e.target.value
    });
  }

  render() {
    return (
      <div className="weather-form">
        <input
          className="weather-input"
          placeholder="St. George, Utah"
          value={this.state.city}
          onChange={this.onInputChange}
        />
        <Link
          type="submit"
          className="weather-button"
          to={{
            pathname: '/forecast',
            search: `?city=${this.state.city}`
          }}
          onClick={() => {
            this.onSubmitCity(this.state.city);
          }}
        >Get Weather</Link>
      </div>
    );
  }
}
