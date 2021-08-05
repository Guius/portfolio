// library imports
import styled from "styled-components";

// component imports
import Container from "./Container";

// data imports
import pin from "./../data/images/pin.png";

const LocationContainer = styled(Container)`
  grid-row: 2/3;
  grid-column: 2/3;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media (max-width: 700px) {
    display: none;
  }
`;

const PinContainer = styled.div`
  display: flex;
  grid-column: 1/2;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  grid-column: 2/3;
  justify-content: flext-start;
  align-items: center;
`;

const LocationText = styled.p`
  font-family: "Lexend Deca", sans-serif;
  color: #999999;
  font-size: 35px;
`;

const Image = styled.img`
  max-height: 40px;
`;

const Location = () => {
  return (
    <LocationContainer>
      <PinContainer>
        <Image src={pin} />
      </PinContainer>
      <TextContainer>
        <LocationText>Southampton</LocationText>
      </TextContainer>
    </LocationContainer>
  );
};

export default Location;
