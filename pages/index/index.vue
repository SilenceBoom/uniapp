<template>
	<div id="app">
		<view>
		<div class="title">
			<img style="display: inline;"  src="../../img/title.png" height="50px"/>		
		</div>
		<br>
		<view class="wrap">
			<u-swiper :list="list" duration="1500" :circular="true" height="400"></u-swiper>
		</view>
		
		<div class="box">
			<img src="../../img/gdsy.png" height="40px"/>
				
			
			<u-waterfall v-model="flowList1" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in shenyiList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index" @click="ToShenyi()"></u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in shenyiList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index" @click="ToShenyi()"></u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>						
					</view>
				</template>
			</u-waterfall>
		</div>
		<div class="box">
			<img src="../../img/yczs.png" height="40px"/>
			<u-waterfall v-model="flowList2" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in yaocaiList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index" @click="ToYaocai()"></u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in yaocaiList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index" @click="ToYaocai()"></u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>						
					</view>
				</template>
			</u-waterfall>
		</div>
		<div class="box">
			<img src="../../img/ysmf.png" height="40px"/>
			<u-waterfall v-model="flowList3" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in yangshengList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index" @click="ToYangsheng()"></u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in yangshengList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index" @click="ToYangsheng()"></u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>						
					</view>
				</template>
			</u-waterfall>
		</div>
		</view>
	</div>
</template>

<script>
	const axios = require('axios');
	export default{
		data() {
			return {
				input:'',					
				flowList1:[],
				flowList2:[],
				flowList3:[],
				list:[						
                    'http://n.sinaimg.cn/sinakd202047s/64/w492h372/20200407/87fe-iryninw2672238.jpg',
					'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.zyccst.com%2Fupload%2Fupay%2F877179%2F2%2FE58FAA322E6A7067.jpg&refer=http%3A%2F%2Fi.zyccst.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626593776&t=5fce91044fd2fb0a7eb26eb803083a54',
					'https://img1.baidu.com/it/u=3436078025,1338630003&fm=26&fmt=auto&gp=0.jpg'  
				],
				shenyiList:[],
				yaocaiList:[],
				yangshengList:[],
			}
		},
		methods:{
			ToShenyi(){
				uni.navigateTo({
				    url: '/pages/index/shenyi',
				});
			},
			ToYaocai(){
				uni.navigateTo({
				    url: '/pages/index/yaocai',
				});
			},
			ToYangsheng(){
				uni.navigateTo({
				    url: '/pages/index/yangsheng',
				});
			},
			loadData(){
				axios.get('http://localhost:3000/shenyi').then((response) => {
				    this.shenyiList=response.data;
					console.log(response)
				    })
				axios.get('http://localhost:3000/yaocai').then((response) => {
				    this.yaocaiList=response.data;
					console.log(response)
				    })
				axios.get('http://localhost:3000/yangsheng').then((response) => {
				    this.yangshengList=response.data;
					console.log(response)
				    })
			}
			
			
		},
		mounted() {
			this.loadData();
		}
		
			
	}
</script>

<style scoped>
	.btn1{
		width: 30rpx;
		color: #606266;
		position: absolute;
		top:50%;
		margin-top: -37px;
		margin-left: 10px;
	}
	.btn2{
		width: 30rpx;
		color: #606266;
		position: absolute;
		top:50%;
		margin-top: -37px;
		margin-left: 90px;
	}
	.titlebtn{
		display: inline;
		position: relative;
	}
	.box{
		padding-top: 10px;
	}
	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}
		
	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}	
	.demo-image {
		width: 100%;
		border-radius: 4px;
	}		
	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}
	#app{
		padding: 10px;
	}

</style>
