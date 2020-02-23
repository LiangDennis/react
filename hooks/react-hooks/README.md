

### 有两点需要注意：1，useEffect代表了原来的componentDidMount和componentDidUpdate两个生命周期函数；2，useEffect是异步执行的函数

### useEffect实现componentWillUnmount，在useEffect(()=>{
  return ()=>{}
},[]);

### useContext实现父子组件的传值，变量共享

### useReducer 状态共享