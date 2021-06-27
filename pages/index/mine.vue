<template>
	<view>
		<view class="userback">
			<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1133962089,1491190013&fm=26&gp=0.jpg"></img>
			<view class="userName">立早章</view>
		</view>
		<myhead :answer="answer1" :question="question1"></myhead>
		<myhead :answer="answer2" :question="question2"></myhead>	
		<view class="btn-row">
			<button v-if="!hasLogin" type="primary" class="primary">登录</button>
			<button v-if="hasLogin" type="default" >退出登录</button>
		</view>
	</view>
</template>

<script>
	import myhead from '../components/myhead.vue'
	export default{
		components:{
			myhead
		},
		data(){
			return {
				question1:'性别',
				answer1:'女',
				question2:'爱好',
				answer2:'唱歌',
				hasLogin:true
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
