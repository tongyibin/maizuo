// 城市选择
import React, { Component } from 'react'
import axios from 'axios';
import { Header,CityInput,CityList } from './style.js';

export default class index extends Component {
  constructor(props){
    super(props);
    this.state= {
      city: [],
      value: '',
      kg: false
    }
  }
  render() {
    let { city,value } = this.state;
    return (
      <div>
        <Header>
          <button>×</button>
          <h1>当前城市</h1>
        </Header>
        <CityInput>
          <input
            placeholder="请输入城市"
            value= {value}
            onChange= {this.chgInp}
          />
        </CityInput>
        <CityList>
          {city.map((item,index) => {
            return(
              <li key= {index}>
                <p>{item.py}</p>
                <ul>
                  {
                    item.list.map(itemm => {
                      return <li key={ itemm.cityId }>{ itemm.name }</li>
                    })
                  }
                </ul>
              </li>
            )
          })}
        </CityList>
      </div>
    )
  }
  componentDidMount(){
    return new Promise((a) => {
      axios.get('https://m.maizuo.com/gateway',{
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1562048918206158430509"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      let newRes = res.data;
      if(newRes.status === 0){
        this.setState({
          city: this.citySort(newRes.data.cities)
        })
        a();
      }
    })
    })
  }
   chgInp = async (e) => {
    let value = e.target.value;
    await this.componentDidMount();
    let CityList = this.state.city
    let city = []
    if(value === ''){
      this.setState({
        value,
      })
      return 
    }else{
      for(let i = 0; i < CityList.length; i++){
        for(let j=0; j < CityList[i].list.length ; j++){
          if(CityList[i].list[j].pinyin.indexOf(value) > -1){
            city.push(CityList[i].list[j]);
          }
        }
      }
    }
      
    this.setState({
      value,
      city: [{list: city}]
    })
  }
  citySort = (arr)=>{
    let index = 0;
    let hash = {};
    let cityArr = [];
    for(let i = 0;i<arr.length;i++){
      let city = arr[i];
      let py = city.pinyin.charAt(0).toUpperCase();
      if(hash[py]){
        cityArr[hash[py] - 1].list.push(city)
      }else{
        let obj = {
          py: py,
          list: [city]
        }
        hash[py] = ++index;
        cityArr.push(obj);
      }
    }
    return cityArr.sort((a,b) => {
      return a.py.charCodeAt() - b.py.charCodeAt()
    });
  }
}




