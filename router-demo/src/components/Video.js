import React from 'react';
import {Route, Link} from 'react-router-dom';
import Flutter from "./video/Flutter";
import ReactPage from "./video/ReactPage";
import VuePage from "./video/VuePage";
import './video.css'

function Video() {
  return (
    <div>
      <div className="topNav">
        <li><Link to="/video/reactpage">react</Link></li>
        <li><Link to="/video/flutter">flutter</Link></li>
        <li><Link to="/video/vuepage">vue</Link></li>
      </div>
      <div className="video-content">
        <h2>video页面</h2>
        <Route path='/video/reactpage/' component={ReactPage}/>
        <Route path='/video/flutter/' component={Flutter}/>
        <Route path='/video/vuepage/' component={VuePage}/>
      </div>
    </div>
  );
}

export default Video;