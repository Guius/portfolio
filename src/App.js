// library imports
import React from "react";
import { Switch, Route } from "react-router-dom";

// component imports
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import ProjectPresentation from "./components/ProjectPresentation";

// stylesheet imports
import "./styles.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/projects/:id">
          <ProjectPresentation />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Intro />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
