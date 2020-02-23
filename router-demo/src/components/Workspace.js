import React from 'react';
import {Route, Link} from 'react-router-dom';
import GetUp from "./workspace/GetUp";
import Money from "./workspace/Money";
import './video.css'

function Workspace() {
  return (
    <div>
      <div className="topNav">
        <li><Link to="/workspace/getup">getup</Link></li>
        <li><Link to="/workspace/money">money</Link></li>
      </div>
      <div className="video-content">
        <h2>workspace页面</h2>
        <Route path='/workspace/getup/' component={GetUp}/>
        <Route path='/workspace/money/' component={Money}/>
      </div>
    </div>
  );
}

export default Workspace;