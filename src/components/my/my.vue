<template>
	<div class="my" v-cloak>
		<!--头像、用户名-->
		<div class="touxiang">
			<img class="tou_img" :src="label.img?label.img:require('../../assets/my/ge_motou.png')" />
			<div class="user_name">
				J.K
			</div>
		</div>
		<!--个人信息、我的标签-->
		<div class="wrap">
			<!--个人信息-->
			<div class="label" @click="geren">
				<img class="badge" src="../../assets/my/my_icon01.png" />
				<div class="label_main">
					个人信息
				</div>
				<img class="right_arrow" src="../../assets/my/mo_tiaozhuan.png" />
			</div>
			<!--我的标签-->
			<div class="label">
				<img class="badge" src="../../assets/my/my_icon02.png" />
				<div class="label_main">
					我的标签
				</div>
				<img class="right_arrow" src="../../assets/my/mo_tiaozhuan.png" />
			</div>
		</div>
		<!--推广订单-->
		<div class="wrap">
			<div class="label label_dd">
				<!--<div class="ding_dan">-->
					<img class="badge" src="../../assets/my/my_icon03.png" />
					<div class="label_main">
						推广订单
					</div>
					<img class="right_arrow" src="../../assets/my/mo_tiaozhuan.png" />
				<!--</div>-->

			</div>
			<div class="status">
				<div class="item">
					<img src="../../assets/my/status01.png" />
					<div class="status_des">全部</div>
				</div>
				<div class="item">
					<img src="../../assets/my/status02.png" />
					<div class="status_des">未完成</div>
				</div>
				<div class="item">
					<img src="../../assets/my/status03.png" />
					<div class="status_des">待评价</div>
				</div>
				<div class="item">
					<img src="../../assets/my/status04.png" />
					<div class="status_des">已完成</div>
				</div>
			</div>
		</div>
		<div class="wrap">
			<div class="label" @click="qianbao">
				<img class="badge" src="../../assets/my/my_icon04.png" />
				<div class="label_main">
					我的钱包
				</div>
				<img class="right_arrow" src="../../assets/my/mo_tiaozhuan.png" />
			</div>
			<div class="label">
				<img class="badge" src="../../assets/my/my_icon05.png" />
				<div class="label_main">
					我的收藏
				</div>
				<img class="right_arrow" src="../../assets/my/mo_tiaozhuan.png" />
			</div>
			<div class="label">
				<img class="badge" src="../../assets/my/my_icon06.png" />
				<div class="label_main">
					关于我们
				</div>
				<img class="right_arrow" src="../../assets/my/mo_tiaozhuan.png" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'my',
		data() {
			return {
				label: []
			}
		},
		created: function(e) {

		},
		methods: {
			//跳转到个人信息
			geren(){
				this.$router.push({
					path: '/geren_xinxi'
				});
			},
			//跳转到我的钱包
			qianbao(){
				this.$router.push({
					path: '/qianbao'
				});
			}
		},
		mounted: function(e) {

		}
	}
</script>

<style>
	.my .touxiang {
		height: 2.6rem;
		width: 100%;
		background: #2873EE;
		display: flex;
		align-items: center;
		flex-flow: column;
	}
	
	.my .touxiang .tou_img {
		width: 1.2rem;
		height: 1.2rem;
		margin: 0.47rem auto 0;
	}
	
	.my .touxiang .user_name {
		font-size: 0.28rem;
		color: #FFFFFF;
		margin-top: 0.24rem;
	}
	
	.my .wrap {
		background: #fff;
		margin-bottom: 0.2rem;
	}
	
	.my .wrap:last-child {
		margin-bottom: 0;
	}
	
	.my .wrap .label {
		height: 1rem;
		width: 100%;
		padding: 0 0.3rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-bottom: 1px solid #F0F0F0;
	}
	.my .wrap .label.label_dd{
		padding: 0;
		margin:  0 0.3rem;
		width: calc(100% - 0.6rem);
		border-bottom: 1px solid #F0F0F0;
	}
	
	.my .wrap .label .badge {
		width: 0.4rem;
		height: 0.4rem;
		margin-right: 0.17rem;
	}
	
	.my .wrap .label .label_main {
		flex-grow: 1;
		color: #323232;
		font-size: 0.32rem;
	}
	
	.my .wrap .label .right_arrow {
		height: 0.3rem;
	}
	/*推广订单*/
	
	.my .wrap .status {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 1.5rem;
		text-align: center;
	}
	.my .wrap .label_dd{
		border: none;
	}
	/*.my .wrap .ding_dan{
		border-bottom: 1px solid #F0F0F0;
	}*/
	.my .wrap .status .item {
		padding-top: 0.2rem;
	}
	
	.my .wrap .status img {
		width: 0.44rem;
		height: 0.4rem;
	}
	
	.my .wrap .status .status_des {
		font-size: 0.24rem;
		font-weight: 500;
		color: #646464;
		margin-top: 0.1rem;
	}
</style>