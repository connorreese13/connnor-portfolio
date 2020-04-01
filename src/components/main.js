import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./landingpage";
import About from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing}></Route>
    <Route exact path="/aboutme" component={About}></Route>
    <Route exact path="/contact" component={Contact}></Route>
    <Route exact path="/projects" component={Projects}></Route>
    <Route exact path="/resume" component={Resume}></Route>
  </Switch>
);

export default Main;
