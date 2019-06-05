import axios from 'axios'
import Qs from 'qs'
// import Vue from "vue";
import {Store} from '@/store' 

axios.interceptors.request.use(
    config => {
        if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
            config.headers.Authorization = token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);

    });

export default  axios.create({
    baseURL: "http://java.asuscomm.com:9000/api",
    headers:{
        "token":"123"
    },
    changeOrigin:true,
    timeout: 5000,
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data)
    }]
    
})