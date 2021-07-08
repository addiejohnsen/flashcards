import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  sideBar: {
    background: 'white',
    width: 175,
    overflow: 'auto',
  },

  nav: {
    width: 175,
    flexShrink: 0
  },

  content: {
    flexGrow: 1,
    padding: 20
  }



}));

const Navigation = (props) => {
  const classes = useStyles();

  const flip = (e) => {
    console.log('clicked');
  }

  const deckItem = props.allDecks.map((deck, index) => {
    return (
      <ListItem>{deck.deck_name}</ListItem>

    );
  })

  return (
    <div>
      <CssBaseline />
      <AppBar postion="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h3">
            Карточки
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.nav}
        variant="permanent">
        <Toolbar />
        <div className={classes.sideBar}>
         <Typography variant="h6">
          <List>
            {deckItem}
            <ListItem>
              Deck1
            </ListItem>
            <ListItem>
              Deck2
            </ListItem>
            <ListItem>
              Deck3
            </ListItem>
            <ListItem>
              Deck4
            </ListItem>
          </List>
         </Typography>
        </div>
      </Drawer>
    </div>
  );
};

export default Navigation;
