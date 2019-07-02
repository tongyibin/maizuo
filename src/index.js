// 入口文件
import React from 'react'
import ReactDom from 'react-dom'
import App from './App.js'
import { Provider } from "react-redux"
import store from './store/index.js'
import './styles/base.less'
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)

