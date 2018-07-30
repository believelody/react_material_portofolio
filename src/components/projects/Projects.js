import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import styled from 'styled-components';
import { ProjectCard } from '../Export';

const Section = styled.section`

`;

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      projects: [
        [
          {
            title: 'React Project #1',
            img: 'https://www.acseo.fr/wp-content/uploads/2016/01/react-logo.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium augue risus, non gravida augue hendrerit ut. Pellentesque viverra, leo quis semper dictum, nibh nisl accumsan ipsum, vitae egestas turpis est nec nulla.'
          },
          {
            title: 'React Project #2',
            img: 'https://www.acseo.fr/wp-content/uploads/2016/01/react-logo.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium augue risus, non gravida augue hendrerit ut. Pellentesque viverra, leo quis semper dictum, nibh nisl accumsan ipsum, vitae egestas turpis est nec nulla.'
          },
          {
            title: 'React Project #3',
            img: 'https://www.acseo.fr/wp-content/uploads/2016/01/react-logo.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium augue risus, non gravida augue hendrerit ut. Pellentesque viverra, leo quis semper dictum, nibh nisl accumsan ipsum, vitae egestas turpis est nec nulla.'
          },
          {
            title: 'React Project #4',
            img: 'https://www.acseo.fr/wp-content/uploads/2016/01/react-logo.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium augue risus, non gravida augue hendrerit ut. Pellentesque viverra, leo quis semper dictum, nibh nisl accumsan ipsum, vitae egestas turpis est nec nulla.'
          },
          {
            title: 'React Project #5',
            img: 'https://www.acseo.fr/wp-content/uploads/2016/01/react-logo.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium augue risus, non gravida augue hendrerit ut. Pellentesque viverra, leo quis semper dictum, nibh nisl accumsan ipsum, vitae egestas turpis est nec nulla.'
          }
        ],
        [
          {
            title: 'Angular Project #1',
            img: 'https://sdtimes.com/wp-content/uploads/2016/09/0915.sdt-angular.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium augue risus, non gravida augue hendrerit ut. ',
          },
          {
            title: 'Angular Project #2',
            img: 'https://sdtimes.com/wp-content/uploads/2016/09/0915.sdt-angular.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium augue risus, non gravida augue hendrerit ut. ',
          },
          {
            title: 'Angular Project #3',
            img: 'https://sdtimes.com/wp-content/uploads/2016/09/0915.sdt-angular.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium augue risus, non gravida augue hendrerit ut. ',
          }
        ],
        [
          {
            title: 'VueJS Project #1',
            img: 'https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/104/thumb_bigger_formation-vue-js.png',
            text: 'Pellentesque viverra, leo quis semper dictum, nibh nisl accumsan ipsum, vitae egestas turpis est nec nulla.',
          }
        ],
        [
          {
            title: 'MongoDB Project #1',
            img: 'https://zdnet3.cbsistatic.com/hub/i/r/2018/02/16/8abdb3e1-47bc-446e-9871-c4e11a46f680/resize/370xauto/8a68280fd20eebfa7789cdaa6fb5eff1/mongo-db-logo.png',
            text: 'Nulla pretium augue risus, non gravida augue hendrerit ut. Pellentesque viverra, leo quis semper dictum, nibh nisl accumsan ipsum, vitae egestas turpis est nec nulla.',
          },
          {
            title: 'MongoDB Project #2',
            img: 'https://zdnet3.cbsistatic.com/hub/i/r/2018/02/16/8abdb3e1-47bc-446e-9871-c4e11a46f680/resize/370xauto/8a68280fd20eebfa7789cdaa6fb5eff1/mongo-db-logo.png',
            text: 'Nulla pretium augue risus, non gravida augue hendrerit ut. Pellentesque viverra, leo quis semper dictum, nibh nisl accumsan ipsum, vitae egestas turpis est nec nulla.',
          },
        ]
      ]
    }
  };

  toggleCategories = tabId => {
    const { projects } = this.state;
    // if (this.state.activeTab === 0) {
    //   return <div><h1>React</h1></div>
    // }
    switch (tabId) {
      case 0:
        return projects[0];
      case 1:
      return projects[1];
      case 2:
        return projects[2];
      case 3:
        return projects[3];
      default:
        return projects[0];
    }
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div>
        <Tabs activeTab={activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        <Section>
          <Grid>
            <Cell col={12} style={{display: 'flex', flex: '1', flexWrap: 'wrap'}}>
              {
                <ProjectCard project={this.toggleCategories(activeTab)} />
              }
            </Cell>
          </Grid>
        </Section>
      </div>
    );
  }

}

export default Projects;
