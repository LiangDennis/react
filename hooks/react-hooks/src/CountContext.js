import React,{useContext, useState, useEffect, createContext} from 'react';

const Count = createContext();//1.想要共享什么，创建上下文
function Counter() {//2.使用上下文，同时也是一个组件，工作中需要另起一个文件
  let count = useContext(Count);
  return (
    <div>{count}</div>
  );
}
const Obj = createContext();
function Objer() {
  let obj = useContext(Obj);
  useEffect(()=>{
    console.log(obj);
  });
  return (
    <h3>{obj.name}------{obj.age}</h3>
  );
}

function CountCotext() {
  const [count, setCount] = useState(1);
  const [obj] = useState({name: 'Dennis', age: '27'});
  useEffect(()=>{
    console.log('hello');
  },[]);
  return (
    <div>
      <h2>useContext</h2>
      <p>{count}</p>
      <button onClick={()=>{setCount(count+1)}}>add Count</button>
      <p>对象</p>
      <p>name: {obj.name}, age: {obj.age}</p>
      {/* 3.使用创建的上下文传值 */}
      <Count.Provider value={count}>
        <Counter />
      </Count.Provider>
      <Obj.Provider value={obj}>
        <Objer />
      </Obj.Provider>
    </div>
  );
}

export default CountCotext;