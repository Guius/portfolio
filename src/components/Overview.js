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
  grid-row: 2/3;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const ProfessionContainer = styled(LocationContainer)`
  grid-row: 1/2;
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

const ProfessionText = styled.a`
  text-decoration: none;
  font-family: "Lexend Deca", sans-serif;

  color: #999999;
  font-size: 35px;
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
          {/* <LocationText>
            <a href="https://www.coshop.io/" target="_blank" rel="noreferrer">
              Intern at Coshop
            </a>
          </LocationText> */}
          <ProfessionText as="a" href="https://www.coshop.io/" target="_blank">
            Intern at Coshop
          </ProfessionText>
        </TextContainer>
      </ProfessionContainer>
    </OverviewContainer>
  );
};

export default Overview;
