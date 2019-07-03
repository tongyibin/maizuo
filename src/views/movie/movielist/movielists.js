import React, { Component } from 'react'
import {MainWrap,MovieLi} from './liststyle.js'
export default class index extends Component {
  render() {
    return (
      <MainWrap>
        <ul>
          <MovieLi>
            <div className="movieimg">
                <img alt="" src="https://pic.maizuo.com/usr/movie/73b25044a8c9756fa41d3a723ee6c2c2.jpg?x-oss-process=image/quality,Q_70" />
            </div>
            <div>
                <div>
                  <span>
                  </span>
                </div>
            </div>
            <div>

            </div>
          </MovieLi>
        </ul>
      </MainWrap>
    )
  }
}
