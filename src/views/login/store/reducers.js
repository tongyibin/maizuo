import * as Types from './actionTypes'



const initState = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : {
  tel: ''
}

export default (state = initState,action) => {
  let newState = JSON.parse(JSON.stringify(state));

  // if(action.type === Types.LOGIN_IN){
  //   console.log(action.value);
  //   newState.tel = action.value.tel;
  // }

  return newState;
}
