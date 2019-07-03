// 电影页面
import React, { Component } from 'react'
import Swiperimg from './swiperimg'
import Movielist from './movielist'
export default class index extends Component {
  render() {
    return (
      <div style={{ height: '100%' }} className="movie-main">
        <Swiperimg />
        <Movielist />
      </div>
    )
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onscroll, true);
  }
  onscroll() {
    // console.log(window.scrollY)
    // 滚动条距离顶部的高度
    let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    // 页面的高度
    let scrollheight = document.getElementsByClassName('movie-main')[0].scrollHeight
    // 可视区域的高度
    let clientheight = document.getElementsByClassName('movie-main')[0].clientHeight
    // console.log(scrolltop, scrollheight, clientheight)
  }

}
