import React from 'react';
import ReactDom from 'react-dom';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date()};
    this.tick = this.tick.bind(this);
  }

  tick () {

    this.setState({ date: new Date()});
  }

  componentDidMount() {
    this.id = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render () {
    const { date } = this.state;
    return (
    <div className="clock">
    <h1>My Clock</h1>
      <ul>
        <li>
          <h1>Time:</h1>
          <h1>{date.toLocaleTimeString()} PDT</h1>
        </li>
        <li>
          <h1>Date:</h1>
          <h1>{date.toDateString()}</h1>

        </li>
      </ul>
    </div>
    );
  }

}

export default Clock;
