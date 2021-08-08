// library imports
import styled from "styled-components";
import { Link } from "react-router-dom";

// component imports
import Container from "./Container";

// stylesheet imports
import styles from "./../styles.module.css";

// data imports
import data from "./../data/projects";

const ProjectListContainer = styled(Container)`
  grid-row: 3/4;
  overflow-x: scroll;
  justify-content: flex-start;
`;

const ProjectWrapper = styled.div`
  background-color: #f4f4f4;
  display: grid;
  grid-template-rows: 3fr 6fr 2fr;
  border-top: 10px #393b40 solid;
  height: 90%;
  min-width: 500px;
  margin-left: 40px;
  margin-right: 40px;
  @media (max-width: 700px) {
    min-width: 270px;
    margin-left: 20px;
    margin-right: 20px;
    height: 80%;
  }
`;

const ProjectTitleContainer = styled(Container)`
  grid-row: 1/2;
`;

const ProjectTitleText = styled.h2`
  font-family: "Lexend Tera", sans-serif;
  font-size: 25px;
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const listItems = data.map((el) => {
  return (
    <Link to="/" className={styles.linkProjects}>
      <ProjectWrapper>
        <ProjectTitleContainer>
          <ProjectTitleText>{el.title}</ProjectTitleText>
        </ProjectTitleContainer>
      </ProjectWrapper>
    </Link>
  );
});

function ProjectList() {
  return <ProjectListContainer>{listItems}</ProjectListContainer>;
}

export default ProjectList;
