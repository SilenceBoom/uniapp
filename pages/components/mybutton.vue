<template name="mybutton">
	<button @click="handleRoute()" :style="styles">{{title}}<slot></slot></button>
</template>

<script>
	export default{
		name:"mybutton",
		props:{
			title:{
				type:String,
				default:''
			},
			color:{
				type:String,
				default:'#00cc66'
			},
			computed:{
				styles(){
					return{
						background:this.color
					}
			    }
			}
		},
		methods:{
			handleRoute(){
				this.$emit('clickback');
			}
		}
	}
</script>

<style>
	button{
		border: 0;
		outline: none;
		color: grey;
		padding: 1px 2px;
		height: 50px;
		width: 80px;
	}
	button:active{
		position: relative;
		top: 1px;
		left: 1px;
	}
</style>
