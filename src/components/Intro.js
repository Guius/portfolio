// library imports
import React from "react";

// data imports
import data from "./../data/mainInformation";

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
      <Title>{data.name}</Title>
      <ProfilePicture />
      <Overview />
      <Skills />
      <Next />
    </Wrapper>
  );
}

export default Intro;
