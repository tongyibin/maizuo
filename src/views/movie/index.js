// 电影页面
import React, { Component } from 'react'
import Swiperimg from './swiperimg'
import Movielist from './movielist'
export default class index extends Component {
  render() {
    return (
      <div style={{height:'100%'}}>
        <Swiperimg />
        <Movielist  />
      </div>
    )
  }

}
