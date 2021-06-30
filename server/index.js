// // let http =require('http')
// // let mysql = require('mysql');
// //  let bodyParser = require('body-parser')
// //  let jsonParser = bodyParser.json({extended:false});

// const server=http.createServer(function(req,res){
//     res.statusCode=200
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');  
//     res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");  
//     res.setHeader("X-Powered-By", ' 3.2.1')  
//     res.setHeader("Content-Type", "application/json;charset=utf-8");
//     res.setHeader('Content-Type','text/plain;charset=utf-8')
// })
// // 创建一个数据库连接池
// let connection = mysql.createConnection({
//     host:'192.168.43.74',
//     user:'root',
//     password:'123456',
//     database:'uniapp'
// });
// connection.connect(function(err){
//     if(err){
//         console.log('error')
//     }
//     console.log('connect success!')
// });//连接
// server.on('request',function(request,response){
//     let url=request.url
// 	let params='李时珍';
// 	// let {keyword} = request.body
// 	// console.log(keyword)
//     if(url==='/'){
//         // 查询数据
//         connection.query('select * from user',request,function(err,row){
//             if(err){
//                  console.log(err)            
//             }
//             console.log(typeof row)
//             let data = JSON.stringify(row)
//             response.end(data)
//         })
//     }
// 	else if(url==='/shenyi'){
// 		connection.query('select * from shenyi',request,function(err,row){
// 		    if(err){
// 		         console.log(err)            
// 		    }
// 		    console.log(typeof row)
// 		    let data = JSON.stringify(row)
// 		    response.end(data)
// 		})
// 	}
// 	else if(url==='/yaocai'){
// 		connection.query('select * from yaocai',request,function(err,row){
// 		    if(err){
// 		         console.log(err)            
// 		    }
// 		    console.log(typeof row)
// 		    let data = JSON.stringify(row)
// 		    response.end(data)
// 		})
// 	}
// 	else if(url==='/yangsheng'){
// 		connection.query('select * from yangsheng',request,function(err,row){
// 		    if(err){
// 		         console.log(err)            
// 		    }
// 		    console.log(typeof row)
// 		    let data = JSON.stringify(row)
// 		    response.end(data)
// 		})
// 	}
// 	else if(url==='/shenyiSearch'){
// 		var sql='select * from shenyi where title="'+params+'"';
// 		console.log(request.data)
// 		connection.query('select * from shenyi where title="李时珍"',request,function(err,row){
// 		    if(err){
// 		         console.log(err)            
// 		    }
// 		    console.log(typeof row)
// 		    let data = JSON.stringify(row)
// 		    response.end(data)
// 	    })
// 	}
// })
// server.listen(3000,()=>{
//     console.log('服务器开启成功！')
// })
const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();


const fileUpload = require('express-fileupload');


app.use(fileUpload());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// 后端api路由
app.use('/api/user', userApi);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');