import React, {useContext} from 'react';

import Context from '../Weather/Context';

import styled from 'styled-components'; 

const WeatherBox = styled.div`
  padding:15px 5px;;

`;

const Input = styled.input`
  padding: 6px 6px;  
`;

const Button = styled.button`
 padding: 6px 6px; 

`



const WeatherSearch = ()  => {

  const {api_call} = useContext(Context)
  
  return(
      <WeatherBox>
      
        <form onSubmit={api_call} className="weather-search__form">
          <Input name="location"  autoComplete="off" className="weather-search__input" type="text"/>
          <div className="weather-search__submit">
            <Button>&rarr;</Button>
          </div>
        </form>
      </WeatherBox>
  )
}

export default WeatherSearch;