import axios from 'axios'
import Qs from 'qs'
// import Vue from "vue";
import {Store} from '@/store' 

export default  axios.create({
    baseURL: "http://java.asuscomm.com:9000/api",
    headers:{
        "token":Store.Login.state.token
    },
    timeout: 5000,
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data)
    }]
    
})