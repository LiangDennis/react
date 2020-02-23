import React, { Component } from 'react';
import CountHooks from "./CountHooks";
import CountContext from "./CountContext";
import CountReducer from "./CountReducer";
class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0
     }
  }
  render() { 
    return ( 
      <div>
        <p>You clicked me {this.state.count} times</p>
        <button onClick={this.addCount.bind(this)}>click me</button>
        <CountHooks />
        <CountContext />
        <CountReducer />
      </div>
     );
  }
  addCount() {
    this.setState({
      count: this.state.count+1
    });
  }
}
 
export default Count;