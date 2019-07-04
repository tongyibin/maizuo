import React, { Component } from 'react'
import { Aboutlist } from './style.js'
export default class MovieAbout extends Component {
  render() {
    return (
      <Aboutlist>
        {/* banner图 */}
        <div className="movie-banner">
          <img src="https://pic.maizuo.com/usr/movie/0b0a1bf167bac70d4955bf8caf89fbdc.jpg?x-oss-process=image/quality,Q_70" alt="" />
        </div>
        {/* 影片简介 */}
        <div className="about-intro">
          <div className="intro-title">
            <span className="intro-title-t">
              <span className="intro-title-l">千与千寻   </span>
              <span className="intro-title-c">2D</span>
            </span>
            <span className="intro-title-r">7.3分</span>
          </div>
          <div className="intro-brief">
            <span>剧情 | 动画 | 奇幻</span>
          </div>
          <div className="intro-nation">日本 | 125分钟</div>
          <div className="intro-referral">千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了。</div>
        </div>
        {/* 演员介绍 */}
        <div className="intro-actor">
          <span className="actor-title">演职人员</span>
          <ul className="actor-img">
            <li className="img-img">
              <img src="https://pic.maizuo.com/usr/movie/10874abbc01c4ddfd41274fe565b721a.jpg?x-oss-process=image/quality,Q_70" alt="" />
              <span>通刘梅</span>
              <span>他婆婆</span>
            </li>
            <li className="img-img">
              <img src="https://pic.maizuo.com/usr/movie/10874abbc01c4ddfd41274fe565b721a.jpg?x-oss-process=image/quality,Q_70" alt="" />
              <span>通刘梅</span>
              <span>他婆婆</span>
            </li>
            <li className="img-img">
              <img src="https://pic.maizuo.com/usr/movie/10874abbc01c4ddfd41274fe565b721a.jpg?x-oss-process=image/quality,Q_70" alt="" />
              <span>通刘梅</span>
              <span>他婆婆</span>
            </li>
            <li className="img-img">
              <img src="https://pic.maizuo.com/usr/movie/10874abbc01c4ddfd41274fe565b721a.jpg?x-oss-process=image/quality,Q_70" alt="" />
              <span>通刘梅</span>
              <span>他婆婆</span>
            </li>
            <li className="img-img">
              <img src="https://pic.maizuo.com/usr/movie/10874abbc01c4ddfd41274fe565b721a.jpg?x-oss-process=image/quality,Q_70" alt="" />
              <span>通刘梅</span>
              <span>他婆婆</span>
            </li>

          </ul>
        </div>
        {/* 选购按钮 */}
        <div className="about-btn">
          选座购票
        </div>
      </Aboutlist>
    )
  }
}
