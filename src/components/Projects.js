import React  from 'react';
import styled from 'styled-components';


const ProjecrContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 110px;
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

const ProjectDiv = styled.div`
    width: 250px;
    height: 150px;
    margin: 0 auto;
    padding-bottom:10px
  `;

const ProjectBox = styled.div `
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content:space-around;
  margin: 0 auto;

  `;
  
const EachProject = styled.div`
  background-color: #fff;
  border-radius: 15px;
  width:300px;
 
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  justify-content:space-between;
`;

  const ProjectTitle =styled.h1`
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
`;

const ProjectText = styled.div`
  height: 170px;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  font-weight:bold;
  line-height: 1.8em;
  padding: 20px 40px;
  text-align: justify;
`;

const ProjectImg = styled.img`
  width: 100%;
  border: 1px solid black;
  margin-top:10%;
`;

const Button = styled.button`
  display: block;
  background-color: #16e0bd;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 35px;
  padding: 0 20px;
  margin:40px auto;
  cursor: pointer;
  box-sizing: border-box;
   &:hover {
     border-bottom: 4px solid #fff;
  transition: all 0.2s ease-out;
   }
   a{
     color: white;
     font-size: 14px;
     font-weight:bold;
   }
`;



const projects = [
      { id: 1,
        title: "Landing Page",
        description: "This landing page has been created with HTML & CSS.",
         github:"https://github.com/negin1/LandingPage",
        img:"/images/happyRiding.png"
      }, 

      { id: 2,

        title: "Portfolio Website", 
        description: "This is the website you are currently looking at. It's the first website I created in React.", 
        github:"https://github.com/negin1/my-portfolio",
        img:"/images/portfolio.png"

        }, 

      { id: 3, 
         title: "The Quire Notebook",
        description: "This notebook  is written in vanilla  JavaScript. The text editor library CKEditor 5, was used to develop the notebook.",
        github:"https://github.com/Zztorp/fe20tp1_marker",
        img:"/images/quire.jpg"
        } 
    ];

const Projects = () => {
  return (
    <ProjecrContainer>
      <SectionTitle>Projects </SectionTitle>
          <ProjectBox>
            {projects.map((eachProject) =>(
              <EachProject>
                <div className="each-project" key={projects.id}>
                <ProjectText>
                <ProjectTitle>{eachProject.title}</ProjectTitle>
                <ProjectDescription>{eachProject.description}</ProjectDescription>
                  </ProjectText>
                <ProjectDiv>
                <ProjectImg src={eachProject.img}></ProjectImg> 
                </ProjectDiv>
                  <Button><a href={eachProject.github} target="_blank" rel="noreferrer"
                   className="githubLink">Code <i class="fab fa-github"></i> </a></Button>   
              </div>
              </EachProject>
            ))}
          </ProjectBox>
    </ProjecrContainer>
    )
}

export default Projects;
