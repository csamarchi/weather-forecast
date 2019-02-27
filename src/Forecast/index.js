import React, {Component} from 'react';


const Forecast = (props) => {
  console.log("TESTESTEST" + props.list)
  const weatherList = props.list.map((day, i) => {
    console.log(day);
    return (
          <div>
            {props.list && <p>TESTEST: </p>}
          </div>
      )
    })

    return(
      <div>
      {props.list && <p>TESTEST: {weatherList}</p>}
      </div>
    )
}


export default Forecast;
// {props.list && <p>Location: {props.list}</p>}

// const Forecast = (props) => {
//   const weatherList = this.props.list.map((day, i) => {
//     console.log(day);
//
//     return(
//       <div>
//         <h1> Temperature: </h1>
//       </div>
//     )
//   })
//
//   return(
//     <div>
//       <h1> 5 Day Forecast </h1>
//       {weatherList}
//     </div>
//   )
// }
//
//
// export default Forecast;
