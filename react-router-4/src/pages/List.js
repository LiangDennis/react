import React, { Component } from 'react';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <h2>列表页----{this.state.id}</h2> );
    
  }
  componentDidMount() {
    console.log(this.props.match.params);
    // state中不一定需要id值
    this.setState({
      id: this.props.match.params.id,
      title: this.props.match.params.title
    });
  }
}
 
export default List;