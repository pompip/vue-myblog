import axios from 'axios'
// import Qs from 'qs'
import store from '../store/index'

const a = axios.create({
    baseURL: "http://java.asuscomm.com:9000/api",
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