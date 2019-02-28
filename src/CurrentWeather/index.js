import React, {Component} from 'react';
import './style.css';

const CurrentWeather = (props) =>{

  function convertKelvin(kelvinTemp) {
    return Math.floor((kelvinTemp - 273.15) * 9/5 + 32)
  }

    return(
      <div className='weatherContainer'>
        <h2> Todays Weather </h2>
       {props.city && <p>Location: {props.city}</p>}
       {props.temperature && <p>Temperature: {convertKelvin(props.temperature)}</p>}
       {props.high && <p>Todays Highs: {convertKelvin(props.high)}</p>}
       {props.low && <p>Todays Lows: {convertKelvin(props.low)}</p>}
       {props.description && <p>Conditions:  {props.description}</p>}
      </div>
    )
}


export default CurrentWeather;
