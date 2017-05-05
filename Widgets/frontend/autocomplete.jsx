import React from 'react';
import ReactDom from 'react-dom';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "", newNames: this.props.names};
    this.click = this.click.bind(this);
    this.handler = this.handler.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handler(e){
    e.preventDefault();
    this.setState({ newNames:this.state.newNames.filter( (name) => name.includes(e.target.value)) });
  }

  click(e){
    e.preventDefault();
    this.setState({ newNames:[e.target.textContent]});
  }

  render () {
    return (
    <div className="autocomplete">
    <h1>My AutoComplete</h1>
      <ul>
        <input onChange={this.handler}></input>
        {
          this.state.newNames.map( (name,idx) => <li onClick={this.click} key={idx}>{name}</li> )
        }
      </ul>
    </div>
    );
  }

}

export default AutoComplete;
