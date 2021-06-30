<template>
	<view class="box">
		<div style="width: 100%;background-color: #fff;">
			<img src="../../static/gdsy.png" height="50px"></img>
			<u-search v-model="keyword" @custom="searchBank" @search="searchBank"></u-search>
		</div>
		<div v-if="!search">
		 <view class="listcard" v-for="i in 10" :key="i" @click="ToShenyi()">		    
			<view class="listcard-image"><image src="../../static/huatuo.jpg" mode="aspectFill"></image></view>
			<view class="listcard-content">
				<view class="listcard-content_title">神医华佗 </view>
			<view class="listcard-content_sum">神医华佗，超级牛</view>
			</view>
			
	    </view>
		</div>
		<div v-if="search">
			<view class="listcard" @click="ToShenyi()">
				<view class="listcard-image"><image :src="result[0].image" mode="aspectFill"></image></view>
				<view class="listcard-content">
					<view class="listcard-content_title">{{result[0].title}} </view>
				<view class="listcard-content_sum">神医李时珍，超级牛</view>
				</view>
				
			</view>
		</div>
		
	</view>
	
</template>

<script>
	const axios = require('axios');
	export default{
		data(){
			return {
				keyword:'',
				search:false,
				result:[]
			}
		},
		methods:{
			ToShenyi(){
				uni.navigateTo({
				    url: '/pages/index/shenyi',
				});
			},
			searchBank(){
				if(this.keyword===''){
					this.search=false
				}
				else{
					axios.post('http://192.168.43.74:3000/api/user/shenyiSearch',{
						title:this.keyword
					}).then((response) => {
						if(response.data.length===0){
							this.search=false
							this.keyword=''
							uni.showToast({
								title:'查询无结果',
								icon:'none'
							})
						}else{
							this.result=response.data
					       console.log(this.result)
					       this.search=true
						}
					
				    })
				}
				
			}
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
