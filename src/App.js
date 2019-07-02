// 老二文件
import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { Icon } from 'antd'
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import { HomeWarp, NavWarp, MainWarp } from './styles/style.js'
const Cinema = Loadable({
  // 懒加载
  //需要异步加载的组件
  loader: () => import('./views/cinema'),
  // 加载中的提示组件
  loading: () => <div>加载中</div>
})
const Movie = Loadable({

  loader: () => import('./views/movie'),

  loading: () => <div>加载中</div>
})
const Mine = Loadable({

  loader: () => import('./views/mine'),

  loading: () => <div>加载中</div>
})

export default class App extends Component {
  render() {
    return (
      <Router>
        <HomeWarp>
          <MainWarp>
            <Switch>
              <Route path="/mine" component={Mine} />
              <Route path="/cinema" component={Cinema} />
              <Route path="/movie" component={Movie} />
              <Redirect to="/movie" />
            </Switch>
          </MainWarp>
          <NavWarp>
            <NavLink to="/movie" className="nav-bottom"  >
              <Icon type="fire" style={{ fontSize: '21px' }} />
              <span>电影</span>
            </NavLink>
            <NavLink to="/cinema" className="nav-bottom">
              <Icon type="dot-chart" style={{ fontSize: '21px' }} />
              <span>影院</span>
            </NavLink>
            <NavLink to="/mine" className="nav-bottom">
              <Icon type="user" style={{ fontSize: '21px' }} />
              <span>我的</span>
            </NavLink>
          </NavWarp>
        </HomeWarp>
      </Router>
    )
  }
}
