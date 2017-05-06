import React from 'react';
import ReactDom from 'react-dom';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.tabs);
    this.state = { index: 0};
    this.handler = this.handler.bind(this);

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handler(e){
    e.preventDefault();
    console.log(e.target.textContent);
    let keys = this.props.tabs.map( tab => Object.keys(tab)[0] );
    console.log(keys);
    console.log(e.target.textContent);
    console.log(keys.indexOf(e.target.textContent));

  }

  click(e){
    e.preventDefault();
  }

  render () {
    let key = Object.keys(this.props.tabs[this.state.index])[0];
    return (
    <div className="tabs">
    <h1>My Tabs</h1>
      {
        this.props.tabs.map( (tab,idx) => <hl onClick={this.handler} key={idx}>{Object.keys(tab)[0]} </hl>)
      }
      <ul>
        <article>{this.props.tabs[this.state.index][key]}</article>
      </ul>
    </div>
    );
  }

}

export default Tab;
