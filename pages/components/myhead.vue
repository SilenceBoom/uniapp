<template name="myhead">
	<view class="cu-item">								
		<view class="content">{{question}}</view>												
		<view class="action">{{answer}}</view>															
	</view>	
</template>

<script>
	export default{
		name:'myhead',
		props:{
			question:{
				type:String,
				default:''
			},
			answer:{
				type:String,
				default:''
			}
		}
	}
</script>

<style>
	.cu-item{
		height: 60px;
		background: none;
		border-bottom: 1px solid #e9e9e9;
		border-top: 1px solid #e9e9e9;
		margin-bottom: 15px;
	}
	.content {	   
		margin-left: 18px;	
		float: left;
		font-size: 20px;
		margin-top: 18px;
	}
	.action {
		width: 42px;
		margin-right: 18px;
	    float: right;
		display: inline;
		flex-direction: row-reverse;
		font-size: 20px;
		margin-top: 18px;
	}
</style>
