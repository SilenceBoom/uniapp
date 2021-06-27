<template>
	<div>
		<img src="../../img/ys.png" height="50px"/>
		<myword :imgUrl="imgUrl" :intro="intro" :word="word"></myword>
		<u-button @click="Back()" size="medium" plain type="info" style="float: right;margin: 30px;">返回</u-button>
	</div>
</template>

<script>
	import myword from '../components/myword.vue'
	export default{
		components:{
			myword
		},
		data(){
			return {
				intro:'清晨起床，很多人觉得，真不就是一件特别随意的事情吗?我想怎么起床就怎么起床，如果您这样认为那就错了，我们身边有不少的例子，早上起床过猛，血压升高，或者是造成脑梗，突然就死亡的人不少，因此，早上起床一定要注意。',
				word:'早上尽量不要猛起，这会使血往上冲，造成血压突然变动，引起头晕等症状。比较好的做法是，睁开眼睛后先不起身，躺在床上活动一下四肢和头部，5分钟后再起来。如果你有起不来的问题，可以闭着眼做一些伸拉四肢的动作，会非常有助于清醒。早上喝水是很多人都有的习惯，因此，这个习惯一定要长期坚持，因为早起喝水是在人们经过一夜的睡眠之后，补充身体所需的水分，早起喝水要注意温度，喝一杯凉开水，而不要喝冰水，否则的话不会对肠胃起到好的作用哦!',		
			    imgUrl:'https://img1.baidu.com/it/u=3436078025,1338630003&fm=26&fmt=auto&gp=0.jpg'
			}
		},
		methods:{
			Back(){
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
