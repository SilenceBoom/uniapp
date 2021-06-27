let BASE_URL = 'http://192.168.43.74:8080'

// BASE_URL = '/api'

const request = (options = {})=>{
	return new Promise((resolve, reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method:options.method||'GET',
			data:options.data||{},
			timeout:8000,
			success: (res) => {
				console.log('res',res)
				resolve(res)
			},
			fail: (err) => {
				console.log('err',err)
				msg('请求接口失败')
				reject(err)
			}
			
		})
	})
}

export default request