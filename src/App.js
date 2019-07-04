// 老二文件
import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
const Login = Loadable({
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
// 详情页
const MovieAbourList = Loadable({
  loader: () => import('./views/movie/movielistAbout/index.js'),
  loading: () => <div>加载中</div>
})
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: '',
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/city" component={City} />
          <Route path="/movieaboutlist" component={MovieAbourList} />
          <Route path="/" component={Main} className="movie-main" />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}

