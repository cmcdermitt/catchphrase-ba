import React from 'react';
import {Paper, Grid, Typography, Button} from '@material-ui/core';
import clueJSON from './all-answers.json';

class CatchphraseClue extends React.Component {
  constructor(props) {
    super(props);
    console.log(clueJSON);
    this.state = {
      clueText: 'PRESS NEXT'
    }

    this.changeClue = this.changeClue.bind(this);
  }
  
  changeClue() {
    var newText = clueJSON[Math.floor(Math.random() * clueJSON.length)]
    console.log('changing to ' + newText);
    this.setState({
      clueText: newText
    });
  }

  render() {
    return (
      <Paper style={{
        width: '100%',
        padding: 16,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8,
        height: '54vh',
        justifyContent: 'space-between'
      }}>
        <Grid container direction='column' justify='space-between' style={{minHeight: '100%'}}>
          <Grid item>
            <Typography variant='h2'>
              {this.state.clueText}
            </Typography>
          </Grid>
          <Grid item>
            <Button minwidth='50%' size='large' color='secondary' variant='contained' onClick={this.changeClue}>
              NEXT
            </Button>
          </Grid> 
        </Grid>             
      </Paper>
    );  
  }
}

export default CatchphraseClue;
