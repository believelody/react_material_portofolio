import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage, Resume, AboutMe, Contact, Projects } from '../Export';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about-me" component={AboutMe} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
  </Switch>
);

export default Main;
