<template>
	<div class="geren_xinxi" v-cloak>
		<!--头部-->
		<head-view title="个人信息" border="false"></head-view>
		<!--内容-->
		<div class="wrap">
			<div class="mian touxiang">
				<span class="title">头像</span>
				<div class="mian_right">
					<img class="tou" src="../../assets/my/ge_motou.png"/>
					<img class="right_arrow" src="../../assets/my/mo_tiaozhuan.png"/>
				</div>
			</div>
			<div class="mian list">
				<span class="title">昵称</span>
				<div class="mian_right" @click="nicheng">
					<div class="xinxi">
						J.K
					</div>
					<img class="right_arrow" src="../../assets/my/mo_tiaozhuan.png"/>
				</div>
			</div>
			<div class="mian list">
				<span class="title">手机号</span>
				<div class="mian_right" @click="phone">
					<div class="xinxi">
						17854258566
					</div>
					<img class="right_arrow" src="../../assets/my/mo_tiaozhuan.png"/>
				</div>
			</div>
			<div class="mian list">
				<span class="title">昵称</span>
				<div class="mian_right">
					<div class="xinxi">
						男
					</div>
					<img class="right_arrow" src="../../assets/my/mo_tiaozhuan.png"/>
				</div>
			</div>
			<div class="mian list">
				<span class="title">昵称</span>
				<div class="mian_right">
					<div class="xinxi">
						18岁以下
					</div>
					<img class="right_arrow" src="../../assets/my/mo_tiaozhuan.png"/>
				</div>
			</div>
		</div>
		<!--保存按钮-->
		<div class="save_button">
			<div class="button" @click="save">
				保存
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'geren_xinxi',
		data() {
			return {

			}
		},
		created: function(e) {

		},
		methods: {
			//修改昵称
			nicheng(){
				this.$router.push({
					path: '/xiugai_nicheng'
				})
			},
			//修改手机号
			phone(){
				this.$router.push({
					path: '/xiugai_shouji'
				})
			},
			//保存
			save(){
				alert(1)
			}
		},
		mounted: function(e) {

		}
	}
</script>

<style>
	
	.geren_xinxi .wrap {
		background: #fff;
		width: 100%;
		margin-top: 0.2rem;
	}
	
	.geren_xinxi .wrap .mian {
		border-bottom: 1px solid #F0F0F0;
		/*no*/
		padding: 0 0.25rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.geren_xinxi .wrap .mian .title{
		font-size:0.32rem;
		font-weight: 400;
		color: #646464;
		letter-spacing: 1px;/*no*/
	}
	.geren_xinxi .wrap .touxiang{
		height: 1.4rem;
	}
	.geren_xinxi .wrap .list{
		height: 0.9rem;
	}
	.geren_xinxi .wrap .list .xinxi{
		font-weight:400;
		color: #323232;
		font-size: 0.32rem;
		max-width: 4rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		letter-spacing: 1px; /*no*/
	}
	
	.geren_xinxi .wrap .mian:last-child {
		border-bottom: none;
	}
	.geren_xinxi .wrap .mian .mian_right{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 5rem;
		height: 100%;
	}
	.geren_xinxi .wrap .mian .mian_right .tou{
		width: 1.04rem;
		height: 1.04rem;
	}
	.geren_xinxi .wrap .mian .mian_right .right_arrow{
		height: 0.34rem;
		margin-left: 0.11rem;
	}
	.geren_xinxi .save_button{
		position: fixed;
		bottom: 1rem;
		width: 100%;
	}
	.geren_xinxi .save_button .button{
		height: 0.9rem;
		width: 6.9rem;
		background: #2873EE;
		margin: 0 auto;
		text-align: center;
		line-height: 0.9rem;
		font-size: 0.36rem;
		color: #fff;
		letter-spacing: 6px;
		border-radius: 0.06rem;
	}
</style>