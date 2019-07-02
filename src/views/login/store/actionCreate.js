import * as Types from './actionTypes'
import http from '@/utils/http.js'

// export const onSignIn = value => ({
//   type: Types.SIGN_IN,
//   value
// })

export const asyncSignIn = (values,props) =>{
  return () => {
    http.post('/sign-in',JSON.stringify(values),{
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => {
      // dispatch(onSignIn(res.data));
      window.localStorage.setItem('user',JSON.stringify(res.data))

      //跳转页面
      let redirect = props.location.state ? props.location.state.redirect : '/'
      props.history.replace(redirect);
    })
  }
}


