<template>
	<div>
		<img src="../../img/bz.png" height="50px"/>
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
				intro:'白芷，中药名。为多年生高大草本，高1-2.5米，根圆柱形，茎基部径2-5厘米，基生叶一回羽状分裂，复伞形花序顶生或侧生，果实长圆形至卵圆形。',
				word:'主要变种有杭白芷、祁白芷、白芷(原变种)、台湾独活。以根入药，有祛病除湿、排脓生肌、活血止痛等功能。主治风寒感冒、头痛、鼻炎、牙痛。赤白带下、痛疖肿毒等症，亦可作香料。北方的一些省区有栽培，多自产自销，少数调省外。一般生于林下、林缘、溪旁、灌丛和山谷草地。',		
			    imgUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.zyccst.com%2Fupload%2Fupay%2F877179%2F2%2FE58FAA322E6A7067.jpg&refer=http%3A%2F%2Fi.zyccst.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626593776&t=5fce91044fd2fb0a7eb26eb803083a54'
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
</style>
