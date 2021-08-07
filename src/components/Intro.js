// library imports
import React from "react";

// data imports
import data from "./../data/mainInformation";

// stylesheet imports
import styles from "./../styles.module.css";

// component imports
import Wrapper from "./Wrapper";
import Title from "./Title";
import ProfilePicture from "./ProfilePicture";
import Skills from "./SkillsGrid";
import Next from "./NextPage";
import Overview from "./Overview";

function Intro() {
  return (
    <Wrapper green>
      <Title strings={["Guy Vitry", "github.com / Guius"]} style={styles.title}>
        {data.name}
      </Title>
      <ProfilePicture />
      <Overview />
      <Skills />
      <Next link="/projects" text="Projects" />
    </Wrapper>
  );
}

export default Intro;
