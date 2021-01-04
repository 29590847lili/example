const ENDPOINT = 'http://localhost:8080';
function baseRequest(options){
    const url = options.url ?? '/';
    return fetch(`${ENDPOINT}${url.startsWith('/') ? url : `/${url}`}`, {
        method: options.method ?? 'get',
        credentials: 'include',
        headers: Object.assign({
            'Content-Type': 'application/json',
        },options.headers ?? {} ),
        body:options.method === 'get' ? null : JSON.stringify(options.data),
    })
    .then(resp => resp.json())
    .then(res => {
        console.log(res)
        if(res.status === '401'){
            return Promise.reject({msg: res.msg, data: res.data, res});
        }
        if(res.status === '200' || res.status === 0){
            return Promise.resolve(res);
        }
        alert(res.msg ?? '请求失败')
        return Promise.reject({msg: res.msg, data: res.data, res});
    })
}

const request=['get','post'].reduce((req, method)=>{

    req[method] = (url,data={} ,options={}) =>{
        return baseRequest(Object.assign({url, data, method } , options))
    }
    return req
},{})

document.getElementById('login').onclick = function(){
    request.post('/api/login',{ username:'lili', password:'123'})
    .then(res => console.log(res))
}

document.getElementById('request').onclick= function(){
    request.get('/api/json')
    .then(res => console.log(res))
}



/* baseRequest({
    method: 'post',
    url: '/api/bodyjson',
    data:{
        pageNo:2,
        pageSize:100
    }
}) */