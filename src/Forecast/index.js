import React, {Component} from 'react';
import './style.css';

const Forecast = (props) => {
  const array = [4, 12, 20, 28, 36]
  const weatherList = props.list.map((day, i) => {

    if (array.includes(i)) {
      return (
            <div>
              <p>{day.dt_txt}</p>
              <p>{day.main.temp}</p>
            </div>
        )
      }
    })

    return(
      <div className="forecastContainer">
        {props.list && <p>5 Day Forecast: {weatherList}</p>}
      </div>
    )
}


export default Forecast;
