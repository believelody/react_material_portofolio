import React, { Component, Fragment } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {

  render() {
    const { education } = this.props;
    return (
      <Fragment>
        <h2>Education</h2>
        {
          education.map(edu =>
            <Grid>
              <Cell col={4}>
                <h4 style={{marginTop: '0px'}}><i>{edu.startYear} - {edu.endYear}</i></h4>
              </Cell>
              <Cell col={6}>
                <h4 style={{marginTop: '0px'}}>{edu.school}</h4>
                <p>
                  {edu.description}
                </p>
              </Cell>
            </Grid>
          )
        }
      </Fragment>
    );
  }
}

export default Education;
