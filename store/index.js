import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
		ifLog:false,
		user:''
	},
	mutations:{
		login(state,user){
			state.ifLog=true
			state.user=user
			uni.setStorage({
				key:'user',
				data:user
			});
			console.log('登录成功')
			console.log(state.ifLog,state.user)
		},
		
		logout(state,user){
			state.ifLog=false
			state.user=''
			uni.removeSavedFile({
				key:'user'
			})
			console.log('退出登录')
			console.log(state.ifLog,state.user)
		}
	},
	actions:{
		
	}
});
export default store;