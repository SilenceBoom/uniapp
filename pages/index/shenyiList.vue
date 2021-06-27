<template>
	<view>
		<img src="../../static/gdsy.png" height="50px"></img>
		<view class="listcard" v-for="i in 10" :key="i" @click="ToShenyi()">		    
			<view class="listcard-image"><image src="../../static/huatuo.jpg" mode="aspectFill"></image></view>
			<view class="listcard-content">
				<view class="listcard-content_title">神医华佗 </view>
			<view class="listcard-content_sum">神医华佗，超级牛</view>
			</view>
			
	    </view>
	</view>
	
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			ToShenyi(){
				uni.navigateTo({
				    url: '/pages/index/shenyi',
				});
			},
		}
	}
</script>

<style>
	view{
		padding: 5px;
	}
	.listcard {
		border-bottom: 1px solid $uni-bg-color-grey;
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		border-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.9);
		box-sizing: border-box;
	}
	.listcard-image {
		width: 250px;
		height: 100px;
		
	}
	image{
		width: 100%;
		height: 100%;
	}
	.listcard-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 10px;
		width: 100%;
		font-size: 16px;
		line-height: 1.2;
	}
	.listcard-content_sum {
		font-size: 10px;
	}
	.listcard-content_title{
	}
	
</style>
