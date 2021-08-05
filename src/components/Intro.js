// library imports
import React from "react";

// data imports
import data from "./../data/mainInformation";

// component imports
import Wrapper from "./Wrapper";
import Title from "./Title";
import ProfilePicture from "./ProfilePicture";
import Skills from "./Skills";
import Next from "./NextPage";
import Location from "./Location";

function Intro() {
  return (
    <Wrapper green>
      <Title>{data.name}</Title>
      <ProfilePicture />
      <Location />
      <Skills />
      <Next />
    </Wrapper>
  );
}

export default Intro;
