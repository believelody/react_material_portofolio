import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background: rgba(105, 105, 105, .4);
  position: fixed;
  justify-content: center;
  padding-top: 2em;
`;

const StyledGrid = styled(Grid)`
  width: 80%;
  height: 550px;
  text-align: center;
  justify-content: center;
  border: 2px solid palevioletred;
  background: white;
  color: black;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  font-family: Anton, sans-serif;
`;

const IconItem = styled.i`
  font-size: 66px;
  padding-right: 5rem;
`;

class Contact extends Component {

  render() {
    return (
      <Wrapper>
        <StyledGrid>
          <Cell col={6}>
            <H2>Believe LODY</H2>
            <img
              src={require("../../img/myAvatar.png")}
              alt="avatar"
              style={{height: '250px', width: 'auto', borderRadius: "25px", border: '3px solid firebrick'}}
            />
            <p style={{width: '85%', paddingTop: '1em', margin: 'auto', fontFamily: 'Anton, sans-serif'}}>
              Aenean ultricies leo quis quam pretium, nec hendrerit neque dictum. Suspendisse tincidunt feugiat ipsum, sit amet dignissim neque placerat et. Curabitur eget tellus condimentum, consectetur est nec, pellentesque metus. Sed eget blandit lacus, quis cursus erat. Vestibulum tincidunt, sapien ut feugiat condimentum, enim est egestas eros, et posuere risus nibh ac sapien.
            </p>
          </Cell>
          <Cell col={6}>
            <H2>Contact Me</H2>
            <hr style={{borderTop: '1em dotted black', width: '70%', margin: 'auto'}} />
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <IconItem className="fa fa-phone-square" aria-hidden="true" />
                  (123) 456-7890
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <IconItem className="fa fa-envelope" aria-hidden="true" />
                  someone@example.com
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <IconItem className="fa fa-skype" aria-hidden="true" />
                  groovy.yamakasi
                </ListItemContent>
              </ListItem>
            </List>
          </Cell>
        </StyledGrid>
      </Wrapper>
    );
  }

}

export default Contact;
