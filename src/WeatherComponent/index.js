import React, {Component} from 'react';
import Form from '../Form';

const myKey = '402d7e1be7d12edc9a150341e2cc2859';

class WeatherComponent extends Component {
  constructor() {
    super();
    this.state = {
      weather: ''
    }
  }

  getWeather = async (searchQuery) => {
    const weather = await fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + searchQuery + ',us&APPID=402d7e1be7d12edc9a150341e2cc2859');
    const response = await weather.json();
    console.log(response);
    return response;
  }

  getWeatherWithSearch = (searchQuery) => {
    this.getWeather(searchQuery).then((weather) => {
      this.setState({weather: weather})
    }).catch((err) => {
      console.log(err);
    })
  }

  componentDidMount(){
  this.getWeather().then((weather) => {
    this.setState({weather: weather})
  }).catch((err) => {
    console.log(err);
  })
  }


  render() {
    return(
      <div>
        <Form getWeatherWithSearch = {this.getWeatherWithSearch} />
      </div>
    )
  }
}

export default WeatherComponent;
