import http from './Http'

function get(url, doSuccess) {
    http.get(url).then(result => {
        console.log(url +" get  result:")
        console.log(result)
        doSuccess(result.data.data);
    }).catch(err => {
        console.log(err)
    });
}

function post(url,data,doSuccess) {
    http.post(url,data).then(result => {
        console.log(url+" post result:")
        console.log(result)
        doSuccess(result.data.data);
    }).catch(err => {
        console.log(err)
    });
}

const getFavList = (doSuccess) => {
    get("/fav/all", doSuccess)
}

const saveFav =(data,doSuccess)=>{
    post("/fav/add",data,doSuccess)
}

const delFav = (id ,doSuccess)=>{
    get("/fav/delete?id="+id ,doSuccess)
}

export {
    getFavList,saveFav,delFav
}
export default http;