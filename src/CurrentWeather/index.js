import React, {Component} from 'react';

const CurrentWeather = (props) =>{

    return(
      <div>
       {props.city && <p>Location: {props.city}</p>}
       {props.temperature && <p>Temperature: {props.temperature}</p>}
       {props.high && <p>Todays Highs: {props.high}</p>}
       {props.low && <p>Todays Lows: {props.low}</p>}
       {props.description && <p>Conditions:  {props.description}</p>}
      </div>
    )
}


export default CurrentWeather;
