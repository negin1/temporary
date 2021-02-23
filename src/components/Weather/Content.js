import React from 'react';
import styled from 'styled-components';

const WeatherContent = styled.div`
 background-color: #fff;
  border-radius: 15px;
  width:250px;
  margin: 20px 20px;
  padding:20px 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  
 `;

  const WeatherTitle = styled.h1`
  font-size: 15px;
  margin:10px 10px;
  text-align:center;
  font-weight:bold;

 `;

 const TheApp =styled.div`
  padding: 5px 5px;
 `;



const Content = (props) => {
  return (
<WeatherContent>
 <WeatherTitle> My weather forecast! </WeatherTitle>
 <TheApp>
    <div className="content">
    {props.children}
    </div>
  </TheApp>
  </WeatherContent>
  )
}

export default Content;
