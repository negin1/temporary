import React, {useContext} from 'react';
import Context from './Context'

import styled from 'styled-components'
const WeatherInfo =styled.p`
  font-size: 16px;
  line-height: 18px;
  text-align: center;
`


 const WeatherData = () => {
    const  {weather, city} = useContext(Context)
    const{temp} = weather

  return (
    <div>
    
    <div className="weather-data">
      <WeatherInfo>It is currently<span className="weather-data__value"> {temp}°C</span> in <span className="weather-data__city">{city}.</span></WeatherInfo>
      <div className="weather-data__box">
      <span className="weather-data__property">
    </span>
  
  </div>
  </div>
    
  </div>
  )
}
export default WeatherData;
