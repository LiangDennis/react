import React, { Component } from 'react';
import "./miss.css";
import PropTypes from "prop-types"; // 校验父组件传递过来的值

class MissItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    contentText: PropTypes.string.isRequired,
    index: PropTypes.number,
    deleteItem: PropTypes.func
  }
  static defaultProps = {
    name: '历史'
  }

  // 删除组件的生命周期函数
  componentWillUnmount() {
    console.log('child - componentWillUnmount');
  }

  // 判断是否需要更新子组件的render函数
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.contentText !== this.props.contentText;
  }

  render() { 
    console.log('child - render');
    return (
        <li onClick={this.handleClick} className="li-list">
        {this.props.name}---{this.props.contentText}</li>
    );
  }

  handleClick() {
    this.props.deleteItem(this.props.index);
  }
}

// 注意MissItem的propTypes，和自定义的PropTypes的区别，此处的propTypes也可以在MissItem中定义，加上static 静态就可以了
// MissItem.propTypes = {
//   // 还可以使用必须写入
//   contentText: PropTypes.string.isRequired,
//   index: PropTypes.number,
//   deleteItem: PropTypes.func
// }
// MissItem.defaultProps = {
//   name: '周周'
// }

export default MissItem;