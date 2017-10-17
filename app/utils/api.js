import axios from 'axios';

const API_KEY = '0b3224f8fb2d960105cc59bac97fa12e';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}&q=`;

const Api = {
  getWeather: function(city) {
    const url = `${ROOT_URL}${city},us&cnt=5`;
    return axios.get(url)
    .then(function(data) {
      console.log(data.data.list[0]);
      return data.data;
    });
  }
};

export default Api;
