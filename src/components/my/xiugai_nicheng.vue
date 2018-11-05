<template>
	<div class="xiugai_nicheng" v-cloak>
		<!--头部-->
		<head-view title="修改昵称"></head-view>
		<!--昵称输入-->
		<div class="nicheng">
			<input type="text" autofocus="autofocus" v-model="nicheng_input" name="" id="" value="" />
			<a href="javaScript:;" v-if="nicheng_input" @click="clear">
				<img src="../../assets/common/del.png"/>
			</a>
		</div>
		<!--保存按钮-->
		<div class="baocun_button" @click="baocun">
			保存
		</div>
	</div>
</template>

<script>
	export default {
		name: 'xiugai_nicheng',
		data() {
			return {
				nicheng_input:"J.K"
			}
		},
		created: function(e) {

		},
		methods: {
			//清除input内容
			clear(){
				this.nicheng_input = "";
			},
			//保存
			baocun(){
				if(!$.trim(this.nicheng_input)){
					this.$dialog.toast({
	                    mes: '请填写昵称信息',
	                    timeout: 1500,
	                    icon: 'error',
	                    callback: () => {
	                        this.nicheng_input = ''
	                    }
	                });
				}
			}
		},
		mounted: function(e) {

		}
	}
</script>

<style>
	.xiugai_nicheng .nicheng{
		height: 0.9rem;
		background: #fff;
		padding: 0 0.24rem;
		position: relative;
	}
	.xiugai_nicheng .nicheng input{
		height: 100%;
		width: 85%;
		color: #343434;
		font-size:0.28rem;
		font-weight:bold;
		border: none;
	}
	.xiugai_nicheng .nicheng a {
		position: absolute;
		top: 50%;
		right: 0.24rem;
		margin-top: -0.14rem;
	}
	.xiugai_nicheng .nicheng a img{
		width: 0.28rem;
		height: 0.28rem;
	}
	.xiugai_nicheng .baocun_button{
		width:6.9rem;
		height:0.9rem;
		border-radius:0.06rem;
		background: #2873EE;
		margin: 0.6rem auto 0;
		font-size:0.36rem;
		color: #fff;
		text-align: center;
		line-height: 0.9rem;
		letter-spacing: 0.15rem;
	}
</style>