import React from 'react';
// import store from "./store";
import { connect } from "react-redux";

const App = (props)=> {
  // 由于多个变量都是冲this.props中获取的，所以可以通过对this.props进行解构赋值
  let {inputValue, inputChange, addList, list} = props;
  return ( 
    <div style={{margin: "10px"}}>
      <input value={inputValue} onChange={inputChange} />
      <button onClick={addList}>增加</button>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={item+index}>{item}</li>
            );
          })
        }
        {/* <li>hello</li> */}
      </ul>
    </div>
  );
}

// 数据的映射
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
};

// 方法的映射
const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      dispatch({
        type: 'inputChange',
        value: e.target.value
      });
    },
    addList() {
      dispatch({
        type: 'addList',
      });
      // 如果还有一些例如关闭遮罩层的逻辑怎么办
    }
  }
}
 
export default connect(stateToProps, dispatchToProps)(App);