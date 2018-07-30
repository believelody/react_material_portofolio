import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Navigation } from 'react-mdl';

const Nav = () => (
  <Navigation>
    <NavLink to ="/">Home</NavLink>
    <NavLink to ="/about-me">About Me</NavLink>
    <NavLink to ="/resume">My Resume</NavLink>
    <NavLink to ="/projects">Projects</NavLink>
    <NavLink to ="/contact">Contact</NavLink>
  </Navigation>
);

export default Nav;
