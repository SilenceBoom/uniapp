<template>
	<view>
		<view class="btn-row" v-if="hasLogin">
			<view class="userback">
				<img :src="user.image"  @click="changeHead"></img>
				<view class="userName">{{user.username}}</view>
			</view>
			<myhead :answer="answer1" :question="question1"></myhead>
			<myhead :answer="answer2" :question="question2"></myhead>	
			<u-popup v-model="show" mode="center" width="70%" height="30%">
				<u-input placeholder="请输入新密码" v-model="newpass" style="border:  1px solid #e9e9e9; width: 50%;margin: 20%;"></u-input>
				<u-button type="primary" size="mini" style="float: right;margin-right: 5px;" @click="change()">确认修改</u-button>
				<u-button type="primary" size="mini"  @click="show=false" plain style="float: right;margin-right: 5px;">取消</u-button>
			</u-popup>
			<button v-if="hasLogin" type="primary" @click="show=true" style="margin-bottom: 20px;">修改密码</button>
			<button v-if="hasLogin" type="default" @click="msgout()">退出登录</button>
		</view>
		
		<view class="btn-row" v-if="!hasLogin">
			<view class="userback">
				<img :src="user.image" ></img>
				<view class="userName">{{user.username}}</view>
			</view>
			<u-form :model="form" ref="uForm">
				<u-form-item>
					<u-input placeholder="请输入用户名" v-model="form.username"></u-input>
				</u-form-item>
				<u-form-item>
					<u-input placeholder="请输入密码" v-model="form.password"></u-input>
				</u-form-item>
			</u-form>
			<button v-if="!hasLogin" type="primary" @click="msg">登录</button>
			<button v-if="!hasLogin" type="primary" @click="reg" style="margin-top: 20px;">注册</button>
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
					password:'',
					image:'https://img1.baidu.com/it/u=335072270,2327013656&fm=26&fmt=auto&gp=0.jpg'
				},
				show:false,
				newpass:'',
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
				let name=this.form.username;
				let pass=this.form.password;
				axios.post('http://192.168.43.74:3000/api/user/search',{
					username:name,
					password:pass
				}).then((res)=>{
					
					if(res.data.length===0){
						uni.showToast({
							title:'用户名或密码错误',
							icon:'none'
						})
					}else{
						this.hasLogin=true;
					    this.users=res.data
				    	this.user=this.users[0]
						uni.showToast({
						title:'登录成功',					
                        icon:'none'
					    })
					}
					
					
				})
				
				
			},
			msgout(){
				this.hasLogin=false;
				this.user.username="";
				this.user.image="https://img1.baidu.com/it/u=335072270,2327013656&fm=26&fmt=auto&gp=0.jpg";
			},
			reg(){
				let name=this.form.username;
				let pass=this.form.password;
				axios.post('http://192.168.43.74:3000/api/user/addUser',{
					username:name,
					password:pass
				}).then((res)=>{
					console.log(res.data)
				})
			},
			change(){
				let name=this.user.username
				let pass=this.newpass
				axios.post('http://192.168.43.74:3000/api/user/change',{
					username:name,
					password:pass
				}).then((res)=>{
					this.newpass=''
					this.show=false
					uni.showToast({
						title:'修改成功',
						icon:'none'
					})
				})
			},
			changeHead(){
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFile=chooseImageRes.tempFilePaths[0]
						console.log(tempFile)
						this.user.image=tempFile
						uni.uploadFile({
							url:'http://192.168.43.74:3000/api/user/upload',
							filePath:tempFile,
						    name:'img',
							formData:this.username,
			                success:(res)=>{
								const bufferUrl = btoa(new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
					            uni.showToast({
					            	title:'上传成功',
									icon:'none'
					            })
								console.log(res.data)
								// this.user.image=res.data
							}
						})
					}
				})
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
	.btn-row{
		padding: 5px;
	}
</style>
