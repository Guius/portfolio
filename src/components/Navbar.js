// library imports
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import stylesheets
import styles from "./../styles.module.css";

// import images
import back from "./../data/images/left-arrow.png";
import linkedin from "./../data/images/linkedin.png";
import github from "./../data/images/github.png";

const Container = styled.div`
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 6fr 3fr 3fr;
`;

const BackContainer = styled.div`
  grid-column: 1/2;
`;

const LinkedInContainer = styled.div`
  grid-column: 2/3;
`;

const GithubContainer = styled.div`
  grid-column: 3/4;
`;

// const Link = styled.a`
//   text-decoration: none;
//   font-family: "Lexend Deca", sans-serif;
//   display: flex;
//   justify-content: flex-start;
// `;

const MiddleLink = styled(Link)`
  justify-content: center;
`;

const Image = styled.img`
  height: 40px;
  padding-left: 15px;
  @media (min-width: 700px) {
    height: 46px;
  }
`;

const FlatIcon = styled.img`
  height: 40px;
`;

function Navbar() {
  return (
    <Container>
      <BackContainer>
        <Link to="/" className={styles.link}>
          <Image src={back}></Image>
        </Link>
      </BackContainer>
      <LinkedInContainer>
        <MiddleLink
          as="a"
          href="https://www.linkedin.com/in/guillaume-vitry-8797831a0/"
          target="_blank"
        >
          <Image src={linkedin}></Image>
        </MiddleLink>
      </LinkedInContainer>
      <GithubContainer>
        <MiddleLink as="a" href="https://github.com/Guius/" target="_blank">
          <Image src={github}></Image>
        </MiddleLink>
      </GithubContainer>
    </Container>
  );
}

export default Navbar;
