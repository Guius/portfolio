// library imports
import styled from "styled-components";

// data imports
import img from "./../data/images/professional.jpg";

// component imports
import Container from "./Container";

const ImageContainer = styled(Container)`
  grid-row: 2/3;
  grid-column: 1/2;
  @media (max-width: 700px) {
    height: 25vh;
  }
`;

const ImageContent = styled.img`
  border-radius: 7px;
  height: 80%;
  @media (max-width: 700px) {
    height: 90%;
    border-radius: 7px;
  }
`;

const Image = () => {
  return (
    <ImageContainer>
      <ImageContent src={img} />
    </ImageContainer>
  );
};

export default Image;
