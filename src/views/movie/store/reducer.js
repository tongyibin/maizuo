import * as Types from './actionTypes'
const initstate = {
  bannerlist: [], //banner数据
}
export default (state = initstate, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === Types.SET_BANNER_LIST) {
    newState.bannerlist = action.data
    // console.log(newState.bannerlist)
  }
  return newState
}
