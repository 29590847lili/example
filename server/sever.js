const express = require('express');
const bodyParser = require('body-parser');
const cookieParse = require('cookie-parser')
const app = express();
const cors = require('cors');

app.use(bodyParser.json())
app.use(cors({
    origin:'http://localhost:5000',
    credentials: true,
}))
app.use(cookieParse())

app.listen(8080,()=>{
    console.log('aaaa')
})

app.get('/',function(req, res){
    res.send('hello xiaoli')
});

app.post('/api/login',function(req,res){
    const { username, password} = req.body
    res.cookie('logintoken', username, {
        maxAge: 1000 * 50 *60,
        httpOnly: true,
    })
    res.json({
        status:0,
        data:username,
        msg: '登录成功',
    })
})

app.get('/api/json',function(req,res){
    // const { pageNo, pageSize} = req.body
    const { logintoken } = req.cookies
    res.json({
        status:0,
        logintoken,
    })
})