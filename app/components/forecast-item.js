import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ForecastItem = props => {
  const date = moment.unix(props.forecast.dt);
  const weekDay = moment()._locale._weekdays[date.day()];
  const month = moment()._locale._monthsShort[date.month()];
  const day = date.date();

  return (
    <li>
      <img src={`app/images/${props.forecast.weather[0].icon}.svg`} />
      <p>{`${weekDay}, ${month} ${day}`}</p>
    </li>
  );
};

ForecastItem.propTypes = {
  forecast: PropTypes.object.isRequired
};

export default ForecastItem;
