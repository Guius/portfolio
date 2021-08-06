// library imports
import styled from "styled-components";

// data imports
import data from "./../data/mainInformation";

const SkillsGrid = styled.div`
  grid-row: 3/4;
  grid-column: 1/3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const SkillBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SkillButton = styled.button`
  border: solid #d77d73 2px;
  border-radius: 25px;
  font-family: "Lexend Deca", sans-serif;
  color: #d77d73;
  background-color: white;
  font-size: 25px;
  height: 50px;
  width: 120px;

  @media (max-width: 700px) {
    font-size: 20px;
    height: 45px;
    width: 110px;
  }
`;

const buttonList = data.mainSkills.map((el) => (
  <SkillBox key={el}>
    <SkillButton>{el}</SkillButton>
  </SkillBox>
));

const Skills = () => {
  return <SkillsGrid>{buttonList}</SkillsGrid>;
};

export default Skills;
