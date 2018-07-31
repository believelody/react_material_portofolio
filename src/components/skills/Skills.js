import React, { Component, Fragment } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import styled from 'styled-components';

class Skills extends Component {

  render() {
    const { skills } = this.props;
    return (
      <Fragment>
        <h2>Skills</h2>
        <Grid>
          <Cell col={12}>
            {
              skills.map(skill =>
                <div style={{display: 'flex', padding: '15px'}}>
                  <span style={{fontSize: '20px'}}>{skill.title}</span>
                  <ProgressBar progress={skill.bar} style={{width: '75%', margin: 'auto'}} />
                </div>
              )
            }
          </Cell>
        </Grid>
      </Fragment>
    );
  }
}

export default Skills;
