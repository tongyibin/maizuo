import React, { Component } from 'react'
import { HashRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Movielists from './movielists.js'
import Movieabout from './movieabout.js'
import { MainWarp, Movietop } from './style.js'
// 城市选择
const City = Loadable({

  loader: () => import('../../city/index.js'),

  loading: () => <div>加载中</div>
})
export default class index extends Component {


  render() {

    return (
      <Movietop style={{ height: '100%' }}>
        <div className="movie-top">
          <div className="movie-display">
            <NavLink to="/city">
              <div className="movie-city">城市 v</div>
            </NavLink>
            <div className="movie-title">电影</div>
          </div>
        </div>
        <MainWarp className="movie-nav">
          <NavLink to="/movielists">正在热映</NavLink>
          <NavLink to="/movieabout">即将上映</NavLink>
        </MainWarp>
        <Router>
          <Switch>
            <Route path="/movielists" component={Movielists} />
            <Route path="/movieabout" component={Movieabout} />
            <Route path="/city" component={City} />
            <Redirect to="/movielists" />
          </Switch>
        </Router>
      </Movietop>
    )
  }
  // 开启监听
  componentDidMount() {
    document.getElementsByClassName('elkAqb')[0].addEventListener('scroll', this.onscroll);
  }
  // 关闭
  componentWillUnmount() {
    document.getElementsByClassName('elkAqb')[0].removeEventListener("scroll", this.onscroll)
  }
  onscroll() {
    // 滚动条距离顶部的高度
    let scrolltop = document.getElementsByClassName('elkAqb')[0].scrollTop;
    if (scrolltop > 210) {
      document.getElementsByClassName('movie-top')[0].style.display = "block"
      document.getElementsByClassName('movie-nav')[0].style = "position:fixed;top:44px"
    } else {
      document.getElementsByClassName('movie-top')[0].style.display = "none"
      document.getElementsByClassName('movie-nav')[0].style = ""
    }
  }
}

