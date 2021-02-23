import React from 'react';
import styled from 'styled-components';


const AboutContainer = styled.div`
  display: flex;
  justify-content:center;
  flex-wrap:wrap;
  margin: 0 auto;
  width: 80%;
 `;

 
const AboutContentBox =styled.div`
  padding-top: 70px;

   @media  screen and(min-width: 500px) and (max-width: 800px) {
        flex-direction: row;
        justify-content: center;
        margin: auto 0;
        padding: 10px 20px;
    }
`;

 const AboutImg = styled.img`
   border-radius:50%;
   margin-left:40px;
   width:  200px;
   height: 200px;
       @media  screen and(min-width: 500px) and (max-width: 800px) {
        padding: 20px 20px;
    }
 `;


const AbooutTitle = styled.h1`
    font-size: calc(22px + 10wv);
    font-weight:bold;
    margin-bottom: 18px; 

 `;

const AboutSubheading = styled.h2`
    font-size:  calc(22px + 10wv);
    font-weight:bold;
    margin-bottom: 10px;
 `;

 const AaboutDescription  = styled.p`
    font-size:20px;
    font-weight:bold;
    line-height: 2em;
 `;

function About() {
  return (
      <AboutContainer>
        <AboutContentBox>
          <AbooutTitle>Hi, I'm Negin J,</AbooutTitle>
            <AboutSubheading>a Frontend Developer from Stockholm.</AboutSubheading>
            <AaboutDescription>
              <p>I love working with new technologies and learn something new everyday. </p> 
              <p>Currently my main point of expertise is Frontend Development with a  focus on React.</p>
            </AaboutDescription>
         </AboutContentBox>
        <AboutContentBox>
        <AboutImg src="/images/negin.jpg" alt="Negin" ></AboutImg>
        </AboutContentBox>
     </AboutContainer>      
  );
};

export default About;
