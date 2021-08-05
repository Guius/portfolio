// library imports
import styled from "styled-components";

// component imports
import Container from "./Container";

const NextContainer = styled(Container)`
  grid-row: 4/5;
  grid-column: 1/3;
  background-color: white;
  border-radius: 7px;
  //   border: 1px solid grey;
  border: none;

  :hover {
    background-color: #fafafa;
    cursor: pointer;
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
    <NextContainer as="button">
      <NextText>&#8595; Projects</NextText>
    </NextContainer>
  );
};

export default Next;
