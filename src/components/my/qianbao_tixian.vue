<template>
	<div class="qianbao_tixian" v-cloak>
		<!--头部-->
		<head-view title="提现" border="false"></head-view>
		<!--提现-->
		<div class="wrap">
			<div class="mian">
				<div class="mian_top clearfix">
					<div class="mian_com title fl">
						提现至
					</div>
					<div class="fr right_arrow" @click="tixian_button">
						<img src="../../assets/my/tixian_right.png" />
					</div>
					<div class="mian_com zhifu_type fr" @click="tixian_button">
						{{tixian_type}}
					</div>

				</div>
				<div class="mian_center">
					<div class="title">
						提现金额
					</div>
					<div class="money">
						<span>￥</span>
						<input type="number" v-model="money" name="" id="" value="" />
					</div>
				</div>
				<div class="mian_bottom" v-if="!chaoe_show">
					<div class="tixian_money">
						可提现金额￥{{tixian_money}}
					</div>
					<div class="tixian_all" @click="tixian_all">
						全部提现
					</div>
				</div>
				<div class="mian_bottom" v-else>
					<div class="chao_e">
						输入金额超过余额
					</div>
				</div>
			</div>
			<!--支付宝-->
			<div class="mian alipay" v-if="tixian_type=='支付宝余额'">
				<div class="mian_alipay">
					<div>支付宝账号</div>
					<input type="text" name="" v-model="alipay_account" placeholder="请输入支付宝账号" id="" value="" />
				</div>
				<div class="mian_alipay">
					<div>姓名</div>
					<input type="text" name="" v-model="alipay_name" placeholder="请输入真实姓名" id="" value="" />
				</div>
			</div>
			<!--提现按钮-->
			<div class="tixian_button" v-if="tixian_show" @click="tixian">
				确认提现
			</div>

			<div class="tixian_button wei_tixian" v-else>
				确认提现
			</div>
		</div>
		<yd-actionsheet :items="myItems1" v-model="show1" cancel="取消"></yd-actionsheet>
	</div>
</template>

<script>
	export default {
		name: 'qianbao_tixian',
		data() {
			return {
				//提现方式
				tixian_type: "微信余额",
				//输入金额
				money: "",
				//可提现金额
				tixian_money: "100.0",
				//超额提醒
				chaoe_show: false,
				//提现提示
				tixian_show: false,
				//支付宝账号
				alipay_account: "",
				//支付宝姓名
				alipay_name: "",
				//上拉菜单显示
				show1: false,
				//上拉菜单内容
				myItems1: [{
						label: '微信余额',
						callback: () => {
							this.tixian_type = "微信余额"
						}
					},
					{
						label: '支付宝余额',
						callback: () => {
							this.tixian_type = "支付宝余额"
						}
					}
				]

			}
		},
		created: function(e) {

		},
		watch: {
			money: function() {
				//小于超额
				if(this.money > Number(this.tixian_money)) {
					this.chaoe_show = true
				} else {
					this.chaoe_show = false
				}
				//大于超额
				if(this.money && !this.chaoe_show) {
					this.tixian_show = true
				} else {
					this.tixian_show = false
				}
			}
		},
		methods: {

			tixian() {
				var num = /^[1-9]\d*$/
				if(!num.test(this.money)) {
					this.$dialog.toast({
						mes: '请输入正整数',
						timeout: 1500,
						icon: 'error',
					});
				} else if(this.tixian_type = "支付宝余额") {
					if(!$.trim(this.alipay_account)) {
						this.$dialog.toast({
							mes: '请填写账号',
							timeout: 1500,
							icon: 'error',
							callback: () => {
								return false;
							}
						});
					} else if(!$.trim(this.alipay_name)) {
						this.$dialog.toast({
							mes: '请填写账号姓名',
							timeout: 1500,
							icon: 'error',
							callback: () => {
								return false;
							}
						});
					}else{
						this.submit()
					}
				} else {
					this.submit ()
				}

			},
			//全部提现
			tixian_all() {
				this.money = Number(this.tixian_money)
			},
			//提现方式
			tixian_button() {
				this.show1 = true;
			}
		},
		mounted: function(e) {

		}
	}
</script>

