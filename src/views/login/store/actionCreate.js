import * as Types from './actionTypes'
import http from '@/utils/http.js'
import { join } from 'path';
import { message } from 'antd';

// export const onSignIn = value => ({
//   type: Types.SIGN_IN,
//   value
// })

export const asyncSignIn = (values,props) =>{
  return () => {
    // http.get('/sign-in',JSON.stringify(values),{
    //   headers:{
    //     'Content-Type': 'application/json'
    //   }
    // }).then(response => {
    //  if(values = response){
    //    console.log(values.text);
    //    console.log(response.text);

    //   // dispatch(onSignIn(res.data));
    //   // window.localStorage.setItem('user',JSON.stringify(res.data))

    //   //跳转页面
    //       let redirect = props.location.state ? props.location.state.redirect : '/'
    //       props.history.replace(redirect);
    //    }else{
    //      return alert("错误")
    //    }
    // })
      console.log(values.text);
      console.log(props);
      http.get('/sign').then(response => {
        console.log(response.data.text);
        let res = response.data.text
        if(values.text === res){
          window.localStorage.setItem('user',JSON.stringify(values.text))
          let redirect = props.location.state ? props.location.state.redirect : '/'
          props.history.replace(redirect);
        }else{
          return message.error('验证码错误');
        }
      });
  }
}


