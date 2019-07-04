import React, { Component } from 'react'
import { MainWrap, MovieLi } from './liststyle.js'
import http from '../../../utils/http1.js'

let isLoading = false;

export default class Movieabout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movielist: [],
      name: [],
      num: 1,
      isok: false,
      loading: false,
    }
  }
  render() {
    let { movielist } = this.state
    return (
      <MainWrap>
        <ul className="movie-ul">
          {
            movielist.map(item => {
              return (
                <li key={item.filmId}>
                  <MovieLi>
                    <div className="movieimg">
                      <img alt="" src={`${item.poster}`} />
                    </div>
                    <div className="movie-details">
                      <div className="movie-name">
                        <span className="movie-name-l">{item.name}</span>
                        <span className="movie-name-r">{item.item.name}</span>
                      </div>

                      <div className="movie-actor">
                        <span className="movie-actor-l">主演:{item.director}</span>
                      </div>
                      <div className="movie-nation">
                        <span className="movie-nation-c">{item.nation} | {item.runtime}分钟</span>
                      </div>
                    </div>
                    <div className="movie-buy">
                      预购
                      </div>
                  </MovieLi>
                </li>
              )
            })
          }
        </ul>
      </MainWrap>
    )
  }
  componentDidMount() {
    this.getmovielist()
    window.addEventListener('scroll', this.onscroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onscroll, true)
    console.log(2)
  }
  // 获取影片数据
  getmovielist() {
    isLoading = true;
    setTimeout(() => {
      http.get(`/gateway?cityId=110100&pageNum=${this.state.num}&pageSize=10&type=2&k=434549`, {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15593866704561255269582"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        let movielists = [...this.state.movielist, ...res.data.films];
        let nextNum = this.state.num += 1;
        isLoading = false;
        this.setState({
          movielist: movielists,
          num: nextNum,
        })
      })
    }, 300);
  }
  onscroll = () => {
    // console.log(window.scrollY)
    // 滚动条距离顶部的高度
    let scrolltop = document.getElementsByClassName('elkAqb')[0].scrollTop;
    // 页面的高度
    let scrollheight = document.getElementsByClassName('elkAqb')[0].scrollHeight
    // 可视区域的高度
    let clientheight = document.getElementsByClassName('elkAqb')[0].clientHeight
    // console.log(scrolltop, scrollheight, clientheight)
    if ((scrollheight - scrolltop - clientheight) < 80) {
      if (!isLoading) {
        // 是否加载更多数据
        this.getmovielist(true)
      }
    }
  }
}


