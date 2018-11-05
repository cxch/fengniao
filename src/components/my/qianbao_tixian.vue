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
					<div class="mian_com zhifu_type fr">
						微信余额
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
			<!--提现按钮-->
			<div class="tixian_button" v-if="tixian_show" @click="chongzhi">
				确认提现
			</div>
			<div class="tixian_button wei_tixian" v-else @click="chongzhi">
				确认提现
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'qianbao_tixian',
		data() {
			return {
				//输入金额
				money: "",
				//可提现金额
				tixian_money:"100.0",
				//超额提醒
				chaoe_show:false,
				//提现提示
				tixian_show:false
				
			}
		},
		created: function(e) {

		},
		watch:{
			money:function(){
				if(this.money > Number(this.tixian_money)){
					this.chaoe_show = true
				}else{
					this.chaoe_show = false
				}
				if(this.money&&!this.chaoe_show){
					this.tixian_show = true
				}else{
					this.tixian_show = false
				}
			}
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
			},
			//全部提现
			tixian_all(){
				this.money = Number(this.tixian_money)
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
	
	.qianbao_tixian .wrap .mian .mian_top .mian_com {
		line-height: 0.99rem;
		font-size: 0.3rem;
		letter-spacing: 0.01rem;
		font-weight: bold;
	}
	
	.qianbao_tixian .wrap .mian .mian_top .zhifu_type {
		color: #343434;
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
	.qianbao_tixian .wrap .mian .mian_bottom{
		height: 0.8rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.qianbao_tixian .wrap .mian .mian_bottom .tixian_money{
		font-size: 0.24rem;
		color: #A5A5A5;
		flex-grow: 1;
		letter-spacing: 0.02rem;
	}
	.qianbao_tixian .wrap .mian .mian_bottom .tixian_all{
		font-size: 0.26rem;
		color: #2873EE;
		letter-spacing: 1px;
		font-weight: bold;
	}
	.qianbao_tixian .wrap .mian .mian_bottom .chao_e{
		color: #FF0B0B;
		font-weight:bold;
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
	.qianbao_tixian .wrap .wei_tixian{
		background:rgba(40,115,238,0.6);
	}
</style>