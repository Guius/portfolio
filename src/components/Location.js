// library imports
import styled from "styled-components";

// component imports
import Container from "./Container";

// data imports
import pin from "./../data/images/pin.png";
import sign from "./../data/images/signs.png";

const OverviewContainer = styled(Container)`
  grid-row: 2/3;
  grid-column: 2/3;
  background-color: white;
  display: grid;
  grid-template-rows: 1fr 1fr;
  @media (max-width: 700px) {
    display: none;
  }
`;

const LocationContainer = styled.div`
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const ProfessionContainer = styled(LocationContainer)`
  grid-row: 2/3;
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
  justify-content: center;
  align-items: center;
`;

const LocationText = styled.p`
  font-family: "Lexend Deca", sans-serif;
  color: #999999;
  font-size: 35px;
`;

const Image = styled.img`
  max-height: 50px;
`;

const Overview = () => {
  return (
    <OverviewContainer>
      <LocationContainer>
        <PinContainer>
          <Image src={pin} />
        </PinContainer>
        <TextContainer>
          <LocationText>Southampton</LocationText>
        </TextContainer>
      </LocationContainer>
      <ProfessionContainer>
        <PinContainer>
          <Image src={sign} />
        </PinContainer>
        <TextContainer>
          <LocationText>Intern at Coshop</LocationText>
        </TextContainer>
      </ProfessionContainer>
    </OverviewContainer>
  );
};

export default Overview;
