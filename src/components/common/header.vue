<template>
	<div class="head_nav" :class="border_show?'head_nav_border':''">
		<div class="left" @click="back">
			<img src="../../assets/common/back.png"/>
		</div>
		<div class="center">
			{{title}}
		</div>
		<div class="right"></div>
	</div>
</template>

<script>
	export default {
		name: 'head_nav',
		data() {
			return {
				border_show:true
			}
		},
		props:["title","border"],
		created: function(e) {
			if(this.border=='false'){
				this.border_show=false
			}
		},
		methods: {
			back(){
				this.$router.go(-1)
			}
		},
		mounted: function(e) {

		}
	}
</script>

<style>
	.head_nav{
		height: 0.88rem;
		width: 100%;
		background: #FAFAFA;
		padding: 0 0.21rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.head_nav_border{
		border-bottom: 1px solid #ccc;/*no*/
	}
	.head_nav .left{
		height: 100%;
		width: 1rem;
		position: relative;
	}
	.head_nav .left img{
		height: 0.36rem;
		position: absolute;
		top: 50%;
		margin-top: -0.18rem;
	}
	.head_nav .center{
		font-size:0.36rem;
		color: #323232;
		font-weight: bold;
		letter-spacing: 1px;
	}
	.head_nav .right{
		width: 1rem;
	}
</style>