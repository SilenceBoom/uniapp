var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
var multer = require('multer');
const fs = require('fs');
const moment= require('moment');
let upload = multer({dest:'./public/uploads/'})
// var storage = multer.diskStorage({
// 	destination:function(req,file,cb){
// 		cb(null,'./img');
// 	},
// });
// var upload =multer({storage:storage});

var currentUser=''
// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
  let sql = $sql.user.add;
  let params = req.body;
  console.log(params);
  conn.query(sql, [params.username, params.password], function(err, result) {
    if (err) {
      console.log("添加失败"+err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
router.post('/search', (req, res) => {
  let sql = $sql.user.search;
  let params = req.body;
  this.currentUser=params.username
  console.log(params);
  conn.query(sql, [params.username,params.password], function(err, result) {
    if (err) {
      console.log("查询失败"+err);
    }
	// let data = JSON.stringify(result)
	// res.send(data)
    if (result) {
      jsonWrite(res, result);
    }
  })
});
router.get('/shenyi', (req, res) => {
  let sql = $sql.shenyi.list;
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("查询失败"+err);
    }
	// let data = JSON.stringify(result)
	// res.send(data)
    if (result) {
      jsonWrite(res, result);
    }
  })
});
router.get('/yangsheng', (req, res) => {
  let sql = $sql.yangsheng.list;
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("查询失败"+err);
    }
	// let data = JSON.stringify(result)
	// res.send(data)
    if (result) {
      jsonWrite(res, result);
    }
  })
});
router.get('/yaocai', (req, res) => {
  let sql = $sql.yaocai.list;
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("查询失败"+err);
    }
	// let data = JSON.stringify(result)
	// res.send(data)
    if (result) {
      jsonWrite(res, result);
    }
  })
});
router.post('/shenyiSearch', (req, res) => {
  let sql = $sql.shenyi.search;
  let params=req.body
    console.log(params);
  conn.query(sql,[params.title], function(err, result) {
    if (err) {
      console.log("查询失败"+err);
    }
	// let data = JSON.stringify(result)
	// res.send(data)
    if (result) {
      jsonWrite(res, result);
    }
  })
});
router.post('/upload',(req, res) => {
 

  let file=req.files.img;
  console.log(file)
   // fs.renameSync('./public/uploads/'+file.name,'./public/uploads/'+file.md5);
  res.set({
      'content-type':'application/JSON; charset=utf-8'
  })
  let username=this.currentUser;
  console.log(username)
   let imgUrl = 'http://192.168.43.74:3000/server/public/uploads/'+file.name;
   let sql =`update user set image=? where username=?`;
   conn.query(sql,[imgUrl,username], function(err, result) {
     if (err) {
       console.log("查询失败"+err);
     }
   	// let data = JSON.stringify(result)
   	// res.send(data)
     if (result) {
       jsonWrite(res, result);
     }
  })
});

router.post('/change',(req, res) => { 
  let params=req.body
  let sql = $sql.user.change;
    console.log(params);
  conn.query(sql,[params.password,params.username], function(err, result) {
    if (err) {
      console.log("查询失败"+err);
    }
	// let data = JSON.stringify(result)
	// res.send(data)
    if (result) {
      jsonWrite(res, result);
    }
  })
});

module.exports = router;