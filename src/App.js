import React from 'react';
import {AppBar, Toolbar, IconButton, CssBaseline, Container} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import CatchphraseTimer from './CatchphraseTimer.js';
import CatchphraseClue from './CatchphraseClue.js';
import CatchphraseScoreboard from './CatchphraseScoreboard.js';
import './App.css';

import { createMuiTheme, makeStyles, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

var theme = createMuiTheme({
  palette: {
  //   primary: indigo,
  //   secondary: deepPurple,
    primary: { main: '#303F9F' },
    secondary: { main: '#AB47BC' },
    type: 'dark',
  },
  spacing: 8,
});

theme = responsiveFontSizes(theme);

const styles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: '100%',
    padding: theme.spacing(2),
    marginTop: 8,
    marginBottom: 8,
    textAlign: 'center',
  },
});

const classes = {styles}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />

      <AppBar color='primary' position="sticky">
        <Toolbar>
          {/*
          /////TODO: add settings/////
          <IconButton aria-label="Settings" color='inherit'>
            <SettingsIcon />
          </IconButton> */}

          Catchphrase Before &amp; After

        </Toolbar>
      </AppBar>
      <Container height='100%'>
        <CatchphraseTimer />     
        <CatchphraseClue />
      </Container>
    </ThemeProvider>
  );
}

export default App;
