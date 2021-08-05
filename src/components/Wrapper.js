import styled from "styled-components";

const Wrapper = styled.section`
  height: 90vh;
  width: 90vw;
  background-color: white;
  border-top: ${(props) =>
    props.green ? "10px #7cebc5 solid" : "10px #393b40 solid"};
  display: grid;
  // grid-template-rows: repeat(4, 1fr);
  grid-template-rows: 2fr 2fr 2fr 1fr;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 1250px) {
    width: 60vw;
    height: 80vh;
  }

  @media (max-width: 700px) {
    width: 90vw;
    height: 90vh;
    grid-template-columns: 1fr;
  }
`;

export default Wrapper;
