import React, {Component} from 'react';
import './style.css';

const Forecast = (props) => {
  const array = [4, 12, 20, 28, 36]
  const weatherList = props.list.map((day, i) => {

    function convertKelvin(kelvinTemp) {
      return Math.floor((kelvinTemp - 273.15) * 9/5 + 32)
    }

    if (array.includes(i)) {
      return (
            <div>
              <p>{day.dt_txt}</p>
              <p>{convertKelvin(day.main.temp)}</p>
            </div>
        )
      }
    })

    return(
      <div className="forecastContainer">
        <h2> 5 Day Forecast </h2>
          {props.list && <p> {weatherList}</p>}
      </div>
    )
}


export default Forecast;
