import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import styled from 'styled-components';
import { Education, Skills, Experience } from '../Export';

const RightSide = styled(Cell)`
  background: #27221F;
  color: white;
  padding: 2em;
`;

const education = [
  {
    startYear: 2011,
    endYear: 2012,
    school: 'Nantes University',
    description: 'Curabitur eget tellus condimentum, consectetur est nec, pellentesque metus. Sed eget blandit lacus, quis cursus erat. Vestibulum tincidunt, sapien ut feugiat condimentum, enim est egestas eros, et posuere risus nibh ac sapien.'
  },
  {
    startYear: 2012,
    endYear: 2014,
    school: 'Rouen University',
    description: 'Curabitur eget tellus condimentum, consectetur est nec, pellentesque metus. Sed eget blandit lacus, quis cursus erat. Vestibulum tincidunt, sapien ut feugiat condimentum, enim est egestas eros, et posuere risus nibh ac sapien.'
  },
  {
    startYear: 2014,
    endYear: 2015,
    school: 'Lyon University',
    description: 'Curabitur eget tellus condimentum, consectetur est nec, pellentesque metus. Sed eget blandit lacus, quis cursus erat. Vestibulum tincidunt, sapien ut feugiat condimentum, enim est egestas eros, et posuere risus nibh ac sapien.'
  }
]

const experience = [
  {
    startYear: 2013,
    endYear: 2016,
    company: 'KFC Grand Quevilly',
    description: 'Curabitur eget tellus condimentum, consectetur est nec, pellentesque metus. Sed eget blandit lacus, quis cursus erat. Vestibulum tincidunt, sapien ut feugiat condimentum, enim est egestas eros, et posuere risus nibh ac sapien.'
  },
  {
    startYear: 2016,
    endYear: 'Now',
    company: 'GS Service',
    description: 'Curabitur eget tellus condimentum, consectetur est nec, pellentesque metus. Sed eget blandit lacus, quis cursus erat. Vestibulum tincidunt, sapien ut feugiat condimentum, enim est egestas eros, et posuere risus nibh ac sapien.'
  }
]

const skills = [
  {
    title: 'Javascript',
    bar: 70
  },
  {
    title: 'HTML/CSS',
    bar: 95
  },
  {
    title: 'ReactJS',
    bar: 90
  },
  {
    title: 'React Native',
    bar: 80
  },
  {
    title: 'NodeJS',
    bar: 70
  },
  {
    title: 'MongoDB',
    bar: 85
  },
];

class Resume extends Component {

  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={require('../../img/avatar_thumbnail.png')}
                alt="thumbnail"
                style={{height: '200px', width: '200px', background: '#ccc', borderRadius: '50%', padding: '10px', border: '3px solid #833fb2'}} />
            </div>
            <h2 style={{paddingTop: '1em'}}>Believe LODY</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <p>
              Nunc eu libero eu diam bibendum gravida. Nunc ullamcorper enim at turpis interdum, vitae malesuada lorem pretium. Nunc et nulla magna. Integer eget orci ullamcorper, consectetur turpis sed, eleifend lacus. In eu vulputate neque, id gravida neque. Nullam sodales leo et posuere blandit. Donec vitae elit porta, luctus magna vitae, auctor ligula.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <h5>Address</h5>
            <p>404 Rue des Écoles, 76000 Rouen</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Website</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
          </Cell>
          <RightSide col={8} style={{borderRadius: '10px'}}>
            <Skills skills={skills} />
            <hr style={{borderTop: '3px solid #e22947'}} />
            <Experience experience={experience} />
            <hr style={{borderTop: '3px solid #e22947'}} />
            <Education education={education} />
          </RightSide>
        </Grid>
      </div>
    );
  }

}

export default Resume;
