<template>
	<div class="guanyu" v-cloak>
		<!--头部-->
		<head-view title="关于我们" border="false" v-cloak></head-view>
		<!--介绍-->
		<div class="wrap">
			<div class="main">
				<div class="main_left">
					平台简介
				</div>
				<div class="mian_center">

				</div>
				<img src="../../assets/my/mo_tiaozhuan.png" />
			</div>
			<div class="main" @click="tel">
				<div class="main_left">
					客服电话
				</div>
				<div class="mian_center">
					400-110-9808
				</div>
				<img src="../../assets/my/mo_tiaozhuan.png" />
			</div>
			<div class="main">
				<div class="main_left">
					版本信息
				</div>
				<div class="mian_center">
					V1.0
				</div>
			</div>
			<div class="main">
				<div class="main_left">
					用户协议
				</div>
				<div class="mian_center">

				</div>
				<img src="../../assets/my/mo_tiaozhuan.png" />
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		name: 'guanyu',
		data() {
			return {

			}
		},
		created: function(e) {

		},
		methods: {
			tel() {
				window.location.href = "tel:123123123";
			}
		},
		mounted: function(e) {

		}
	}
</script>

<style>
	.guanyu .wrap {
		background: #FFFFFF;
		margin-top: 0.2rem;
	}
	
	.guanyu .wrap .main {
		border-bottom: 1px solid #F0F0F0;
		height: 0.9rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0 0.25rem;
	}
	
	.guanyu .wrap .main:last-child {
		border: none;
	}
	
	.guanyu .wrap .main .main_left {
		font-size: 0.32rem;
		color: #323232;
	}
	
	.guanyu .wrap .main .mian_center {
		flex-grow: 1;
		text-align: right;
		font-size: 0.32rem;
		color: #323232;
		letter-spacing: 0.01rem;
	}
	
	.guanyu .wrap .main img {
		height: 0.3rem;
		margin-left: 0.17rem;
	}
</style>