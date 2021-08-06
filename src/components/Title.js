// library imports
import { useEffect } from "react";
import styled from "styled-components";
import Typed from "react-typed";

// data imports
import data from "../data/mainInformation";

// component imports
import Container from "./Container";

// stylesheet imports
import styles from "./../styles.module.css";

const TitleContainer = styled(Container)`
  @media (max-width: 500px) {
    height: 25vh;
  }
  text-align: center;
`;

const Title = () => {
  return (
    <TitleContainer>
      {/* <TitleText id="title">{data.name}</TitleText> */}
      <Typed
        strings={["Guy Vitry", "github.com /Guius/"]}
        typeSpeed={80}
        backspeed={1000}
        backDelay={5000}
        className={styles.title}
        loop
      />
    </TitleContainer>
  );
};

export default Title;
