import React from "react";
import {Paper, Grid, Typography, Button, ButtonGroup} from '@material-ui/core';
import Countdown, {zeroPad} from 'react-countdown';
import buzzerFile from './buzzer.mp3'; //from http://soundbible.com/1501-Buzzer.html

var buzzerSound = new Audio(buzzerFile);

function timerBuzz() {
  buzzerSound.play()
}

export default class CatchphraseTimer extends React.Component {
  constructor(props)
  {
    super(props);
    this.countdownRef = React.createRef();
    this.setCountdownRef = this.setCountdownRef.bind(this);
    this.startStopTimer = this.startStopTimer.bind(this);
    // this.resetTimer = this.resetTimer.bind(this);
  }

  startStopTimer() {
    console.log('entered startstop');
    console.log(this.countdownRef)
    if (this.countdownRef.isPaused() || this.countdownRef.isCompleted())
    {
      console.log('starting');
      this.countdownRef.start();
      console.log('started');
    }
    else
    {
      console.log('pausing');
      this.countdownRef.pause();
      console.log('paused');
    }
  }

  setCountdownRef(ref) {
    //gives access to the countdown api when it mounts
    this.countdownRef = ref;
  }

  render()
  {
    return (
      <Paper style={{
        width: '100%',
        padding: 16,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8,
        height: '24vh'
      }}>
        <Grid container direction='column' justify='space-between' style={{minHeight: '100%'}}>
          <Grid item>
            <Typography variant='h2'>
              <Countdown 
                intervalDelay={1000}
                precision={0}
                autoStart={false}
                date={Date.now() + 180000}
                onComplete={timerBuzz}
                ref={this.setCountdownRef}
                // renderer={props => <div>{zeroPad(props.minutes)}:{zeroPad(props.seconds)}.{zeroPad(Math.floor(props.milliseconds / 10))}</div>}
                renderer={props => <div>{zeroPad(props.minutes)}:{zeroPad(props.seconds)}</div>}
              />
            </Typography>
          </Grid>
          <Grid item>
            <ButtonGroup variant='contained' color='secondary'>
              <Button onClick={this.startStopTimer}>Start/Stop</Button>
              {/* <Button onClick={this.resetTimer}>Reset</Button> */}
            </ButtonGroup>           
          </Grid> 
        </Grid>      
      </Paper>
    );
  }  
}