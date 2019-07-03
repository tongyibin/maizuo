import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { Icon } from 'antd'
import { Route, NavLink, Redirect, Switch } from 'react-router-dom'
import { HomeWarp, MainWarp, NavWarp } from '../styles/style.js'

// 个人中心
const Mine = Loadable({

  loader: () => import('../views/mine'),

  loading: () => <div>加载中</div>
})
// 影院
const Cinema = Loadable({

  loader: () => import('../views/cinema'),

  loading: () => <div>加载中</div>
})
// 电影
const Movie = Loadable({

  loader: () => import('../views/movie'),

  loading: () => <div>加载中</div>
})
export default class index extends Component {
  render() {
    return (
      <HomeWarp>
        <MainWarp>
          <Switch>
            <Route path="/mine" component={Mine} />
            <Route path="/cinema" component={Cinema} />
            <Route path="/" component={Movie} />
            <Redirect to="/movielists/1" />
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
    )
  }
}
