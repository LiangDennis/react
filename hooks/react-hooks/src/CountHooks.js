import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Index() {
  useEffect(()=> {
    console.log('Index');
    return ()=>{
      // 解绑Index组件
      // 缺点：当状态发生改变的时候，都会发生close index
      console.log('close Index');
    }
  },[]);//当数组为空的时候可以解决以上的缺点，实现解绑组件。数组中也可以有多个数值，当这些数值发生变化的时候才会执行
  return (
    <div>Index</div>
  )
}
function List() {
  useEffect(()=> {
    console.log('List');
  });
  return (
    <div>List</div>
  );
}

function CountHooks() {
  // useState(0),0值代表初始值
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(25);
  const [sex, setSex] = useState('男');
  const [work, setWork] = useState('前端程序员');
  const [obj, setObj] = useState({name: 'Dennis'});
  // 有两点需要注意：1，useEffect代表了原来的componentDidMount和componentDidUpdate两个生命周期函数；2，useEffect是异步执行的函数
  useEffect(()=> {
    console.log('1');
    return ()=>{
      console.log("解绑");
    }
  },[count]);//当count发生变化的时候，都会发生解绑
  return (
    <div>
      <h3>react hooks</h3>
      <p>You click me {count} times</p>
      <button onClick={() => {setCount(count+1)}}>Click me</button>
      <div>
        <p>年龄：{age}<button onClick={()=>{setAge(age+10)}}>年龄加10</button></p>
        <p>性别：{sex}<button onClick={()=>{setSex('女')}}>性别改变</button></p>
        <p>工作：{work}<button onClick={()=> {setWork('后端程序员')}}>工作改变</button></p>
        <p>姓名：{obj.name}<button onClick={()=> {setObj({name: 'David'})}}>姓名改变</button></p>
      </div>
      <Router>
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/list/">List</Link></li>
        </ul>
        <Route path="/" exact component={Index}/>
        <Route path="/list/" component={List}/>
      </Router>
    </div>
  );
}

export default CountHooks;