// library imports
import styled from "styled-components";

// data imports
import data from "./../data/mainInformation";

const SkillsContainer = styled.div`
  grid-row: 3/4;
  grid-column: 1/3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  @media (max-width: 700px) {
    height: 25vh;
    padding-top: 0.5em;
    padding-bottom: 1em;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2fr;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillText = styled.p`
  color: #d77d73;
  border: solid #d77d73 2px;
  border-radius: 25px;
  font-family: "Lexend Deca", sans-serif;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  font-size: 25px;
  @media (max-width: 700px) {
    font-size: 17px;
    padding-top: 6px;
    padding-bottom: 6px;
  }
`;

const listItems = data.mainSkills.map((el) => (
  <Container key={el}>
    <SkillText>{el}</SkillText>
  </Container>
));

const Skills = () => {
  return <SkillsContainer>{listItems}</SkillsContainer>;
};

export default Skills;
