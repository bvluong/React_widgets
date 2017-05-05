import React from 'react';
import ReactDom from 'react-dom';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.names);
    this.names = this.props.names;
    this.state = { inputVal: "" };
    this.handler = this.handler.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handler(e){
    e.preventDefault();
    let newNames = this.names.filter( (name) => name.includes(e.target.value));
  }

  render () {
    return (
    <div className="autocomplete">
    <h1>My AutoComplete</h1>
      <ul>
        <input onChange={this.handler}></input>
      </ul>
    </div>
    );
  }

}

export default AutoComplete;
