<template>
	<view>
		<view class="userback">
			<img :src="user.image"></img>
			<view class="userName">{{user.username}}</view>
		</view>
		<view class="btn-row" v-if="hasLogin">
			<myhead :answer="answer1" :question="question1"></myhead>
			<myhead :answer="answer2" :question="question2"></myhead>	
			<button v-if="hasLogin" type="default" @click="msgout()">退出登录</button>
		</view>
		
		<view class="btn-row" v-if="!hasLogin">
			<u-form :model="form" ref="uForm">
				<u-form-item>
					<u-input placeholder="请输入用户名" v-model="form.username"></u-input>
				</u-form-item>
				<u-form-item>
					<u-input placeholder="请输入密码" v-model="form.password"></u-input>
				</u-form-item>
			</u-form>
			<button v-if="!hasLogin" type="primary" @click="msg">登录</button>
		</view>
	</view>
</template>

<script>
	import myhead from '../components/myhead.vue'
	const axios = require('axios');
	export default{
		components:{
			myhead
		},
		data(){
			return {
				user:{
					username:'',
					image:'https://img1.baidu.com/it/u=335072270,2327013656&fm=26&fmt=auto&gp=0.jpg'
				},
				users:[],
				form:{
					username:'',
					password:''
				},
				question1:'性别',
				answer1:'女',
				question2:'爱好',
				answer2:'唱歌',
				hasLogin:false
			}
		},
		methods:{
			msg(){
				axios.get('http://localhost:3000/').then((response) => {
				    this.users=response.data;
				    })
				for( var i=0;i<this.users.length;i++){		
					if(this.users[i].username===this.form.username){
						if(this.users[i].password===this.form.password){
							this.hasLogin=true;
							this.user.username=this.form.username;
							this.user.image=this.users[i].image;
							break;
						}
						else{
							alert("密码错误")
						}
					}
				}
				if(i>this.users.length){
						alert("账号不存在")
				}
			},
			msgout(){
				this.hasLogin=false;
				this.user.username="";
				this.user.image="https://img1.baidu.com/it/u=335072270,2327013656&fm=26&fmt=auto&gp=0.jpg";
			}
		}
		
	}
</script>

<style>
	.userback {
		height: 216px;
		background-image: url('../../static/userback.jpg');
		background-repeat: no-repeat;
		background-size: 100%;
		text-align: center
	}
	.userback img {
		margin: auto;
		border-radius: 51px;
		margin-top: 11%;
		width: 97px;
		height: 97px;
	}
	.userName{
		color: #111111;
		font-size: 1rem;
	}
</style>
