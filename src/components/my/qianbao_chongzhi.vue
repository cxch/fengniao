<template>
	<div class="qianbao_chongzhi" v-cloak>
		<!--头部-->
		<head-view title="我的钱包" border="false" v-cloak></head-view>
		<div class="wrap">
			<div class="mian">
				<div class="mian_top clearfix">
					<div class="mian_com title fl">
						充值方式
					</div>
					<div class="mian_com zhifu_type fr">
						微信支付
					</div>
				</div>
				<div class="mian_bottom">
					<div class="title">
						充值方式
					</div>
					<div class="money">
						<span>￥</span>
						<input type="number" v-model="money" name="" id="" value="" />
					</div>
				</div>
			</div>
			<!--充值按钮-->
			<div class="zhifu_button" @click="chongzhi">
				确认充值
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'qianbao_chongzhi',
		data() {
			return {
				money: ""
			}
		},
		created: function(e) {

		},
		methods: {
			chongzhi() {
				var num = /^[1-9]\d*$/
				if(!num.test(this.money)){
					this.$dialog.toast({
	                    mes: '请输入正整数',
	                    timeout: 1500,
	                    icon: 'error',
	                });
				}else{
					alert(1)
				}
			}
		},
		mounted: function(e) {

		}
	}
</script>

<style>
	.qianbao_chongzhi .wrap {
		padding: 0.21rem 0.23rem 0 0.25rem;
	}
	
	.qianbao_chongzhi .wrap .mian {
		padding: 0 0.3rem;
		width: 100%;
		background: #fff;
		border-radius: 0.06rem;
	}
	
	.qianbao_chongzhi .wrap .mian .mian_top {
		border-bottom: 1px solid #F0F0F0;
		height: 0.99rem;
	}
	
	.qianbao_chongzhi .wrap .mian .mian_top .mian_com {
		line-height: 0.99rem;
		font-size: 0.3rem;
		letter-spacing: 0.01rem;
		font-weight: bold;
	}
	
	.qianbao_chongzhi .wrap .mian .mian_top .zhifu_type {
		color: #343434;
	}
	
	.qianbao_chongzhi .wrap .mian .title {
		color: #A5A5A5;
		font-size: 0.3rem;
		font-weight: bold;
	}
	
	.qianbao_chongzhi .wrap .mian .mian_bottom {
		padding: 0.5rem 0 0.56rem;
	}
	
	.qianbao_chongzhi .wrap .mian .mian_bottom .money {
		margin-top: 0.48rem;
	}
	
	.qianbao_chongzhi .wrap .mian .mian_bottom .money span {
		font-size: 0.6rem;
		color: #343434;
		font-weight: bold;
	}
	
	.qianbao_chongzhi .wrap .mian .mian_bottom .money input {
		width: 80%;
		height: 0.9rem;
		vertical-align: text-bottom;
		border: none;
		font-size: 1rem;
	}
	
	.qianbao_chongzhi .wrap .zhifu_button {
		margin-top: 1.32rem;
		width: 100%;
		height: 0.9rem;
		border-radius: 0.06rem;
		text-align: center;
		line-height: 0.9rem;
		color: #FFFFFF;
		font-size: 0.36rem;
		letter-spacing: 1px;
		background: #2873EE;
	}
</style>