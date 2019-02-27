import React, {Component} from 'react';
import './style.css';

const CurrentWeather = (props) =>{

    return(
      <div className='weatherContainer'>
        <h2> Todays Weather </h2>
       {props.city && <p>Location: {props.city}</p>}
       {props.temperature && <p>Temperature: {props.temperature}</p>}
       {props.high && <p>Todays Highs: {props.high}</p>}
       {props.low && <p>Todays Lows: {props.low}</p>}
       {props.description && <p>Conditions:  {props.description}</p>}
      </div>
    )
}


export default CurrentWeather;
