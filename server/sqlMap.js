var sqlMap = {
  // 用户
  user: {
	username:'',
    add: 'insert into user(username,password) values(?,?)',
	search:'select * from user where username=? and password=?',
	info:'select * from user where username=?',
	change:'update user set password=? where username=?'
  },
  shenyi:{
	  search:'select * from shenyi where title=?',
	  list:'select * from shenyi'
  },
  yaocai:{
	  list:'select * from yaocai'
  },
  yangsheng:{
	  list:'select * from yangsheng'
  }
}

module.exports = sqlMap;