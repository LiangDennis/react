import React, { Component } from 'react';
import store from './store';
import { 
  inputChangeAction, 
  addListAction, 
  deleteListAction,
  getListData } from "./store/actionCreator";

import TodoListStoreUI from "./TodoListStoreUI";

class TodoListStore extends Component {
  constructor(props) {
    super(props);
    // 仓库数据
    this.state = store.getState();
    // 绑定this
    this.inputChange = this.inputChange.bind(this);
    this.addList = this.addList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    // 订阅
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }
  render() { 
    return ( 
      <TodoListStoreUI 
        inputValue={this.state.inputValue}
        inputChange={this.inputChange}
        addList={this.addList}
        listData={this.state.listData}
        deleteList={this.deleteList}
      />
    );
  }

  componentDidMount() {
    store.dispatch(getListData());
  }

  // 在contructor中绑定this的方法都必须有定义
  // 输入框发生改变
  inputChange(e) {
    // store.dispatch(inputChangeAction(this.input.input.value));
    store.dispatch(inputChangeAction(e.target.value));
  }
  // 添加数据
  addList(e) {
    if(e.which === 13 || e.type === 'click'){
      store.dispatch(addListAction());
    }
  }
  // 删除数据
  deleteList(index) {
    store.dispatch(deleteListAction(index));
  }
  // 发布订阅
  storeChange() {
    this.setState(store.getState());
  }
}
 
export default TodoListStore;