<template>
	<div class="qianbao" v-cloak>
		<!--头部-->
		<head-view title="我的钱包" border="false"></head-view>
		<!--余额信息-->
		<div class="money">
			<div class="mian">
				<div class="yue_text">
					账户余额&nbsp;&nbsp;(元)
				</div>
				<div class="yue">
					100.0
				</div>
			</div>
			<div class="shouyi">
				<img src="../../assets/my/money_shouyi.png"/>
				<div>
					收益金额：50元
				</div>
			</div>
		</div>
		<!--充值、提现-->
		<div class="wrap">
			<div class="mian" @click="chongzhi">
				<img class="title_img" src="../../assets/my/money_chongzhi.png"/>
				<div>
					充值
				</div>
				<img class="tight_arrow" src="../../assets/my/money_right.png"/>
			</div>
			<div class="mian" @click="tixian">
				<img class="title_img" src="../../assets/my/money_tixian.png"/>
				<div>
					提现
				</div>
				<img class="tight_arrow" src="../../assets/my/money_right.png"/>
			</div>
		</div>
		<!--明细-->
		<div class="wrap">
			<div class="mian" @click="mingxi">
				<img class="title_img" src="../../assets/my/money_mingxi.png"/>
				<div>
					明细
				</div>
				<img class="tight_arrow" src="../../assets/my/money_right.png"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'qianbao',
		data() {
			return {

			}
		},
		created: function(e) {

		},
		methods: {
			//充值跳转
			chongzhi(){
				this.$router.push({
					path: '/qianbao_chongzhi'
				})
			},
			//提现跳转
			tixian(){
				this.$router.push({
					path: '/qianbao_tixian'
				})
			},
			//明细
			mingxi(){
				this.$router.push({
					path: '/qianbao_mingxi'
				})
			}
		},
		mounted: function(e) {

		}
	}
</script>

<style>
	.qianbao .money{
		background: url('../../assets/my/money_bg.png') no-repeat;
		background-size: 100% 100%;
		min-height: 3.12rem;
		width: 100%;
		position: relative;
	}
	.qianbao .money .mian{
		height: 100%;
		width: 100%;
		padding: 0.63rem 0 0 0.27rem;
	}
	.qianbao .money .mian .yue_text{
		font-size: 0.3rem;
		color: #fff;
	}
	.qianbao .money .mian .yue{
		font-size: 0.8rem;
		margin-top: 0.3rem;
		color: #fff;
	}
	.qianbao .money .shouyi{
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 0.8rem;
		background:rgba(0,0,0,0.1);
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding-left: 0.3rem;
	}
	.qianbao .money .shouyi img{
		width: 0.32rem;
		margin-right: 0.16rem;
	}
	.qianbao .money .shouyi div{
		font-size:0.28rem;
		color: #fff;
		letter-spacing: 1px;
	}
	.qianbao .wrap{
		background: #fff;
		padding-left: 0.3rem;
		margin-bottom: 0.2rem;
	}
	.qianbao .wrap .mian{
		height: 0.88rem;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding-right: 0.3rem;
		border-bottom: 1px solid #F0F0F0;
	}
	.qianbao .wrap .mian:last-child{
		border-bottom:none;
	}
	.qianbao .wrap .mian .title_img{
		width: 0.4rem;
	}
	.qianbao .wrap .mian div{
		flex-grow:1;
		margin-left: 0.3rem;
		font-size: 0.3rem;
		color: #323232;
	}
	.qianbao .wrap .mian .tight_arrow{
		width: 0.17rem;
	}
</style>