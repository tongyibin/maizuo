// 老二文件
<<<<<<< HEAD
import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Icon } from 'antd';
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { HomeWarp, NavWarp, MainWarp } from './styles/style.js';

const Cinema = Loadable({
=======
import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
const Login = Loadable({
>>>>>>> f77ecb4a4689ee7d134d53cb3984a1c2546f9b87
  // 懒加载
  //需要异步加载的组件
  // 登录
  loader: () => import('./views/login'),
  // 加载中的提示组件
  loading: () => <div>加载中</div>
})
// 城市选择
const City = Loadable({
  loader: () => import('./views/city'),
  loading: () => <div>加载中</div>
})
// 主页面
const Main = Loadable({
  loader: () => import('./views/index.js'),
  loading: () => <div>加载中</div>
})



export default class App extends Component {
  render() {
    return (
      <Router>

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/city" component={City} />
          <Route path="/" component={Main} />
          <Redirect to="/" />
        </Switch>

      </Router>
    )
  }
}
