import React from 'react';
import ReactDom from 'react-dom';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date()};
    this.tick = this.tick.bind(this);
  }

  tick () {
    this.setState = { date: new Date()};
  }

  componentDidMount() {
    setInterval(this.tick(), 1000);
  }

  componentWillUnmount() {
    
  }

  render () {
    return (
    <h1>My Clock</h1>
    );
  }

}

export default Clock;
