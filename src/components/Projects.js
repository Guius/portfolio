// libarry imports
import React from "react";
import styled from "styled-components";

// component imports
import Wrapper from "./Wrapper";
import Navbar from "./Navbar";

const ProjectsWrapper = styled(Wrapper)`
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 4fr 12fr 3fr;
`;

function Projects() {
  return (
    <ProjectsWrapper>
      <Navbar />
    </ProjectsWrapper>
  );
}

export default Projects;