<style>
	.qianbao_tixian .wrap {
		padding: 0.21rem 0.23rem 0 0.25rem;
	}
	
	.qianbao_tixian .wrap .mian {
		padding: 0 0.3rem;
		width: 100%;
		background: #fff;
		border-radius: 0.06rem;
	}
	
	.qianbao_tixian .wrap .mian .mian_top {
		border-bottom: 1px solid #F0F0F0;
		height: 0.99rem;
	}
	
	.qianbao_tixian .wrap .mian .mian_top .right_arrow {
		height: 100%;
		display: flex;
		align-items: center;
		margin-left: 0.23rem;
	}
	
	.qianbao_tixian .wrap .mian .mian_top .right_arrow img {
		height: 0.28rem;
	}
	
	.qianbao_tixian .wrap .mian .mian_top .mian_com {
		line-height: 0.99rem;
		font-size: 0.3rem;
		letter-spacing: 0.01rem;
		font-weight: bold;
	}
	
	.qianbao_tixian .wrap .mian .mian_top .zhifu_type {
		color: #343434;
		letter-spacing: 1px;
		min-width: 3rem;
		text-align: right;
	}
	
	.qianbao_tixian .wrap .mian .title {
		color: #A5A5A5;
		font-size: 0.3rem;
		font-weight: bold;
	}
	
	.qianbao_tixian .wrap .mian .mian_center {
		padding: 0.5rem 0 0.56rem;
		border-bottom: 1px solid #F0F0F0;
	}
	
	.qianbao_tixian .wrap .mian .mian_center .money {
		margin-top: 0.48rem;
	}
	
	.qianbao_tixian .wrap .mian .mian_center .money span {
		font-size: 0.6rem;
		color: #343434;
		font-weight: bold;
	}
	
	.qianbao_tixian .wrap .mian .mian_center .money input {
		width: 80%;
		height: 0.9rem;
		vertical-align: text-bottom;
		border: none;
		font-size: 1rem;
	}
	
	.qianbao_tixian .wrap .mian .mian_bottom {
		height: 0.8rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	
	.qianbao_tixian .wrap .mian .mian_bottom .tixian_money {
		font-size: 0.24rem;
		color: #A5A5A5;
		flex-grow: 1;
		letter-spacing: 0.02rem;
	}
	
	.qianbao_tixian .wrap .mian .mian_bottom .tixian_all {
		font-size: 0.26rem;
		color: #2873EE;
		letter-spacing: 1px;
		font-weight: bold;
	}
	
	.qianbao_tixian .wrap .mian .mian_bottom .chao_e {
		color: #FF0B0B;
		font-weight: bold;
		font-size: 0.24rem;
		letter-spacing: 0.01rem;
	}
	
	.qianbao_tixian .wrap .tixian_button {
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
	
	.qianbao_tixian .wrap .wei_tixian {
		background: rgba(40, 115, 238, 0.6);
	}
	
	.qianbao_tixian .alipay {
		margin-top: 0.67rem;
	}
	
	.qianbao_tixian .wrap .mian .mian_alipay {
		border-bottom: 1px solid #F0F0F0;
		height: 0.99rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	
	.qianbao_tixian .wrap .mian .mian_alipay div {
		min-width: 2.68rem;
		font-size: 0.28rem;
		color: #323232;
	}
	
	.qianbao_tixian .wrap .mian .mian_alipay input {
		height: 100%;
		flex-grow: 1;
		border: none;
		font-size: 0.28rem;
		color: #232323;
	}
	
	.qianbao_tixian .wrap .mian .mian_alipay input::-webkit-input-placeholder {
		color: #CCCCCC;
		font-weight: bold;
		letter-spacing: 0.01rem;
	}
	
	.qianbao_tixian .wrap .mian .mian_alipay input:-moz-placeholder {
		color: #CCCCCC;
		font-weight: bold;
		letter-spacing: 0.01rem;
	}
	
	.qianbao_tixian .wrap .mian .mian_alipay input::-moz-placeholder {
		color: #CCCCCC;
		font-weight: bold;
		letter-spacing: 0.01rem;
	}
	
	.qianbao_tixian .wrap .mian .mian_alipay input:-ms-input-placeholder {
		color: #CCCCCC;
		font-weight: bold;
		letter-spacing: 0.01rem;
	}
</style>