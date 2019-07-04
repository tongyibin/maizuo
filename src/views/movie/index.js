// 电影页面
import React, { Component } from 'react'
import Swiperimg from './swiperimg'
import Movielist from './movielist/index.js'
import { NavLink } from 'react-router-dom'
import { MovieStyle } from '../../styles/movieStyle.js'

export default class index extends Component {
  render() {
    return (
      <MovieStyle>
        <NavLink to="/city" className="movie-city-a">城市 v</NavLink>
        <Swiperimg />
        <Movielist />
      </MovieStyle>
    )
  }
  componentDidMount() {
    console.log(this.props.history.location.pathname)
  }

  chglocation() {
    if (this.props.history.location.pathname === '/movielists/1') {
      console.log(this.props.history.location.pathname)
      // window.location.reload()
    }
  }
  componentWillUnmount() {
    // this.chglocation()
  }

}



