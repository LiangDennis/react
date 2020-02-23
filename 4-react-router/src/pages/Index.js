import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [
        {cid: 123,title: 'dennis-1'},
        {cid: 456,title: 'dennis-2'},
        {cid: 789,title: 'dennis-3'}
      ]
     }
    //  this.props.history.push('/home');
  }
  fn1() {
    console.log(1);
  }
  handleRedirect() {
    this.props.history.push('/home');
  }
  render() { 
    return ( 
      <div>
        {/* 标签式跳转页面 */}
        {/* <Redirect to="/home/" /> */}
        <h2 onClick={this.fn1.bind(this)}>首页</h2> 
        <h3 onClick={this.handleRedirect.bind(this)} style={{cursor: "pointer"}}>redirect to the home</h3>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={item.cid}>
                {/* <Link to={'/list/'+item.cid}>{item.title}</Link> */}
                <Link to={`/list/${item.cid}`}>{item.title}</Link>                
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

}
 
export default Index;