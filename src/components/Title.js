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
`;

const Title = () => {
  return (
    <TitleContainer>
      {/* <TitleText id="title">{data.name}</TitleText> */}
      <Typed
        strings={["Guillaume Vitry", "Guy Vitry for short ;)", "Guy Vitry"]}
        typeSpeed={80}
        backspeed={1000}
        backDelay={1000}
        startDelay={500}
        className={styles.title}
      />
    </TitleContainer>
  );
};

export default Title;
