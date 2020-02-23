import React, { Component } from 'react';
import store from './store';
import {Button, Input, List, Row, Col} from 'antd';
import { INPUT_CHANGE, ADD_LIST, DELETE_LIST } from "./store/actionTypes";
import "antd/dist/antd.css";
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // 数据
    // this.state = {
    //   inputValue: '',
    //   listData: [
    //     'Racing car sprays burning fuel into crowd.',
    //     'Japanese princess to wed commoner.',
    //     'Australian walks 100km after outback crash.',
    //     'Man charged over missing wedding girl.',
    //     'Los Angeles battles huge wildfires.',
    //   ]
    // };
    // 仓库数据，通过仓库获取数据
    // console.log("store："+JSON.stringify(store.getState()));
    this.state = store.getState();
    // 绑定this
    this.addList = this.addList.bind(this);
    this.inputChange = this.inputChange.bind(this);
    // 由于input框有placeholder和value都定义了值，所以需要使用到订阅模式，才能监听到value值的变化，并且在reducer中监听inputChange事件，并改变inputValue值
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return ( 
      <Row type="flex" justify="center">
        <Col span={24} style={{width: '62%'}}>
          <Input 
            placeholder="input something"
            value={this.state.inputValue}
            style={{margin: "10px",width: '200px'}}
            onChange={this.inputChange}
            onKeyPress={this.addList}
            ref={(input)=> {this.input=input;}}
          />
          <Button type="primary" onClick={this.addList}>添加</Button>
        </Col>
        <Col span={24} style={{margin: '0 10px', width: '62%'}}>
          <List
            bordered
            dataSource={this.state.listData}
            renderItem = {(item,index) => 
              <List.Item>
                <Col span={16}>
                  {item}
                </Col>
                <Col span={8}>
                  <Button type="danger" onClick={this.deleteList.bind(this, index)}>删除</Button>
                </Col>
              </List.Item>
            }
          />
        </Col>
      </Row>
    );
  }

  // 生命周期
  componentDidMount() {
    // 使用antd绑定ref属性的时候，this.[name]指向的是这个antd组件，所以需要再加一层才能获取到值
    // console.log(this.input.input.value);
    this.input.input.focus();
  }

  // 函数方法
  addList(e) {
    if(e.which === 13 || e.type === "click") {
      // list
      // let action = {type: 'addList'};
      store.dispatch({type: ADD_LIST});
      // 以前的方式进行改变listData值
      // let list = this.state.listData;
      // list = [...list, this.state.inputValue];
      // this.setState({
      //   listData: [...this.state.listData, this.state.inputValue],
      //   inputValue: ''
      // });
    }
  }
  // 订阅
  storeChange() {
    this.setState(store.getState());
  }
  inputChange(e) {
    // console.log(this.input.input.value);
    // 通过redux改变state中的值
    const action = {
      type: INPUT_CHANGE,
      value: this.input.input.value
    };
    store.dispatch(action);
    // 以前的方式进行改变
    // this.setState({
    //   inputValue: e.target.value
    // });
  }
  deleteList(index) {
    // 使用store
    store.dispatch({type: DELETE_LIST, index});
    // 以前的方法删除listData
    // let list = this.state.listData;
    // list.splice(index, 1);
    // this.setState({
    //   listData: list
    // });
  }
}
 
export default TodoList;