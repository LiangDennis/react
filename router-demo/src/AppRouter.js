import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './AppRouter.css';
import Index from './components/Index';
import Video from './components/Video';
import Workspace from './components/Workspace';

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 根据后台获取的routeConfig的文件
      routeConfig :[
        {path: '/', title: '博客首页', exact:true, component: Index},
        {path: '/video/', title: '视频教程', exact:false, component: Video},
        {path: '/workspace/', title: '职场技能', exact:false, component: Workspace},
      ]
    }
  }
  render() { 
    return ( 
      <Router>
        <div className="container">
          <div className="left">
            <h2>一级导航</h2>
            <ul>
              {
                this.state.routeConfig.map((item, index) => {
                  return (
                    <li key={index}><Link to={item.path} >{item.title}</Link></li>
                  )
                })
              }
              {/* <li><Link to="/">博客首页</Link></li>
              <li><Link to="/video/">视频教程</Link></li>
              <li><Link to="/workspace/">职场技能</Link></li> */}
            </ul>
          </div>
          <div className="main">
            {
              this.state.routeConfig.map((item, index) => {
                return (
                  <Route key={index} path={item.path} exact={item.exact} component={item.component}/>
                )
              })
            }
            {/* <Route path='/' exact component={Index}/>
            <Route path='/video/' component={Video}/>
            <Route path='/workspace/' component={Workspace}/> */}
          </div>
        </div>
      </Router>
     );
  }
}
 
export default AppRouter;