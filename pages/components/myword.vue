<template name="myword">
	<div>
	<br>
	<label>{{intro}}</label>
	<br>
	<br>
	<image :src="imgUrl"/>
	<br>
	<br>
	<label>{{word}}</label>
	<br>
	</div>
	
</template>

<script>
	export default{
		name:'myword',
		props:{
			intro:{
				type:String,
				default:''
			},
			word:{
				type:String,
				default:''
			},
			imgUrl:{
				type:String,
				default:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fit.ping-jia.net%2Fpics%2Fhttp%3A%2F%2Fpic.qbaobei.com%2FUploads%2FPicture%2F2016-11-23%2F5834e9c01a2cb.jpg.jpg&refer=http%3A%2F%2Fit.ping-jia.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626533126&t=fd518d983061ccc95f6ac937c5047179'
			}
		}
	}
</script>

<style>
	img{
		width: 100%;
	}
	div{
		padding: 10px;
	}
</style>
