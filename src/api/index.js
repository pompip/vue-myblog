import http from './Http'

function get(url, doSuccess) {
    http.get(url).then(result => {
        doSuccess(result.data.data);
    }).catch(err => {
        console.log(err)
    });
}

function post(url,data,doSuccess) {
    http.post(url,data).then(result => {
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


export {
    getFavList,saveFav
}
export default http;