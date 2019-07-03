import React, { Component } from 'react'
import { MainWrap, MovieLi } from './liststyle.js'
import http from '../../../utils/http1.js'
export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movielist: []
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
                      <div className="movie-num">
                        <span className="movie-num-l">观众评分</span>
                        <span className="movie-num-r">{item.grade}</span>
                      </div>
                      <div className="movie-actor">
                        <span className="movie-actor-l">主演:{item.director}</span>
                      </div>
                      <div className="movie-nation">
                        <span className="movie-nation-c">{item.nation} | {item.runtime}分钟</span>
                      </div>
                    </div>
                    <div className="movie-buy">
                      购票
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
    http.get('/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4627969', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15593866704561255269582"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res)
      this.setState({
        movielist: res.data.films
      })
      // console.log(this.state.movielist)
    })


  }

}


