import React from 'react';

const TIMER_LENGTH  = 10;

export default class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {timer: TIMER_LENGTH};

  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  
  tick() {
    this.setState((state) => {
      if( state.timer > 0)
        return { timer: state.timer - 1 } 
    });
  }

  render() {
    return (
      <div>        
        <h2>Countdown: {this.state.timer}</h2>
      </div>
    );
  }
}
