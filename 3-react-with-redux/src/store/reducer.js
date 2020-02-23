
const defaultState = {
  inputValue: 'ss',
  list: [
    'aa',
    'bb',
    'cc'
  ]
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "inputChange":
      newState.inputValue = action.value;
      return newState;
    case "addList":
      newState.list.push(state.inputValue);
      newState.inputValue = "";//防止重复提交
      return newState;
    default:
      return newState;
  }
}