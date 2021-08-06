// library imports
import styled from "styled-components";

// data imports
import pin from "./../data/images/pin.png";

const LocationContainer = styled.div`
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const PinContainer = styled.div`
  display: flex;
  grid-column: 1/2;
  grid-row: 1/2;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  grid-column: 2/3;
  grid-row: 1/2;
  justify-content: flext-start;
  align-items: center;
`;

const LocationText = styled.p`
  font-family: "Lexend Deca", sans-serif;
  color: #999999;
  font-size: 40px;
`;

const Image = styled.img`
  max-height: 50px;
`;

const LocationItem = (props) => {
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

export default LocationItem;
