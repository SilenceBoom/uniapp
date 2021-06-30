<template>
	<view class="box">
		<div style="width: 100%;background-color: #fff;">
			<img src="../../static/ysmf.png" height="50px"></img>
		</div>
		
		<view class="listcard" v-for="i in 10" :key="i" @click="ToYangsheng()">		    
			<view class="listcard-image"><image src="../../static/yangsheng.jpg" mode="aspectFill"></image></view>
			<view class="listcard-content">
				<view class="listcard-content_title">养生小知识</view>
			<view class="listcard-content_sum">每天一个养生小知识</view>
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
			ToYangsheng(){
				uni.navigateTo({
				    url: '/pages/index/yangsheng',
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
	.box{
		background-color: #e9e9e9;
	}
</style>
