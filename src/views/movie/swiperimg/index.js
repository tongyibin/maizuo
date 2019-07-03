// 轮播图
import React, { Component } from 'react'
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
import { MainWarp } from './style.js'
import { connect } from 'react-redux';
import * as actions from '../store/actionCreate'
class Swiperimg extends Component {
  render() {
    return (
      <MainWarp>
        <div className="swiper-container" ref='myswiper'>
          <div className="swiper-wrapper">
            {
              this.props.list.map(item => {
                return (
                  <div className="swiper-slide" key={item.bannerId} >
                    <img src={`${item.imgUrl}`} alt="" />
                  </div>
                )
              })
            }

          </div>
          {/* <!-- 如果需要分页器 --> */}
          <div className="swiper-pagination"></div>
        </div>
      </MainWarp>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.getBannerList()
    }, 10)
    console.log(this.props.list)

  }
  componentDidUpdate() {
    // 轮播图
    var mySwiper = new Swiper(this.refs.myswiper, {
      loop: true, // 循环模式选项
      autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },
    })
    console.log(mySwiper)
  }



}
export default connect(({ movie }) => {
  return {
    list: movie.bannerlist
  }

}, dispatch => ({
  getBannerList() {
    dispatch(actions.asyncBannerList())
  }
}))(Swiperimg)
