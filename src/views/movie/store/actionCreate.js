import * as Types from './actionTypes'
import http from '@/utils/http1.js'

export const onbannerlist = data => ({
  type: Types.SET_BANNER_LIST,
  data
})
export const asyncBannerList = () => {
  return dispatch => {
    http.get('/gateway?type=2&cityId=110100&k=324154', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15593866704561255269582"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      // console.log(res)
      dispatch(onbannerlist(res.data))
    }).catch(err => {
      console.log(err)
    })
  }
}
