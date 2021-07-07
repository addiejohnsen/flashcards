import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import RedoIcon from '@material-ui/icons/Redo';

const useStyles = makeStyles({
  root: {
    background: 'MintCream',
    height: 200,
    width: 250
  },

  card: {
    alignItems: 'center'
  }
})

const CardItem = (props) => {
  const classes = useStyles();

  const flip = (e) => {
    console.log('clicked');

  }

  return (
    <div>
      <h2>Наши карточки!</h2>
      <Card variant="outlined" elevation={3} className={classes.root}>
        <CardContent>
          <Typography variant="h4">
            FRONT TEXT
          </Typography>
          <RedoIcon onClick={flip} fontSize="large" style={{color: 'MediumAquaMarine'}} />
        </CardContent>
      </Card>
    </div>
  );
};

export default CardItem;
