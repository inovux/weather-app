import React, { Component } from 'react';

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
      <form className="weather-form">
        <input
          className="weather-input"
          placeholder="St. George, Utah"
          value={this.state.city}
          onChange={this.onInputChange}
        />
        <button
          type="submit"
          className="weather-button"
        >Get Weather</button>
      </form>
    );
  }
}
