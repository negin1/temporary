import React from 'react';
import styled from 'styled-components';


const SkillsContainer = styled.div`
  padding-top:150px;
  margin: 0 auto;
  display: block;
  width: 80%;
 `;

const SectionTitle = styled.h1`
  margin:20px 20px;
  text-align:center;
  padding-bottom: 20px;
  font-weight:bold;
  margin-bottom: 18px;
  @media screen and (max-width: 768px){
    font-size: 20px
  }
`;


 const SkillsImg = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
     img{
        width:10%;
        padding: 3%;
        }
      @media screen and (max-width: 768px){
        img{
           width:15%;
        }
      }
 `;

 const Contact = styled.p`

    text-align:center;
    font-size: calc(18px + 2wv);
    font-weight:bold;
    line-height: 2em;
       a{
        color: black;
        font-weight:bold;
        }
        
       a:hover {
        border-bottom: 4px solid #16e0bd;
        transition: all 0.5s ease-out;
      }
 `;

  const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 20px; 
        a{
        color: black;
        font-weight:bold;
        line-height: 1em;
        padding: 0 10px;
        font-size: 30px; 
    }
  `;
 
 
const Skills = () => {
  return (
    <SkillsContainer> 
    <SectionTitle>Web Development Skills </SectionTitle>
        <SkillsImg>
        <img src="/images/logos/html.png" alt="html5 logo"/>
        <img src="/images/logos/css.png" alt="css3 logo" />
        <img src="/images/logos/js.png" alt="js logo" />
        <img src="/images/logos/react.jpg" alt="react logo"/>
        <img src="/images/logos/github.png" alt="github logo"/>
        <img src="/images/logos/git.png" alt="git logo"/>  
        </SkillsImg>

    <Contact> 
      <p>To see my skills in action, check out my <a href="https://github.com/negin1/my-portfolio"  target="_blank"  rel="noreferrer"> portfolio</a>.</p>
      
      <p> I would love to hear from you, so please drop me an <a href="mailto:negin.jalalian@gmail.com?subject= get in though">  email </a> and tell me about your project idea!</p>
    </Contact>
        

    <SocialMedia>  
    <a href="https://www.linkedin.com/in/negin-jalalian-68324824/"  target="_blank" rel="noreferrer"  > <i class="fab fa-linkedin-in"></i> </a>
    <a href="https://github.com/negin1"  target="_blank" rel="noreferrer"> <i class="fa fa-github" aria-hidden="true"></i> </a>
    </SocialMedia>
    </SkillsContainer>
  )
}

export default Skills
