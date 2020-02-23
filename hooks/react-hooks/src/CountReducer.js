import React, {useReducer} from 'react';

function CountReducer() {
  const [count, dispatch] = useReducer((state, action)=>{
    switch (action) {
      case 'add':
        return state+1;
        // bre ak;
      case 'sub':
        return state-1;
        // break;
      default:
        return state;
        // break;
    }
  }, 0);//0是初始值，回调函数是reducer

  // UI
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>{dispatch('add')}}>add Count</button>
      <button onClick={()=>{dispatch('sub')}}>sub Count</button>
    </div>
  );
}

export default CountReducer;