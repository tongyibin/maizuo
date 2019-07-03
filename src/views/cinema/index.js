// 影院页面
import React, { Component } from 'react';
import {Header,List} from './style.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class index extends Component {
  constructor(props){
    super(props);
    this.state= {
      siteList: []
    }
  }
  render() {
    console.log(this.state.siteList)
    return (
      <div>
        <Header>
          <ul className= "citySelection">
            <li><Link to="/daye">地址</Link></li>
            <li>影院</li>
            <li><Link to="/cinema/search">搜索</Link></li>
          </ul>
          <ul className= "lookOver" >
            <li>全城</li>
            <li>APP订票</li>
            <li>最近去过</li>
          </ul>
        </Header>
        <List>
          <ul>{
            this.state.siteList.map(item => {
              return (
              <li key={item.cinemaId}>
                <div>
                  <h2>{item.name}</h2>
                  <h2>{item.address}</h2>
                </div>
                <div>
                  <h2 className="lowPrice">{ item.lowPrice.toString().slice(0,2) }元</h2>
                  <h2>{parseInt(item.longitude)}米</h2>
                </div>
              </li>
            )
            })
          }
          </ul>
        </List>
      </div>
    )
  }
  componentDidMount(){
    axios.get('https://m.maizuo.com/gateway?cityId=210300&ticketFlag=1&k=1147495',{
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1562048918206158430509"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    })
    .then(res=>{
      let newRes = res.data;
      console.log(newRes);
      console.log(newRes.data.cinemas[0].lowPrice.toString())
      if(newRes.status === 0){
        this.setState({
          siteList: newRes.data.cinemas
        })
      }
      
    })
    
  }
}
