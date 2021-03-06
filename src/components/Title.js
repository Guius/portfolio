// library imports
import styled from "styled-components";

// component imports
import Container from "./Container";
import TitleText from "./TitleText";

// stylesheet imports
import styles from "./../styles.module.css";

const TitleContainer = styled(Container)`
  text-align: center;
`;

const Title = () => {
  return (
    <TitleContainer>
      <TitleText
        strings={["Guy Vitry", "github.com /Guius"]}
        style={styles.title}
      />
    </TitleContainer>
  );
};

export default Title;
