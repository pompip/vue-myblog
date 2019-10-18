import axios from 'axios'
// import Qs from 'qs'
import store from '../store/index'

import baseUrl from '@/globle'

const a = axios.create({
    baseURL: baseUrl,
    timeout: 5000
});
a.interceptors.request.use(
    function (config) {
        let t = store.state.Login.token;
        if (t) {
            config.headers = {
                token: store.state.Login.token
            }
        }
        return config;
    }
)
export default a;