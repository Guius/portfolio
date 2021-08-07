// library imports
import styled from "styled-components";
import { Link } from "react-router-dom";

// component imports
import Container from "./Container";

// stylesheet imports
import styles from "./../styles.module.css";

const NextContainer = styled(Container)`
  grid-row: 4/5;
  grid-column: 1/3;
  background-color: #f4f4f4;
  border-radius: 7px;
  border: none;

  :hover {
    background-color: #393b40;
    color: white;
    cursor: pointer;
  }
  :focus {
    background-color: #393b40;
  }
`;

const NextText = styled.p`
  font-family: "Lexend Deca", sans-serif;
  color: grey;
  font-size: 30px;
  @media (max-width: 700px) {
    font-size: 25px;
  }
`;

const Next = () => {
  return (
    <NextContainer>
      <Link to="/projects" className={styles.link}>
        <NextText>Projects &#8594;</NextText>
      </Link>
    </NextContainer>
  );
};

export default Next;
