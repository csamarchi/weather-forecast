import React, { Component } from 'react';
import './App.css';
import WeatherComponent from './WeatherComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='title'> Weather Forecast </h1>
        <WeatherComponent />
      </div>
    );
  }
}

export default App;
