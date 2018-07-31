import React, { Component, Fragment } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {

  render() {
    const { experience } = this.props;
    return (
      <Fragment>
        <h2>Experience</h2>
        {
          experience.map(exp =>
            <Grid>
              <Cell col={4}>
                <h4 style={{marginTop: '0px'}}><i>{exp.startYear} - {exp.endYear}</i></h4>
              </Cell>
              <Cell col={6}>
                <h4 style={{marginTop: '0px'}}>{exp.company}</h4>
                <p>
                  {exp.description}
                </p>
              </Cell>
            </Grid>
          )
        }
      </Fragment>
    );
  }

}

export default Experience;
