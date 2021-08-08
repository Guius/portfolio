// library imports
import styled from "styled-components";

// component imports
import Container from "./Container";
import TitleText from "./TitleText";

// stylesheet imports
import styles from "./../styles.module.css";

const TitleContainer = styled(Container)`
  text-align: center;
  grid-row: 2/3;
`;

const Title = () => {
  return (
    <TitleContainer>
      <TitleText
        strings={["Projects", "Click to see more"]}
        style={styles.subtitle}
      />
    </TitleContainer>
  );
};

export default Title;
