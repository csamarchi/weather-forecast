import React, {Component} from 'react';
import Form from '../Form';
import CurrentWeather from '../CurrentWeather';
import Forecast from '../Forecast';


class WeatherComponent extends Component {
  constructor() {
    super();
    this.state = {
      forecast: []
    }
  }

  getWeather = async (searchQuery) => {
    const weather = await fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + searchQuery + ',us&APPID=402d7e1be7d12edc9a150341e2cc2859');
    const response = await weather.json();
    return response;
  }

  getForecast = async (searchQuery) => {
    const weather = await fetch('http://api.openweathermap.org/data/2.5/forecast?zip=' + searchQuery + ',us&APPID=402d7e1be7d12edc9a150341e2cc2859');
    const response = await weather.json();
    console.log(response, 'christine');
    return response;
  }

  getWeatherWithSearch = (searchQuery) => {
    this.getWeather(searchQuery).then((weather) => {
      this.setState({
      temperature: weather.main.temp,
      city: weather.name,
      high: weather.main.temp_max,
      low: weather.main.temp_min,
      description: weather.weather[0].description,
    })
    }).catch((err) => {
      console.log(err);
    })
  }

  getForecastWithSearch = (searchQuery) => {
    this.getForecast(searchQuery).then((forecast) => {
      this.setState({
        list: forecast.list
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  componentDidMount(){
  this.getForecast().then((forecast) => {
    this.setState({list: forecast.list})
  }).catch((err) => {
    console.log(err);
  })
  }


  render() {
    return(
      <div>
        <Form getWeatherWithSearch = {this.getWeatherWithSearch} getForecastWithSearch = {this.getForecastWithSearch} />
        {this.state.temperature ? <CurrentWeather
          temperature= {this.state.temperature}
          high= {this.state.high}
          low= {this.state.low}
          description= {this.state.description}
          /> : null}
        {this.state.list ? <Forecast list = {this.state.list} /> : null}
      </div>
    )
  }
}

export default WeatherComponent;
