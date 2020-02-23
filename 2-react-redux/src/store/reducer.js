import { INPUT_CHANGE, ADD_LIST, DELETE_LIST, GET_LIST } from "./actionTypes";

const defaultState = {
  inputValue: '',
  listData: [
  ]
};
export default (state = defaultState, action) =>{
  // 整体保存newState，reducer不能直接改变store中的数据，所以需要深拷贝一个newState
  let newState = JSON.parse(JSON.stringify(state));
  // if(action.type === 'inputChange') {
  //   newState.inputValue = action.value;
  //   return newState;
  // }
  // switch模式，多个值
  console.log(action.type);
  switch (action.type) {
    case INPUT_CHANGE:
      console.log(action.value);
      newState.inputValue = action.value;
      return newState;
    case ADD_LIST:
      newState.listData.push(state.inputValue);
      newState.inputValue = ''; //提交完成后，输入框为空
      return newState;
    case DELETE_LIST:
      newState.listData.splice(action.index, 1);
      return newState;
    case GET_LIST:
      newState.listData = action.data;
      return newState;
    default:
      return newState;
  }
  // return state;
}