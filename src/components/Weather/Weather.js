import React, {useState} from 'react';
import styled from 'styled-components';

import axios from 'axios';
import Context from './Context';

import Content from './Content';
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';
import DateTime from './DateTime';
import Error from './Error';

const WeatherContainer = styled.div`
 padding: 20px; 
 `;



const Weather = (props) => {

  const [weather, setWeather] = useState()

  const [ city, setCity ] = useState()

  const [ error, setError ]= useState()
  
  const api_call = async e => {

    e.preventDefault()

    const location = e.target.elements.location.value

    if(!location) return setError('Please enter the name of the city'), setWeather(null)

    const API_KEY = 'd7645d47915b31b62348ef767eb389c4'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`

    const request = axios.get(url)

    const response = await request

    setWeather(response.data.main)

     setCity(response.data.name)

     setError(null)
  }

  weather && console.log(weather)

 
  return (
    <div>
    <WeatherContainer>
      <Content>
        <DateTime />
        <Context.Provider value={{api_call, weather, city }}>
          <WeatherSearch/>
            {weather && <WeatherData/>}
            {error && <Error error={error}/>}
        </Context.Provider>
      </Content>
      </WeatherContainer>
    </div>
  )
}

export default Weather;
