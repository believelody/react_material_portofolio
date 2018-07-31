import React, { Fragment } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

const ProjectCard = ({project}) =>
(
  <Fragment>
    {
      project.map((proj, i) =>
        <Card key={i} shadow={5} style={{minWidth: 400, margin: '10px auto'}}>
          <CardTitle
            style={{
              color: 'black',
              height: '176px',
              background: `url(${proj.img}) center / cover`
            }}
          >
            {proj.title}
          </CardTitle>
          <CardText>
            {proj.text}
          </CardText>
          <CardActions style={{textAlign: 'center'}} border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{style: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      )
    }
  </Fragment>
);

export default ProjectCard;
