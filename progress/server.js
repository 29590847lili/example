var http = require('http');
var fs= require('fs');
var server = http.createServer(function (request, response) {
    var url = request.url;
    if(url === '/'){
        fs.readFile('./index.html', function(err, data){
          if(!err){
            response.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
            response.end(data)
          }else{
              throw err;
          }
        });
    }

    if(url === '/data.json'){
        const obj = require('./data.json')
        response.writeHead(200, {
           "Content-Length": 74407,
            "Content-Encoding": "UTF-8"
        });
        response.write(JSON.stringify(obj))
        /* fs.readFile('./data.json', function(err, data){
            if(!err){
                response.writeHead(200, {"Content-Type": "application/json"});
                response.end(data);
            }else{
                throw err;
            }
        }) */
    }
});

// 让服务器监听8080端口:
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');

