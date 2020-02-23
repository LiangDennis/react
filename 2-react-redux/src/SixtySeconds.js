import React, { Component } from 'react';
import "antd/dist/antd.css";
import {Button, Row, Col} from 'antd';
import TodoList from './TodoList';
import TodoListStore from './TodoListStore';

class SixtySeconds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: '发送',
      time: '60',
      loading: false,
      disabled: false
    }
  }
  render() { 
    return ( 
      <div>
        <Row type="flex" justify="center">
          <Col>
            60s倒计时：
            <Button type="primary" loading={this.state.loading} disabled={this.state.disabled} onClick={this.timeBegin.bind(this)}>{this.state.buttonText}</Button>（测试55s结束）
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <TodoList />
          </Col>
          <Col span={12}>
            <TodoListStore />
          </Col>
        </Row>
      </div>
    );
  }
  timeBegin() {
    this.setState({
      loading: true,
      disabled: true,
    });
    let timer = setInterval(() => {
      let time = (parseInt(this.state.time) - 1).toString();
      if(this.state.time === '55'){
        this.setState({
          buttonText: '发送',
          time: '60',
          loading: false,
          disabled: false
        });
        clearInterval(timer);
      }else {
        this.setState({
          buttonText: time + 's',
          time: time
        });
      }
    }, 1000);
  }
}
 
export default SixtySeconds;