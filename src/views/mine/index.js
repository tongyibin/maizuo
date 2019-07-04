// 我的页面
import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import {HeardWarp,CenterWarp,AvatWarp,ImgWarp,AvdivWarp,UlWarp,LiWarp,DyddImgWarp,DyddDivWarp,DyddSpanWarp,
  SpddImgWarp,SpddDivWarp,MarginSetWarp,MzjImgWarp,MzjSpanWarp,MzjImgIconWarp,YeSpan} from '../../styles/mineStyle'


export default class index extends Component {
  render() {

    return (
      <HeardWarp>
        <Link to='/login'>
        <CenterWarp>
          <AvatWarp>
            <ImgWarp src={require('./img/loginpoto.png')} />
            <AvdivWarp>立即登录</AvdivWarp>
          </AvatWarp>
          <UlWarp>
              <LiWarp>
                <DyddImgWarp src={require('./img/dy.png')} />
                <DyddSpanWarp style={{display:'none'}}/>
                <DyddDivWarp>电影订单</DyddDivWarp>
              </LiWarp>
              <LiWarp>
                <SpddImgWarp src={require('./img/dy2.png')} />
                <SpddDivWarp>商品订单</SpddDivWarp>
              </LiWarp>
          </UlWarp>
          {/* <!---分割--> */}
          <MarginSetWarp>
            <MzjImgWarp src={require('./img/c1.png')} />
            <MzjSpanWarp>卖座券</MzjSpanWarp>
            <MzjImgIconWarp src={require('./img/up.png')}/>
          </MarginSetWarp>

          <MarginSetWarp>
            <MzjImgWarp src={require('./img/c2.png')} />
            <MzjSpanWarp>组合红包</MzjSpanWarp>
            <MzjImgIconWarp src={require('./img/up.png')}/>
          </MarginSetWarp>

          <MarginSetWarp>
           <MzjImgWarp src={require('./img/c3.png')} />
           <MzjSpanWarp>余额</MzjSpanWarp>
           <YeSpan>￥0</YeSpan>
           <MzjImgIconWarp src={require('./img/up.png')}/>
          </MarginSetWarp>

          <MarginSetWarp>
            <MzjImgWarp src={require('./img/c4.png')} />
            <MzjSpanWarp>设置</MzjSpanWarp>
            <MzjImgIconWarp src={require('./img/up.png')}/>
          </MarginSetWarp>
        </CenterWarp>
        </Link>
      </HeardWarp>

    )
  }

}
