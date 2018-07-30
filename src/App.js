import React, { Component } from 'react';
import styled from 'styled-components';
import { Layout, Header, Drawer, Content } from 'react-mdl';
import { Main, Nav } from './components/Export';
import './App.css';

const StyledHeader = styled(Header)`
  background: #833ab4;
  background: linear-gradient(to right, #fcb845, #fd1d1d, #833ab4);
`;

class App extends Component {
  render() {
    return (
      <div>
        <Layout style={{height: '100vh'}}>
          <StyledHeader title="My Portofolio" scroll>
            <Nav />
          </StyledHeader>
          <Drawer title="My Portofolio">
            <Nav />
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
