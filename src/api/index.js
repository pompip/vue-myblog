import axios from 'axios'

const getTodoList = ()=>{
   return axios.get("/getTodoList")
}
const getCompliteList =()=>{
    return axios.get("url")
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.error(err); 
    })
}
export default{
    getTodoList,
    getCompliteList
}