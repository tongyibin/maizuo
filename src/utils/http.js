import axios from 'axios';
const http = axios.create();

http.defaults.baseURL = 'http://localhost:9090';

http.interceptors.response.use((response) => {
    // let res = response.status;
    // console.log(response)
    // if(res === 0){
    // }else{
    //   message.error(res.msg);
    //   return Promise.reject();

    // }
    console.log(response.data)
    return response.data
})


export default http;
