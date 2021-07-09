import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import RedoIcon from '@material-ui/icons/Redo';
import DoneAllIcon from '@material-ui/icons/DoneAll';

const useStyles = makeStyles({
  container: {
    display: 'inline-block',
  },

  root: {
    textAlign: 'center',
    background: 'AliceBlue',
    height: 200,
    width: 250,
    display: 'inline-block',
    marginRight: 4,
    marginLeft: 4,
    marginTop: 2,
    marginBottom: 2,
  },

  card: {
    alignItems: 'center',
  },

  marked: {
    color: 'green',
  },
});

const CardItem = (props) => {
  const classes = useStyles();
  const [flipped, setFlipped] = useState(false);
  const [marked, setMarked] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
  };

  const mark = () => {
    setMarked(!marked);
  };

  return (
    <div className={classes.container}>
      <Card variant="outlined" elevation={3} className={classes.root}>
        <CardContent>
          <CardHeader
            action={<DoneAllIcon className={marked ? classes.marked : 'null'} onClick={mark} />}
          />
          <Typography variant="h4">
            {(!flipped ? props.card.front : props.card.back)}
          </Typography>
          <RedoIcon onClick={flip} fontSize="large" style={{ color: 'RoyalBlue' }} />
        </CardContent>
      </Card>
    </div>
  );
};

export default CardItem;
