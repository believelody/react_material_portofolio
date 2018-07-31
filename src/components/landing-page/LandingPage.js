import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Cell} from 'react-mdl';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  border: 1px solid black;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledGrid = styled(Grid)`
  background: #833ab4;
  background: linear-gradient(to right, #fcb845, #fd1d1d, #833ab4);
  text-align: center;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  height: 250px;
  margin-top: 5em;
  border-radius: 50%;
`;

const Banner = styled.div`
  border-radius: 10px;
  background: rgba(0, 0, 0, .8);
  margin: auto;
  width: 75%;
`;

const BannerTitle = styled.h1`
  color: white;
  font-size: 66px;
  font-weight: bold;
  text-align: center;
`;

const BannerHr = styled.hr`
  border-top: 5px dotted white;
  width: 50%;
  margin: auto;
`;

const BannerText = styled.p`
  font-size: 20px;
  padding: 1em;
  color: white;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: auto;
`;

const SocialIcons = styled.i`
  color: white;
  font-size: 5em;
  padding: 8px;
`;

class LandingPage extends Component {

  render() {
    return (
      <Wrapper>
        <StyledGrid>
          <Cell col={12}>
            <Img src="https://cdn4.iconfinder.com/data/icons/water_gaming_pack/512/afro_samurai.png" />
            <Banner>
              <BannerTitle>FullStack Developper</BannerTitle>
              <BannerHr />
              <BannerText>HTML/CSS | Bootstrap | Javascript | React | React Native | NodeJS | Express | MongoDB</BannerText>
              <SocialLinks>
                <a href="https://linked.com" target="_blank" rel="noopener noreferrer">
                  <SocialIcons className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <SocialIcons className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a href="https://google.cd" target="_blank" rel="noopener noreferrer">
                  <SocialIcons className="fa fa-free-code-camp" aria-hidden="true" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <SocialIcons className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </SocialLinks>
            </Banner>
          </Cell>
        </StyledGrid>
      </Wrapper>
    );
  }

}

export default LandingPage;
