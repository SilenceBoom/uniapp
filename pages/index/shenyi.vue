<template>
	<div>
		<img src="../../img/ht.png" height="50px"/>
		<myword :imgUrl="imgUrl" :intro="intro" :word="word"></myword>
		<!-- <u-button @click="Back()" size="medium" plain type="info" style="float: right;margin: 30px;">返回</u-button> -->
		<mybutton :title="title" :color="color" @clickback="Back" style="float: right;margin: 30px;"></mybutton>
	</div>
</template>

<script>
	import mybutton from '../components/mybutton.vue'
	import myword from '../components/myword.vue'
	export default{
		components:{
			mybutton,
			myword
		},
		data(){
			return {
				intro:'  华佗（约公元145年－公元208年），字元化，一名旉，沛国谯县（今安徽亳州）人，东汉末年著名的医学家。',
				word:'  华佗与董奉、张仲景并称为“建安三神医”。少时曾在外游学，行医足迹遍及安徽、河南、山东、江苏等地，钻研医术而不求仕途。他医术全面，尤其擅长外科，精于手术。并精通内、妇、儿、针灸各科。晚年因遭曹操怀疑，下狱被拷问致死。华佗被后人称为“外科圣手”、“外科鼻祖”。被后人多用神医华佗称呼他，又以“华佗再世”、“元化重生”称誉有杰出医术的医师。',		
			    imgUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fit.ping-jia.net%2Fpics%2Fhttp%3A%2F%2Fpic.qbaobei.com%2FUploads%2FPicture%2F2016-11-23%2F5834e9c01a2cb.jpg.jpg&refer=http%3A%2F%2Fit.ping-jia.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626533126&t=fd518d983061ccc95f6ac937c5047179',
				title:'返回',
				color:''
			}
		},
		methods:{
			Back(){
				// uni.navigateTo({
				//     url: '/pages/index/index',
				// });
				uni.navigateBack();
			}
		}
	}
</script>

<style>
	label{
		line-height:25px; 
		letter-spacing:1px;  
		margin: 20px;
		font-size: 15px;
	}
	div{
		padding: 10px;
	}
</style>
