import React, { Component } from 'react'
import { Route, NavLink, Redirect } from 'react-router-dom'

import Movielists from './movielists.js'
import { MainWarp } from './style.js'
export default class index extends Component {

  render() {
    return (
      <div style={{height:'100%'}}>
        <MainWarp>
          <NavLink to="/movielists/1">正在热映</NavLink>
          <NavLink to="/movielists/2">即将上映</NavLink>
          <Redirect to="/movielists/1" />
        </MainWarp>
        <Route path="/movielists" component={Movielists} />
        <Redirect to="/movielists?1" />
      </div>
    )
  }
}

